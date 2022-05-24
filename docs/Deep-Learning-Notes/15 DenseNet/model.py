import math
import torch
import torch.nn as nn
import torch.nn.functional as F
import torch.utils.checkpoint as cp
from collections import OrderedDict
from torch import Tensor


# bottleneck 工厂函数
# *  bottleneck layer: 每个dense block的3*3卷积前面都包含了一个1*1的卷积操作
# *  1x1 Conv 得到4k特征图的作用是降低特征数量，提高计算效率
# *  原先结构： BN + ReLu + 3x3 Conv    ;; 为了提升效率才加上 bottleneck:  BN + ReLu + 1x1 Conv
def _bn_function_factory(norm, relu, conv):
    def bn_function(*inputs):
        # torch.cat(..., dim=0) -> numpy.vstack(...) ;;  同理dim=1 => numpy.hstack() 水平方向连接两个矩阵
        concated_features = torch.cat(inputs, 1)
        bottleneck_output = conv(relu(norm(concated_features)))
        return bottleneck_output

    return bn_function


# DenseNet - B 函数
# *  包含bottleneck layer的叫DenseNet-B，包含压缩层的叫DenseNet-C，两者都包含的叫DenseNet-BC
# *  denselayer示意图见（densenet-b.png）
# *  growth_rate 增长率，实际含义为这层可以提取出的特征
# *  当前结构： BN + ReLu + 1x1 Conv + BN + ReLu + 3x3 Conv
class _DenseLayer(nn.Module):
    def __init__(self,
                 in_channels,
                 batch_size,
                 growth_rate,
                 drop_rate,
                 memory_efficient):
        super(_DenseLayer, self).__init__()
        self.add_module('bn1', nn.BatchNorm2d(in_channels))
        self.add_module('relu1', nn.ReLU(inplace=True))
        self.add_module(
            'conv1', nn.Conv2d(in_channels, batch_size * growth_rate, kernel_size=1, stride=1, bias=False))

        self.add_module('bn2', nn.BatchNorm2d(batch_size * growth_rate))
        self.add_module('relu2', nn.ReLU(inplace=True))
        self.add_module(
            'conv2', nn.Conv2d(batch_size * growth_rate, growth_rate, kernel_size=3, stride=1, padding=1, bias=False))

        self.drop_rate = drop_rate
        self.efficient = memory_efficient

    def forward(self, *prev_features):
        # 定义一个bottleneck
        bn_function = _bn_function_factory(self.bn1, self.relu1, self.conv1)
        if self.efficient and any(prev_feature.requires_grad for prev_feature in prev_features):
            # checkpoint: 不计算模型中的部分梯度： 不去计算先前得出特征值的feature_map, 这样提高了计算效率
            # *  return : 相当于 bn_function(*prev_features)
            bottleneck_output = cp.checkpoint(bn_function, *prev_features)
        else:
            # 把之前的特征做bottleneck
            bottleneck_output = bn_function(*prev_features)
        new_features = self.conv2(self.relu2(self.bn2(bottleneck_output)))
        if self.drop_rate > 0:
            new_features = F.dropout(new_features, p=self.drop_rate, training=self.training)
        return new_features


# 过渡层: 实现在不同denseblock之间进行下采样操作
# 压缩一般在transition产生，压缩系数θ在[0, 1], 当Θ=1，transition无变化，当Θ < 1这种结构就被称为densenet-C, Θ一般取0.5
# transition layer为相邻2个Dense Block中的那部分 （详细看dense-base.png）
class _Transition(nn.Sequential):
    def __init__(self, in_channels, out_channels):
        super(_Transition, self).__init__()
        self.add_module('bn', nn.BatchNorm2d(in_channels))
        self.add_module('relu', nn.ReLU(inplace=True))
        self.add_module('conv', nn.Conv2d(in_channels, out_channels, kernel_size=1, stride=1, bias=False))
        self.add_module('pool', nn.AvgPool2d(kernel_size=2, stride=2))


class _DenseBlock(nn.Module):
    def __init__(self,
                 num_layers,
                 in_channels,
                 batch_size,
                 growth_rate,
                 drop_rate,
                 memory_efficient
                 ):
        super(_DenseBlock, self).__init__()
        for i in range(num_layers):
            layer = _DenseLayer(
                in_channels + i * growth_rate,
                growth_rate=growth_rate,
                batch_size=batch_size,
                drop_rate=drop_rate,
                memory_efficient=memory_efficient
            )
            self.add_module('denselayer%d' % (i + 1), layer)

    def forward(self, x):
        features = [x]
        for name, layer in self.named_children():
            new_features = layer(*features)
            features.append(new_features)
        return torch.cat(features, 1)


class DenseNet(nn.Module):
    r"""DenseNet-BC model class, based on
    `"Densely Connected Convolutional Networks" <https://arxiv.org/pdf/1608.06993.pdf>`
    Args:
        growth_rate (int) - how many filters to add each layer (`k` in paper)
        block_config (list of 3 or 4 ints) - how many layers in each pooling block
        num_init_features (int) - the number of filters to learn in the first convolution layer
        batch_size (int) - multiplicative factor for number of bottle neck layers
            (i.e. bn_size * k features in the bottleneck layer)
        drop_rate (float) - dropout rate after each dense layer
        num_classes (int) - number of classification classes
        small_inputs (bool) - set to True if images are 32x32. Otherwise assumes images are larger.
        efficient (bool) - set to True to use checkpointing. Much more memory efficient, but slower.
    """

    def __init__(self, growth_rate=12, block_config=(6, 12, 24, 16), compression=0.5,
                 num_init_features=24, batch_size=4, drop_rate=0,
                 num_classes=10, small_inputs=True, efficient=False):
        super(DenseNet, self).__init__()
        assert 0 < compression <= 1, 'compression of densenet should be between 0 and 1'

        # First Convolution
        if small_inputs:
            self.features = nn.Sequential(OrderedDict([
                ('conv0', nn.Conv2d(3, num_init_features, kernel_size=3, stride=1, padding=1, bias=False))
            ]))
        else:
            self.features = nn.Sequential(OrderedDict([
                ('conv0', nn.Conv2d(3, num_init_features, kernel_size=7, stride=2, padding=3, bias=False))
            ]))
            self.features.add_module('bn0', nn.BatchNorm2d(num_init_features))
            self.features.add_module('relu0', nn.ReLU(inplace=True))
            self.features.add_module('pool0', nn.MaxPool2d(kernel_size=3, stride=2, padding=1, ceil_mode=False))

        # Dense Block
        in_channels = num_init_features
        for i, num_layers in enumerate(block_config):
            block = _DenseBlock(
                num_layers=num_layers,
                in_channels=in_channels,
                batch_size=batch_size,
                growth_rate=growth_rate,
                drop_rate=drop_rate,
                memory_efficient=efficient
            )
            self.features.add_module('denseblock%d' % (i + 1), block)
            in_channels = in_channels + num_layers * growth_rate
            if i != len(block_config) - 1:
                trans = _Transition(in_channels=in_channels,
                                    out_channels=int(in_channels * compression))
                self.features.add_module('transitions%d' % (i + 1), trans)
                in_channels = int(in_channels * compression)

        # final bn
        self.features.add_module('bn_final', nn.BatchNorm2d(in_channels))

        # global average pool

        # fc layer
        self.classifier = nn.Linear(in_channels, num_classes)

        self._weights_init()

    def _weights_init(self):
        for name, param in self.named_parameters():
            if 'conv' in name and 'weight' in name:
                n = param.size(0) * param.size(2) * param.size(3)
                param.data.normal_().mul_(math.sqrt(2. / n))
            elif 'norm' in name and 'weight' in name:
                param.data.fill_(1)
            elif 'norm' in name and 'bias' in name:
                param.data.fill_(0)
            elif 'classifier' in name and 'bias' in name:
                param.data.fill_(0)

    def forward(self, x):
        features = self.features(x)
        out = F.relu(features, inplace=True)
        out = F.adaptive_avg_pool2d(out, (1, 1))
        out = torch.flatten(out, 1)
        out = self.classifier(out)
        return out

# test
# net = DenseNet()
# x = torch.randn(2, 3, 224, 224)
# y = net(x)
# print(y.size())
def DenseNet_121(num_classes = 1000):
    '''pre-model: https://download.pytorch.org/models/densenet121-a639ec97.pth'''
    return DenseNet(num_classes = num_classes, block_config=(6, 12, 24, 16))

def DenseNet_169(num_classes = 1000):
    '''pre-model: https://download.pytorch.org/models/densenet169-b2777c0a.pth'''
    return DenseNet(num_classes = num_classes, block_config=(6, 12, 32, 32))

def DenseNet_201(num_classes = 1000):
    '''pre-model: https://download.pytorch.org/models/densenet201-c1103571.pth'''
    return DenseNet(num_classes = num_classes, block_config=(6, 12, 48, 32))

def DenseNet_264(num_classes = 1000):
    '''pre-model: https://download.pytorch.org/models/densenet161-8d451a50.pth'''
    return DenseNet(num_classes = num_classes, block_config=(6, 12, 64, 48))
