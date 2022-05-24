import torch
import torchvision
import torch.nn as nn
from model import LeNet
import torch.optim as optim
import torchvision.transforms as transforms
import matplotlib.pyplot as plt
import numpy as np

import os

os.environ['KMP_DUPLICATE_LIB_OK'] = 'TRUE'

transform = transforms.Compose(  # Compose: 将预处理的方法打包成一个整体
    [
        transforms.ToTensor(),
        transforms.Normalize((0.5, 0.5, 0.5), (0.5, 0.5, 0.5))
    ])

# 50000张训练图片
transet = torchvision.datasets.CIFAR10(root='./data',
                                       train=True,
                                       download=False,
                                       transform=transform)

trainloader = torch.utils.data.DataLoader(transet,
                                          batch_size=36,
                                          shuffle=False,
                                          num_workers=0)

# 10000张测试图片
testset = torchvision.datasets.CIFAR10(root='./data',
                                       train=False,
                                       download=False,
                                       transform=transform)
testloader = torch.utils.data.DataLoader(testset,
                                         batch_size=10000,
                                         shuffle=False,
                                         num_workers=0)
test_data_iter = iter(testloader)  # 转换迭代器
test_image, test_label = test_data_iter.next()

classes = ('plane', 'car', 'bird', 'cat', 'deer',
           'dog', 'frog', 'horse', 'ship', 'truck')

# def imshow(img):
#     img = img / 2 + 0.5  #unnormalize
#     npimg = img.numpy()
#     plt.imshow(np.transpose(npimg, (1, 2, 0)))
#     plt.show()
#
# print(''. join('%5s' % classes[test_label[j]] for j in range(4)))
# # show images
# imshow(torchvision.utils.make_grid(test_image))

net = LeNet()
loss_function = nn.CrossEntropyLoss()

optimizer = optim.Adam(net.parameters(), lr=0.001)  # net.parameters() 训练参数

for epoch in range(5):  # 训练集迭代5次

    running_loss = 0.0  # 累加训练中的损失
    for step, data in enumerate(trainloader, start=0):  # 遍历训练集样本，enumerate：不仅会返回data还会返回步数
        inputs, labels = data

        # 历史梯度清零
        optimizer.zero_grad()

        outputs = net(inputs)
        loss = loss_function(outputs, labels)  # (预测值，标签)
        loss.backward()  # 反向传播
        optimizer.step()  # 参数更新
        # print
        running_loss += loss.item()  # 累加
        if step % 500 == 499:  # 每次训练500步进行打印
            with torch.no_grad():  # with -- 上下文管理器 no_grad:接下来不会计算误差损失梯度
                # 【测试和预测过程中都要使用no_grad函数，以防内存不够】
                outputs = net(test_image)  # 正向传播，测试集传入网络（test_batch_size=10000），output维度为[10000,10]
                # max:返回两个值  0--最大值    |   1--最大值索引
                predict_y = torch.max(outputs, dim=1)[1]  # 以outputs中寻找最大位置对应的索引（标签）作为预测输出，【从输出的10个节点里面找一个最大值】
                accuracy = (predict_y == test_label).sum().item() / test_label.size(
                    0)  # 预测和真实的标签类别进行比较，相同的地方返回True，反之False; 通过sum()可以算出本次预测中成功预测的样本； 整个过程都是在Tensor中计算，所以通过item()拿到数值； test_label.size(0): 测试样本数量

                print('[%d, %5d] train_loss: %.3f    test_accuracy: %.3f' %
                      (epoch + 1, step + 1, running_loss / 500, accuracy))  # [第几轮迭代，多少步，误差，准确度]
                running_loss = 0.0  # 清理 进行下500次迭代

print('Finished Training')

save_path = './Lenet.pth'
torch.save(net.state_dict(), save_path)  # state_dict (dict) ：a dict containing parameters and persistent buffers.
