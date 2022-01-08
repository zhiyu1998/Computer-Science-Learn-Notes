from typing import List, Callable

import torch
import torch.nn as nn
from torch import Tensor
import torchvision.models.shufflenetv2


def channel_shuffle(x: Tensor, groups: int) -> Tensor:
    batchsize, num_channels, height, width = x.size()
    channels_per_group = num_channels // groups

    # reshape
    # [batch, channel, height, width] => [batch, groups, channel_per_group, height, width]
    x = x.view(batchsize, groups, channels_per_group, height, width)

    # transpose: Returns a tensor that is a transposed version of input. The given dimensions dim0 and dim1 are swapped.
    # contiguous(断开这两个变量之间的依赖): Returns a contiguous in memory tensor containing the same data as self tensor.
    # -- If self tensor is already in the specified memory format, this function returns the self tensor.
    x = torch.transpose(x, 1, 2).contiguous()

    # flatten
    x = x.view(batchsize, -1, height, width)

    return x


class InvertedResidual(nn.Module):
    def __init__(self, in_channel: int, out_channel: int, stride: int):
        super(InvertedResidual, self).__init__()

        # 这个网络的步距只能是1或者2
        if stride not in [1, 2]:
            raise ValueError('illegal stride value.')
        self.stride = stride

        # 分支的左右要是相等的才能concat
        assert out_channel % 2 == 0
        # 左右分支的特征都是一样的所以输出通道//2也就是分支的特征数
        branch_features = out_channel // 2

        # 以下这些情况对应图stride=1.png （实现不用满足）
        # stride 为 1时， in_channel 应该是 branch_features的 2倍
        # python 中 '<<' 可以理解为计算x2的快速方法
        assert (self.stride != 1) or (in_channel == branch_features << 1)

        if self.stride == 2:
            self.branch1 = nn.Sequential(
                # DW卷积输入channel就是输出channel
                self.depthwise_conv(in_channel, in_channel, kernel_s=3, stride=self.stride, padding=1),
                nn.BatchNorm2d(in_channel),
                # 要使用BN层 => bias = False (https://blog.csdn.net/u010698086/article/details/78046671)
                nn.Conv2d(in_channel, branch_features, kernel_size=1, stride=1, padding=0, bias=False),
                nn.BatchNorm2d(branch_features),
                nn.ReLU(inplace=True),
            )
        else:  # stride == 1的情况，左分支没有
            self.branch1 = nn.Sequential()

        self.branch2 = nn.Sequential(
            # 这里再对输入channel进行判断，stride==1 => branch_features ; stride==2 => inchannel
            # 不论是stride == 1 or == 2 ，最后输出都是branch_features
            nn.Conv2d(in_channel if self.stride > 1 else branch_features, branch_features,
                      kernel_size=1, stride=1, padding=0, bias=False),
            nn.BatchNorm2d(branch_features),
            nn.ReLU(inplace=True),
            self.depthwise_conv(branch_features, branch_features, kernel_s=3, stride=self.stride, padding=1),
            nn.BatchNorm2d(branch_features),
            nn.Conv2d(branch_features, branch_features, kernel_size=1, stride=1, padding=0, bias=False),
            nn.BatchNorm2d(branch_features),
            nn.ReLU(inplace=True),
        )

    @staticmethod
    def depthwise_conv(in_channel: int,
                       out_channel: int,
                       kernel_s: int,
                       stride: int = 1,
                       padding: int = 0,
                       bias: bool = False) -> nn.Conv2d:
        # groups理解：简而言之 划分通道 输入通道为32， groups = 2   ===>  就划分为2个16的通道 （降低参数，提高feature_map）
        # 从而推出DW卷积：一个卷积核对应一个channel => 进而理解 groups == in_channel 用意
        return nn.Conv2d(in_channels=in_channel, out_channels=out_channel, kernel_size=kernel_s,
                         stride=stride, padding=padding, bias=bias, groups=in_channel)

    def forward(self, x: Tensor) -> Tensor:
        if self.stride == 1:
            # chunk 均分
            # x1 不做处理
            x1, x2 = x.chunk(2, dim=1)
            out = torch.cat((x1, self.branch2(x2)), dim=1)
        else:  # stride == 2
            out = torch.cat((self.branch1(x), self.branch2(x)), dim=1)

        out = channel_shuffle(out, 2)

        return out


class ShuffleNetV2(nn.Module):
    def __init__(self, stages_repeats: List[int],
                 stages_out_channel: List[int],
                 num_classes: int = 1000,
                 inverted_residual: Callable[..., nn.Module] = InvertedResidual):
        super(ShuffleNetV2, self).__init__()

        # [stage2 stage3 stage4]
        if len(stages_repeats) != 3:
            raise ValueError('expected stages_repeats as list of 3 positive ints')
        # [Conv1MaxPool stage2 stage3 stage4 Conv5]
        if len(stages_out_channel) != 5:
            raise ValueError('expected stages_out_channels as list of 5 positive ints')
        self._stage_out_channel = stages_out_channel

        in_channel = 3
        out_channel = self._stage_out_channel[0]

        self.conv1 = nn.Sequential(
            nn.Conv2d(in_channel, out_channel, kernel_size=3, stride=2, padding=1, bias=False),
            nn.BatchNorm2d(out_channel),
            nn.ReLU(inplace=True)
        )
        in_channel = out_channel

        self.maxpool = nn.MaxPool2d(kernel_size=3, stride=2, padding=1)

        self.stage2 = nn.Sequential
        self.stage3 = nn.Sequential
        self.stage4 = nn.Sequential

        # zip() 函数用于将可迭代的对象作为参数，将对象中对应的元素打包成一个个元组，然后返回由这些元组组成的对象
        stage_names = ['stage{}'.format(i) for i in [2, 3, 4]]
        for name, repeats, out_channel in zip(stage_names, stages_repeats,
                                              self._stage_out_channel[1:]):
            # 这里进行分支，对于步距为2的 比如1x stage3 将进行一次in:116 out:232，步距为1则进行7次 in:232 out:232
            # inverted_residual (self, in_channel:int, out_channel: int, stride: int)
            seq = [inverted_residual(in_channel, out_channel, 2)]

            # stage
            for i in range(repeats - 1):
                seq.append(inverted_residual(out_channel, out_channel, 1))
            # setattr() 给类设置属性，如果不存在这个属性会创建
            setattr(self, name, nn.Sequential(*seq))
            in_channel = out_channel

            # 将conv5的最后一个元素赋值进去，例如 1x 就是1024
            out_channel = self._stage_out_channel[-1]
            self.conv5 = nn.Sequential(
                nn.Conv2d(in_channel, out_channel, kernel_size=1, stride=1, padding=1, bias=False),
                nn.BatchNorm2d(out_channel),
                nn.ReLU(inplace=True)
            )

            self.fc = nn.Linear(out_channel, num_classes)

    def forward(self, x: Tensor) -> Tensor:
        x = self.conv1(x)
        x = self.maxpool(x)
        x = self.stage2(x)
        x = self.stage3(x)
        x = self.stage4(x)
        x = self.conv5(x)
        x = x.mean([2, 3])  # 全局池化
        x = self.fc(x)
        return x


def shufflenet_v2_x0_5(num_classes: int = 1000) -> ShuffleNetV2:
    """
    Constructs a ShuffleNetV2 with 0.5x output channels, as described in
    `"ShuffleNet V2: Practical Guidelines for Efficient CNN Architecture Design"
    <https://arxiv.org/abs/1807.11164>`_.
    weights: https://download.pytorch.org/models/shufflenetv2_x0.5-f707e7126e.pth
    Args:
        num_classes
    """
    # repeat[1+3, 1+7, 1+3] -> [4, 8, 4]
    return ShuffleNetV2(stages_repeats=[4, 8, 4],
                        stages_out_channel=[24, 48, 95, 192, 1024],
                        num_classes=num_classes)


def shufflenet_v2_x1_0(num_classes: int = 1000) -> ShuffleNetV2:
    """
    Constructs a ShuffleNetV2 with 1.0x output channels, as described in
    `"ShuffleNet V2: Practical Guidelines for Efficient CNN Architecture Design"
    <https://arxiv.org/abs/1807.11164>`_.
    weights: https://download.pytorch.org/models/shufflenetv2_x1-5666bf0f80.pth

    Args:
        num_classes
    """
    return ShuffleNetV2(stages_repeats=[4, 8, 4],
                        stages_out_channel=[24, 116, 232, 464, 1024],
                        num_classes=num_classes)


def shufflenet_v2_x1_5(num_classes: int = 1000) -> ShuffleNetV2:
    """
    Constructs a ShuffleNetV2 with 1.5x output channels, as described in
    `"ShuffleNet V2: Practical Guidelines for Efficient CNN Architecture Design"
    <https://arxiv.org/abs/1807.11164>`_.

    Args:
        num_classes
    """
    return ShuffleNetV2(stages_repeats=[4, 8, 4],
                        stages_out_channel=[24, 176, 352, 704, 1024],
                        num_classes=num_classes)


def shufflenet_v2_x2_0(num_classes: int = 1000) -> ShuffleNetV2:
    """
    Constructs a ShuffleNetV2 with 2.0x output channels, as described in
    `"ShuffleNet V2: Practical Guidelines for Efficient CNN Architecture Design"
    <https://arxiv.org/abs/1807.11164>`_.

    Args:
        num_classes
    """
    return ShuffleNetV2(stages_repeats=[4, 8, 4],
                        stages_out_channel=[24, 244, 488, 976, 2048],
                        num_classes=num_classes)
