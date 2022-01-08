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
    init.xavier_uniform_(module.weight, gain)
    if module.bias is not None:
        module.bias.data.zero_()

    return spectral_norm(module)


def leaky_relu(input):
    return F.leaky_relu(input, negative_slope=0.2)


class SelfAttention(nn.Module):
    def __init__(self, in_channel, gain=2 ** 0.5):
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
        downsample=False,
    ):
        super().__init__()

        gain = 2 ** 0.5

        self.conv1 = spectral_init(
            nn.Conv2d(in_channel, out_channel, kernel_size, stride, padding, bias=False if bn else True), gain=gain
        )
        self.conv2 = spectral_init(
            nn.Conv2d(out_channel, out_channel, kernel_size, stride, padding, bias=False if bn else True), gain=gain
        )

        self.skip_proj = False
        if in_channel != out_channel or upsample or downsample:
            self.conv_skip = spectral_init(nn.Conv2d(in_channel, out_channel, 1, 1, 0))
            self.skip_proj = True

        self.upsample = upsample
        self.downsample = downsample
        self.activation = activation
        self.bn = bn
        if bn:
            self.norm1 = ConditionalNorm(in_channel, n_class)
            self.norm2 = ConditionalNorm(out_channel, n_class)

    def forward(self, input, class_id=None):
        out = input

        if self.bn:
            out = self.norm1(out, class_id)
        out = self.activation(out)
        if self.upsample:
            out = F.upsample(out, scale_factor=2)
        out = self.conv1(out)
        if self.bn:
            out = self.norm2(out, class_id)
        out = self.activation(out)
        out = self.conv2(out)

        if self.downsample:
            out = F.avg_pool2d(out, 2)

        if self.skip_proj:
            skip = input
            if self.upsample:
                skip = F.upsample(skip, scale_factor=2)
            skip = self.conv_skip(skip)
            if self.downsample:
                skip = F.avg_pool2d(skip, 2)

        else:
            skip = input

        return out + skip


class Generator(nn.Module):
    def __init__(self, code_dim=100, n_class=10):
        super().__init__()

        self.lin_code = spectral_init(nn.Linear(code_dim, 4 * 4 * 512))
        self.conv = nn.ModuleList(
            [
                ConvBlock(512, 512, n_class=n_class),
                ConvBlock(512, 512, n_class=n_class),
                ConvBlock(512, 256, n_class=n_class),
                SelfAttention(256),
                ConvBlock(256, 128, n_class=n_class),
                ConvBlock(128, 64, n_class=n_class),
            ]
        )

        self.bn = nn.BatchNorm2d(64)
        self.colorize = spectral_init(nn.Conv2d(64, 3, [3, 3], padding=1))

    def forward(self, input, class_id):
        out = self.lin_code(input)
        out = out.view(-1, 512, 4, 4)

        for conv in self.conv:
            if isinstance(conv, ConvBlock):
                out = conv(out, class_id)

            else:
                out = conv(out)

        out = self.bn(out)
        out = F.relu(out)
        out = self.colorize(out)

        return F.tanh(out)


class Discriminator(nn.Module):
    def __init__(self, n_class=10):
        super().__init__()

        def conv(in_channel, out_channel, downsample=True):
            return ConvBlock(in_channel, out_channel, bn=False, upsample=False, downsample=downsample)

        gain = 2 ** 0.5

        self.pre_conv = nn.Sequential(
            spectral_init(nn.Conv2d(3, 64, 3, padding=1), gain=gain),
            nn.ReLU(),
            spectral_init(nn.Conv2d(64, 64, 3, padding=1), gain=gain),
            nn.AvgPool2d(2),
        )
        self.pre_skip = spectral_init(nn.Conv2d(3, 64, 1))

        self.conv = nn.Sequential(
            conv(64, 128),
            conv(128, 256, downsample=False),
            SelfAttention(256),
            conv(256, 512),
            conv(512, 512),
            conv(512, 512),
        )

        self.linear = spectral_init(nn.Linear(512, 1))

        self.embed = nn.Embedding(n_class, 512)
        self.embed.weight.data.uniform_(-0.1, 0.1)
        self.embed = spectral_norm(self.embed)

    def forward(self, input, class_id):
        out = self.pre_conv(input)
        out = out + self.pre_skip(F.avg_pool2d(input, 2))

        out = self.conv(out)
        out = F.relu(out)
        out = out.view(out.size(0), out.size(1), -1)
        out = out.sum(2)
        out_linear = self.linear(out).squeeze(1)
        embed = self.embed(class_id)
        prod = (out * embed).sum(1)

        return out_linear + prod
