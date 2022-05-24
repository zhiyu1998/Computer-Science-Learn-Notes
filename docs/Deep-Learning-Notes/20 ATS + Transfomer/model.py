import torch
import torch.nn as nn

from functools import partial
from collections import OrderedDict

import torch.nn.functional as F
from torch.nn.utils.rnn import pad_sequence
from torch import nn, einsum
from einops import rearrange, repeat


# helpers

def exists(val):
    return val is not None


def pair(t):
    return t if isinstance(t, tuple) else (t, t)


# adaptive token sampling functions and classes

def log(t, eps=1e-6):
    return torch.log(t + eps)


def sample_gumbel(shape, device, dtype, eps=1e-6):
    u = torch.empty(shape, device=device, dtype=dtype).uniform_(0, 1)
    return -log(-log(u, eps), eps)


def batched_index_select(values, indices, dim=1):
    value_dims = values.shape[(dim + 1):]
    values_shape, indices_shape = map(lambda t: list(t.shape), (values, indices))
    indices = indices[(..., *((None,) * len(value_dims)))]
    indices = indices.expand(*((-1,) * len(indices_shape)), *value_dims)
    value_expand_len = len(indices_shape) - (dim + 1)
    values = values[(*((slice(None),) * dim), *((None,) * value_expand_len), ...)]

    value_expand_shape = [-1] * len(values.shape)
    expand_slice = slice(dim, (dim + value_expand_len))
    value_expand_shape[expand_slice] = indices.shape[expand_slice]
    values = values.expand(*value_expand_shape)

    dim += value_expand_len
    return values.gather(dim, indices)


class AdaptiveTokenSampling(nn.Module):
    def __init__(self, output_num_tokens, eps=1e-6):
        super().__init__()
        self.eps = eps
        self.output_num_tokens = output_num_tokens

    def forward(self, attn, value, mask):
        heads, output_num_tokens, eps, device, dtype = attn.shape[
                                                           1], self.output_num_tokens, self.eps, attn.device, attn.dtype

        # first get the attention values for CLS token to all other tokens

        cls_attn = attn[..., 0, 1:]

        # calculate the norms of the values, for weighting the scores, as described in the paper

        value_norms = value[..., 1:, :].norm(dim=-1)

        # weigh the attention scores by the norm of the values, sum across all heads

        cls_attn = einsum('b h n, b h n -> b n', cls_attn, value_norms)

        # normalize to 1

        normed_cls_attn = cls_attn / (cls_attn.sum(dim=-1, keepdim=True) + eps)

        # instead of using inverse transform sampling, going to invert the softmax and use gumbel-max sampling instead

        pseudo_logits = log(normed_cls_attn)

        # mask out pseudo logits for gumbel-max sampling

        mask_without_cls = mask[:, 1:]
        mask_value = -torch.finfo(attn.dtype).max / 2
        pseudo_logits = pseudo_logits.masked_fill(~mask_without_cls, mask_value)

        # expand k times, k being the adaptive sampling number

        pseudo_logits = repeat(pseudo_logits, 'b n -> b k n', k=output_num_tokens)
        pseudo_logits = pseudo_logits + sample_gumbel(pseudo_logits.shape, device=device, dtype=dtype)

        # gumble-max and add one to reserve 0 for padding / mask

        sampled_token_ids = pseudo_logits.argmax(dim=-1) + 1

        # calculate unique using torch.unique and then pad the sequence from the right

        unique_sampled_token_ids_list = [torch.unique(t, sorted=True) for t in torch.unbind(sampled_token_ids)]
        unique_sampled_token_ids = pad_sequence(unique_sampled_token_ids_list, batch_first=True)

        # calculate the new mask, based on the padding

        new_mask = unique_sampled_token_ids != 0

        # CLS token never gets masked out (gets a value of True)

        new_mask = F.pad(new_mask, (1, 0), value=True)

        # prepend a 0 token id to keep the CLS attention scores

        unique_sampled_token_ids = F.pad(unique_sampled_token_ids, (1, 0), value=0)
        expanded_unique_sampled_token_ids = repeat(unique_sampled_token_ids, 'b n -> b h n', h=heads)

        # gather the new attention scores

        new_attn = batched_index_select(attn, expanded_unique_sampled_token_ids, dim=2)

        # return the sampled attention scores, new mask (denoting padding), as well as the sampled token indices (for the residual)
        return new_attn, new_mask, unique_sampled_token_ids


def drop_path(x, drop_prob: float = 0., training: bool = False):
    """Drop paths (Stochastic Depth) per sample (when applied in main path of residual blocks).
    This is the same as the DropConnect impl I created for EfficientNet, etc networks, however,
    the original name is misleading as 'Drop Connect' is a different form of dropout in a separate paper...
    See discussion: https://github.com/tensorflow/tpu/issues/494
    changing the layer and argument names to 'drop path' rather than mix DropConnect as a layer name and use
    'survival rate' as the argument.
    """
    if drop_prob == 0. or not training:
        return x
    keep_prob = 1 - drop_prob
    shape = (x.shape[0],) + (1,) * (x.ndim - 1)
    random_tensor = keep_prob + torch.rand(shape, dtype=x.dtype, device=x.device)
    random_tensor.floor_()
    output = x.div(keep_prob) * random_tensor
    return output


class DropPath(nn.Module):
    """Drop paths (Stochastic Depth) per sample  (when applied in main path of residual blocks).
    """

    def __init__(self, drop_prob=None):
        super(DropPath, self).__init__()
        self.drop_prob = drop_prob

    def forward(self, x):
        return drop_path(x, self.drop_prob, self.training)


class PatchEmbed(nn.Module):
    """ 2D Image to Patch Embedding
    """

    def __init__(self, img_size=224, patch_size=16, in_c=3, embed_dim=768, norm_layer=None, flatten=True):
        super().__init__()
        # 例子--花数据  传入： [img_size: 224, patch_size: 16, in_c=3, embed_dim: 768, norm_layer: None, flatten: True]
        img_size = pair(img_size)  # (224, 224)
        patch_size = pair(patch_size)  # (16, 16)
        self.img_size = img_size
        self.patch_size = patch_size
        self.grid_size = (img_size[0] // patch_size[0], img_size[1] // patch_size[1])  # grid_size: (14, 14)
        self.num_patches = self.grid_size[0] * self.grid_size[1]  # 196
        self.flatten = flatten

        self.proj = nn.Conv2d(in_c, embed_dim, kernel_size=patch_size,
                              stride=patch_size)  # Conv2d(3, 768, kernel_size=(16, 16), stride=(16, 16))
        self.norm = norm_layer(embed_dim) if norm_layer else nn.Identity()

    def forward(self, x):
        # x: Tensor(16, 3, 224, 224)
        # H: 224    W:224   C:3    B: 16
        B, C, H, W = x.shape
        assert H == self.img_size[0] and W == self.img_size[1], \
            f"Input image size ({H}*{W}) doesn't match model ({self.img_size[0]}*{self.img_size[1]})."

        x = self.proj(x)  # Tensor (16, 768, 14, 14)
        if self.flatten:
            # flatten（传入维度进行展平） -> x: Tensor(16, 768, 196)   [B, C, H, W] -> [B, C, HW]
            # transpose(维度交换) -> x: Tensor(16, 196, 768)         [B, C, HW] -> [B, HW, C]
            x = x.flatten(2).transpose(1, 2)
        x = self.norm(x)
        return x


class Attention(nn.Module):
    def __init__(self,
                 dim,
                 num_heads=8,
                 qkv_bias=False,
                 qk_scale=None,
                 attn_drop=0.,
                 proj_drop=0.,
                 output_num_tokens = None):
        super().__init__()
        # 话数据为例： dim: 768  num_heads: 12
        self.num_heads = num_heads  # 12
        head_dim = dim // num_heads  # 64
        self.scale = qk_scale or head_dim ** -0.5  # 0.125

        self.qkv = nn.Linear(dim, dim * 3, bias=qkv_bias)  # Linear(in_features=768, out_features=2304, bias=True)
        self.attn_drop = nn.Dropout(attn_drop)
        self.proj = nn.Linear(dim, dim)
        self.proj_drop = nn.Dropout(proj_drop)

        self.attend = nn.Softmax(dim=-1)

        # TODO:[New]
        self.output_num_tokens = output_num_tokens
        self.ats = AdaptiveTokenSampling(output_num_tokens) if exists(output_num_tokens) else None

    def forward(self, x, *, mask):
        num_tokens = x.shape[1] # TODO:[New]

        # [batch_size, num_patches + 1, total_embed_dim]
        B, N, C = x.shape

        # qkv(): -> [batch_size, num_patches + 1, 3 * total_embed_dim]
        # reshape: -> [batch_size, num_patches + 1, 3, num_heads, embed_dim_per_head]
        # permute: -> [3, batch_size, num_heads, num_patches + 1, embed_dim_per_head]
        qkv = self.qkv(x).reshape(B, N, 3, self.num_heads, C // self.num_heads).permute(2, 0, 3, 1, 4)
        # [batch_size, num_heads, num_patches + 1, embed_dim_per_head]
        q, k, v = qkv[0], qkv[1], qkv[2]  # make torchscript happy (cannot use tensor as tuple)

        # transpose: -> [batch_size, num_heads, embed_dim_per_head, num_patches + 1]
        # @: multiply -> [batch_size, num_heads, num_patches + 1, num_patches + 1]
        attn = (q @ k.transpose(-2, -1)) * self.scale

        # TODO:[New]
        if exists(mask):
            dots_mask = rearrange(mask, 'b i -> b 1 i 1') * rearrange(mask, 'b j -> b 1 1 j')
            mask_value = -torch.finfo(attn.dtype).max
            attn = attn.masked_fill(~dots_mask, mask_value)

        attn = self.attend(attn)

        # TODO:[New]
        sampled_token_ids = None
        # TODO:[New]
        # if adaptive token sampling is enabled
        # and number of tokens is greater than the number of output tokens
        if exists(self.output_num_tokens) and (num_tokens - 1) > self.output_num_tokens:
            attn, mask, sampled_token_ids = self.ats(attn, v, mask=mask)

        # @: multiply -> [batch_size, num_heads, num_patches + 1, embed_dim_per_head]
        # transpose: -> [batch_size, num_patches + 1, num_heads, embed_dim_per_head]
        # reshape: -> [batch_size, num_patches + 1, total_embed_dim]
        x = torch.matmul(attn, v)
        x = rearrange(x, 'b h n d -> b n (h d)')
        x = self.proj(x)
        x = self.proj_drop(x)
        return x, mask, sampled_token_ids


# multi-layer perceptron
class Mlp(nn.Module):
    """ MLP as used in Vision Transformer, MLP-Mixer and related networks
    """

    def __init__(self, in_features, hidden_features=None, out_features=None, act_layer=nn.GELU, drop=0.):
        super().__init__()
        out_features = out_features or in_features
        hidden_features = hidden_features or in_features
        self.fc1 = nn.Linear(in_features, hidden_features)  # Linear(in_features=768, out_features=3072, bias=True)
        self.act = act_layer()
        self.fc2 = nn.Linear(hidden_features, out_features)  # Linear(in_features=3072, out_features=768, bias=True)
        self.drop = nn.Dropout(drop)

    def forward(self, x):
        x = self.fc1(x)  # (16, 197, 3072)
        x = self.act(x)  # (16, 197, 3072)
        x = self.drop(x)  # (16, 197, 3072)
        x = self.fc2(x)  # (16, 197, 768)
        x = self.drop(x)  # (16, 197, 768)
        return x


# Encoder Block
class Block(nn.Module):

    def __init__(self,
                 dim,
                 num_heads,
                 mlp_ratio=4.,
                 qkv_bias=False,
                 qk_scale=None,
                 drop=0.,
                 attn_drop=0.,
                 drop_path=0.,
                 act_layer=nn.GELU,
                 norm_layer=nn.LayerNorm,
                 output_num_tokens=None
                 ):
        super().__init__()
        # 花图为例： dim: 768  num_heads:12 mlp_ratio:4 qkv_bias:True qkv_scale:None drop:0.0 attn_drop:0.0 drop_path:0.0
        self.norm1 = norm_layer(dim)
        self.attn = Attention(dim, num_heads=num_heads, qkv_bias=qkv_bias, qk_scale=qk_scale, attn_drop=attn_drop,
                              proj_drop=drop, output_num_tokens=output_num_tokens)

        self.drop_path = DropPath(drop_path) if drop_path > 0. else nn.Identity()
        self.norm2 = norm_layer(dim)
        # feature -> 2304

        mlp_hidden_dim = int(dim * mlp_ratio)  # 3072 (dim(768) * 4)
        self.mlp = Mlp(in_features=dim, hidden_features=mlp_hidden_dim, act_layer=act_layer, drop=drop)
        # feature -> 3072

    def forward(self, x):
        # TODO[根据ATS大改]
        b, n = x.shape[:2]

        # b, n, device = *x.shape[:2], x.device
        #
        # # use mask to keep track of the paddings when sampling tokens
        # # as the duplicates (when sampling) are just removed, as mentioned in the paper
        # mask = torch.ones((b, n), device=device, dtype=torch.bool)

        # use mask to keep track of the paddings when sampling tokens
        # as the duplicates (when sampling) are just removed, as mentioned in the paper
        mask = torch.ones((b, n), dtype=torch.bool)

        # token_ids = torch.arange(n)
        # token_ids = repeat(token_ids, 'n -> b n', b=b)

        self.norm1(x)

        attn_out, mask, sampled_token_ids = self.attn(x, mask=mask)

        # when token sampling, one needs to then gather the residual tokens with the sampled token ids
        if exists(sampled_token_ids):
            x = batched_index_select(x, sampled_token_ids, dim=1)
            # token_ids = batched_index_select(token_ids, sampled_token_ids, dim=1)

        x = x + self.drop_path(attn_out)
        x = x + self.drop_path(self.mlp(self.norm2(x)))
        return x


class VisionTransformer(nn.Module):
    def __init__(self, img_size=224,
                 patch_size=16,
                 in_c=3,
                 num_classes=1000,
                 embed_dim=768,
                 depth=12,
                 num_heads=12,
                 mlp_ratio=4.0,
                 qkv_bias=True,
                 qk_scale=None,
                 representation_size=None,
                 distilled=False,
                 drop_ratio=0.,
                 attn_drop_ratio=0.,
                 drop_path_ratio=0.,
                 embed_layer=PatchEmbed,
                 norm_layer=None,
                 act_layer=None,
                 max_tokens_per_depth=(256, 128, 64, 32, 16, 8, 8, 8, 8, 8, 8, 8)):
        """
        Args:
            img_size (int, tuple): input image size
            patch_size (int, tuple): patch size
            in_c (int): number of input channels
            num_classes (int): number of classes for classification head
            embed_dim (int): embedding dimension
            depth (int): depth of transformer
            num_heads (int): number of attention heads
            mlp_ratio (int): ratio of mlp hidden dim to embedding dim
            qkv_bias (bool): enable bias for qkv if True
            qk_scale (float): override default qk scale of head_dim ** -0.5 if set
            representation_size (Optional[int]): enable and set representation layer (pre-logits) to this value if set
            distilled (bool): model includes a distillation token and head as in DeiT models 【为了兼容DEIT模型所使用，不用管】
            drop_ratio (float): dropout rate
            attn_drop_ratio (float): attention dropout rate
            drop_path_ratio (float): stochastic depth rate
            embed_layer (nn.Module): patch embedding layer
            norm_layer: (nn.Module): normalization layer
            //TODO；max_tokens_per_depth：a tuple that denotes the maximum number of tokens that any given layer should have. if the layer has greater than this amount, it will undergo adaptive token sampling
        """
        super(VisionTransformer, self).__init__()
        self.num_classes = num_classes
        self.num_features = self.embed_dim = embed_dim
        self.num_tokens = 2 if distilled else 1
        norm_layer = norm_layer or partial(nn.LayerNorm, eps=1e-6)
        act_layer = act_layer or nn.GELU

        self.patch_embed = embed_layer(img_size=img_size, patch_size=patch_size, in_c=in_c, embed_dim=embed_dim)
        num_patches = self.patch_embed.num_patches

        # cls_token_shape: [1, 1, 768]
        self.cls_token = nn.Parameter(torch.zeros(1, 1, embed_dim))
        self.dist_token = nn.Parameter(torch.zeros(1, 1, embed_dim)) if distilled else None
        self.pos_embed = nn.Parameter(torch.zeros(1, num_patches + self.num_tokens, embed_dim))
        self.pos_drop = nn.Dropout(p=drop_ratio)

        dpr = [x.item() for x in torch.linspace(0, drop_path_ratio, depth)]
        self.blocks = nn.Sequential(*[
            Block(dim=embed_dim, num_heads=num_heads, mlp_ratio=mlp_ratio, qkv_bias=qkv_bias, qk_scale=qk_scale,
                  drop=drop_ratio, attn_drop=attn_drop_ratio, drop_path=dpr[i],
                  norm_layer=norm_layer, act_layer=act_layer, output_num_tokens=output_num_tokens)
            for i, output_num_tokens in zip(range(depth), max_tokens_per_depth)
        ])
        self.norm = norm_layer(embed_dim)

        if representation_size and not distilled:
            self.has_logits = True
            self.num_features = representation_size
            self.pre_logits = nn.Sequential(OrderedDict([
                ("fc", nn.Linear(embed_dim, representation_size)),
                ("act", nn.Tanh())
            ]))
        else:
            self.has_logits = False
            self.pre_logits = nn.Identity()

        self.head = nn.Linear(self.num_features, num_classes) if num_classes > 0 else nn.Identity()
        self.head_dist = None
        if distilled:
            self.head_dist = nn.Linear(self.embed_dim, self.num_classes) if num_classes > 0 else nn.Identity()

        nn.init.trunc_normal_(self.pos_embed, std=0.02)
        if self.dist_token is not None:
            nn.init.trunc_normal_(self.dist_token, std=0.02)

        nn.init.trunc_normal_(self.cls_token, std=0.02)
        self.apply(_init_vit_weights)

    def forward_features(self, x):

        x = self.patch_embed(x)
        # x.shape[16, 196, 768]
        # cls_token [16, 1, 768]
        cls_token = self.cls_token.expand(x.shape[0], -1, -1)
        if self.dist_token is None:
            x = torch.cat((cls_token, x), dim=1)
        else:
            x = torch.cat((cls_token, self.dist_token.expand(x.shape[0], -1, -1), x), dim=1)
        # x.shape[16, 197, 768]
        x = self.pos_drop(x + self.pos_embed)
        x = self.blocks(x)
        x = self.norm(x)
        if self.dist_token is None:
            return self.pre_logits(x[:, 0])
        else:
            return x[:, 0], x[:, 1]

    def forward(self, x):
        x = self.forward_features(x)
        if self.head_dist is not None:
            x, x_dist = self.head(x[0]), self.head_dist(x[1])
            if self.training and not torch.jit.is_scripting():

                return x, x_dist
            else:
                return (x + x_dist) / 2
        else:
            x = self.head(x)
        return x


def _init_vit_weights(m):
    """
    ViT weight initialization
    :param m: module
    """
    if isinstance(m, nn.Linear):
        nn.init.trunc_normal_(m.weight, std=.01)
        if m.bias is not None:
            nn.init.zeros_(m.bias)
    elif isinstance(m, nn.Conv2d):
        nn.init.kaiming_normal_(m.weight, mode="fan_out")
        if m.bias is not None:
            nn.init.zeros_(m.bias)
    elif isinstance(m, nn.LayerNorm):
        nn.init.zeros_(m.bias)
        nn.init.ones_(m.weight)


def vit_base_patch16_224_in21k(num_classes: int = 21843, has_logits: bool = True):
    """
    ViT-Base model (ViT-B/16) from original paper (https://arxiv.org/abs/2010.11929).
    ImageNet-21k weights @ 224x224, source https://github.com/google-research/vision_transformer.
    weights ported from official Google JAX impl:
    https://github.com/rwightman/pytorch-image-models/releases/download/v0.1-vitjx/jx_vit_base_patch16_224_in21k-e5005f0a.pth
    """
    model = VisionTransformer(img_size=224,
                              patch_size=16,
                              embed_dim=768,
                              depth=12,
                              num_heads=12,
                              representation_size=768 if has_logits else None,
                              num_classes=num_classes)
    return model


def vit_base_patch32_224_in21k(num_classes: int = 21843, has_logits: bool = True):
    """
    ViT-Base model (ViT-B/32) from original paper (https://arxiv.org/abs/2010.11929).
    ImageNet-21k weights @ 224x224, source https://github.com/google-research/vision_transformer.
    weights ported from official Google JAX impl:
    https://github.com/rwightman/pytorch-image-models/releases/download/v0.1-vitjx/jx_vit_base_patch32_224_in21k-8db57226.pth
    """
    model = VisionTransformer(img_size=224,
                              patch_size=32,
                              embed_dim=768,
                              depth=12,
                              num_heads=12,
                              representation_size=768 if has_logits else None,
                              num_classes=num_classes)
    return model


def vit_large_patch16_224_in21k(num_classes: int = 21843, has_logits: bool = True):
    """
    ViT-Large model (ViT-L/16) from original paper (https://arxiv.org/abs/2010.11929).
    ImageNet-21k weights @ 224x224, source https://github.com/google-research/vision_transformer.
    weights ported from official Google JAX impl:
    https://github.com/rwightman/pytorch-image-models/releases/download/v0.1-vitjx/jx_vit_large_patch16_224_in21k-606da67d.pth
    """
    model = VisionTransformer(img_size=224,
                              patch_size=16,
                              embed_dim=1024,
                              depth=24,
                              num_heads=16,
                              representation_size=1024 if has_logits else None,
                              num_classes=num_classes)
    return model


def vit_large_patch32_224_in21k(num_classes: int = 21843, has_logits: bool = True):
    """
    ViT-Large model (ViT-L/32) from original paper (https://arxiv.org/abs/2010.11929).
    ImageNet-21k weights @ 224x224, source https://github.com/google-research/vision_transformer.
    weights ported from official Google JAX impl:
    https://github.com/rwightman/pytorch-image-models/releases/download/v0.1-vitjx/jx_vit_large_patch32_224_in21k-9046d2e7.pth
    """
    model = VisionTransformer(img_size=224,
                              patch_size=32,
                              embed_dim=1024,
                              depth=24,
                              num_heads=16,
                              representation_size=1024 if has_logits else None,
                              num_classes=num_classes)
    return model


def vit_huge_patch14_224_in21k(num_classes: int = 21843, has_logits: bool = True):
    """
    ViT-Huge model (ViT-H/14) from original paper (https://arxiv.org/abs/2010.11929).
    ImageNet-21k weights @ 224x224, source https://github.com/google-research/vision_transformer.
    NOTE: converted weights not currently available, too large for github release hosting.
    """
    model = VisionTransformer(img_size=224,
                              patch_size=14,
                              embed_dim=1280,
                              depth=32,
                              num_heads=16,
                              representation_size=1280 if has_logits else None,
                              num_classes=num_classes)
    return model
