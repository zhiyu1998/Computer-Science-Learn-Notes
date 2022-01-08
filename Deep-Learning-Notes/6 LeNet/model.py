import torch.nn as nn
import torch.nn.functional as F

class LeNet(nn.Module):
    def __init__(self):
        super(LeNet, self).__init__() # super解决：多继承调用父类方法中可能会出现的问题
        # 需要实现的网络层结构
        self.conv1 = nn.Conv2d(3, 16, 5) # 卷积层(卷积核5x5)
        self.pool1 = nn.MaxPool2d(2, 2) # 池化层(2x2) 步幅-2
        self.conv2 = nn.Conv2d(16, 32, 5)
        self.pool2 = nn.MaxPool2d(2, 2)
        self.fc1 = nn.Linear(32 * 5 * 5, 120)
        self.fc2 = nn.Linear(120, 84)
        self.fc3 = nn.Linear(84, 10)

    # 正向传播
    def forward(self, x):
        # 按照这个顺序进行运行
        x = F.relu(self.conv1(x))    # input(3, 32, 32) output(16, 28, 28)        卷积后矩阵大小 = (W - K + 2P) / S + 1
        x = self.pool1(x)            # output(16, 14, 14)
        x = F.relu(self.conv2(x))    # output(32, 10, 10)
        x = self.pool2(x)            # output(32, 5, 5)
        x = x.view(-1, 32*5*5)       # output(32*5*5)
        x = F.relu(self.fc1(x))      # output(120)
        x = F.relu(self.fc2(x))      # output(84)
        x = self.fc3(x)              # output(10)
        return x

# 测试
import torch
input1 = torch.rand([32, 3, 32, 32]) # [batch, channel -> deep, height, width]
model = LeNet()
print(model)
output = model(input1)