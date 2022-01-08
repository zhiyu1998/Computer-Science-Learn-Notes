import torch

from torch import nn
from torch.nn import init
from torch.nn import functional as F

import functools
from torch.autograd import Variable


def init_linear(linear):
    init.xavier_uniform_(linear.weight)
    linear.bias.data.zero_()


def init_conv(conv, glu=True):
    init.xavier_uniform_(conv.weight)
    if conv.bias is not None:
        conv.bias.data.zero_()

    """[谱归一化（Spectral Normalization）]
    https://arxiv.org/abs/1802.05957v1
    Returns:
        [type]: [description]
    """


class SpectralNorm:
    def __init__(self, name):
        self.name = name

    def compute_weight(self, module):
        weight = getattr(module, self.name + "_orig")
        u = getattr(module, self.name + "_u")
        size = weight.size()
        weight_mat = weight.contiguous().view(size[0], -1)
        with torch.no_grad():
            v = weight_mat.t() @ u
            v = v / v.norm()
            u = weight_mat @ v
            u = u / u.norm()
        sigma = u @ weight_mat @ v
        weight_sn = weight / sigma
        # weight_sn = weight_sn.view(*size)

        return weight_sn, u

    @staticmethod
    def apply(module, name):
        fn = SpectralNorm(name)

        weight = getattr(module, name)
        del module._parameters[name]
        module.register_parameter(name + "_orig", weight)
        input_size = weight.size(0)
        u = weight.new_empty(input_size).normal_()
        module.register_buffer(name, weight)
        module.register_buffer(name + "_u", u)

        module.register_forward_pre_hook(fn)

        return fn

    def __call__(self, module, input):
        weight_sn, u = self.compute_weight(module)
        setattr(module, self.name, weight_sn)
        setattr(module, self.name + "_u", u)


def spectral_norm(module, name="weight"):
    SpectralNorm.apply(module, name)

    return module


def spectral_init(module, gain=1):
    init.kaiming_uniform_(module.weight, gain)
    if module.bias is not None:
        module.bias.data.zero_()

    return spectral_norm(module)


def leaky_relu(input):
    return F.leaky_relu(input, negative_slope=0.2)


class SelfAttention(nn.Module):
    def __init__(self, in_channel, gain=1):
        super().__init__()

        self.query = spectral_init(nn.Conv1d(in_channel, in_channel // 8, 1), gain=gain)
        self.key = spectral_init(nn.Conv1d(in_channel, in_channel // 8, 1), gain=gain)
        self.value = spectral_init(nn.Conv1d(in_channel, in_channel, 1), gain=gain)

        self.gamma = nn.Parameter(torch.tensor(0.0))

    def forward(self, input):
        shape = input.shape
        flatten = input.view(shape[0], shape[1], -1)
        query = self.query(flatten).permute(0, 2, 1)
        key = self.key(flatten)
        value = self.value(flatten)
        query_key = torch.bmm(query, key)
        attn = F.softmax(query_key, 1)
        attn = torch.bmm(value, attn)
        attn = attn.view(*shape)
        out = self.gamma * attn + input

        return out


class ConditionalNorm(nn.Module):
    def __init__(self, in_channel, n_class):
        super().__init__()

        self.bn = nn.BatchNorm2d(in_channel, affine=False)
        self.embed = nn.Embedding(n_class, in_channel * 2)
        self.embed.weight.data[:, :in_channel] = 1
        self.embed.weight.data[:, in_channel:] = 0

    def forward(self, input, class_id):
        out = self.bn(input)
        embed = self.embed(class_id)
        gamma, beta = embed.chunk(2, 1)
        gamma = gamma.unsqueeze(2).unsqueeze(3)
        beta = beta.unsqueeze(2).unsqueeze(3)
        out = gamma * out + beta

        return out


class ConvBlock(nn.Module):
    def __init__(
        self,
        in_channel,
        out_channel,
        kernel_size=[3, 3],
        padding=1,
        stride=1,
        n_class=None,
        bn=True,
        activation=F.relu,
        upsample=True,
        self_attention=False,
    ):
        super().__init__()

        self.conv = spectral_init(
            nn.Conv2d(in_channel, out_channel, kernel_size, stride, padding, bias=False if bn else True)
        )

        self.upsample = upsample
        self.activation = activation
        self.bn = bn
        if bn:
            self.norm = ConditionalNorm(out_channel, n_class)

        self.self_attention = self_attention
        if self_attention:
            self.attention = SelfAttention(out_channel, 1)

    def forward(self, input, class_id=None):
        out = input
        if self.upsample:
            out = F.upsample(out, scale_factor=2)

        out = self.conv(out)

        if self.bn:
            out = self.norm(out, class_id)

        if self.activation is not None:
            out = self.activation(out)

        if self.self_attention:
            out = self.attention(out)

        return out


class Generator(nn.Module):
    def __init__(self, code_dim=100, n_class=10):
        super().__init__()

        self.lin_code = spectral_init(nn.Linear(code_dim, 4 * 4 * 512))
        self.conv = nn.ModuleList(
            [
                ConvBlock(512, 512, n_class=n_class),
                ConvBlock(512, 512, n_class=n_class),
                ConvBlock(512, 512, n_class=n_class, self_attention=True),
                ConvBlock(512, 256, n_class=n_class),
                ConvBlock(256, 128, n_class=n_class),
            ]
        )

        self.colorize = spectral_init(nn.Conv2d(128, 3, [3, 3], padding=1))

    def forward(self, input, class_id):
        out = self.lin_code(input)
        out = F.relu(out)
        out = out.view(-1, 512, 4, 4)

        for conv in self.conv:
            out = conv(out, class_id)

        out = self.colorize(out)

        return F.tanh(out)


class Discriminator(nn.Module):
    def __init__(self, n_class=10):
        super().__init__()

        def conv(in_channel, out_channel, stride=2, self_attention=False):
            return ConvBlock(
                in_channel,
                out_channel,
                stride=stride,
                bn=False,
                activation=leaky_relu,
                upsample=False,
                self_attention=self_attention,
            )

        self.conv = nn.Sequential(
            conv(3, 128),
            conv(128, 256),
            conv(256, 512, stride=1, self_attention=True),
            conv(512, 512),
            conv(512, 512),
            conv(512, 512),
        )

        self.linear = spectral_init(nn.Linear(512, 1))

        self.embed = nn.Embedding(n_class, 512)
        self.embed.weight.data.uniform_(-0.1, 0.1)
        self.embed = spectral_norm(self.embed)

    def forward(self, input, class_id):
        out = self.conv(input)
        out = out.view(out.size(0), out.size(1), -1)
        out = out.sum(2)
        out_linear = self.linear(out).squeeze(1)
        embed = self.embed(class_id)
        prod = (out * embed).sum(1)

        return out_linear + prod
