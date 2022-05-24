import torch
import torch.nn as nn
from torchvision import transforms, datasets, utils
import matplotlib.pyplot as plt
import numpy as np
import torch.optim as optim
from model import AlexNet
import os
import json
import time

os.environ['KMP_DUPLICATE_LIB_OK'] = 'TRUE'

device = torch.device('cuda:0' if torch.cuda.is_available() else 'cpu') # 查看当前设备是否有GPU 没有则使用CPU
print(device)

data_transform = {
    'train': transforms.Compose([
        transforms.RandomResizedCrop(224), # 随机裁剪，再缩放成 224×224
        transforms.RandomHorizontalFlip(), # 水平方向随机翻转，概率为 0.5, 即一半的概率翻转, 一半的概率不翻转
        transforms.ToTensor(),
        transforms.Normalize((0.5,0.5,0.5), (0.5,0.5,0.5))
    ]),
    'val': transforms.Compose([
        transforms.Resize((224, 224)), # cannot 224, must (224, 224)
        transforms.ToTensor(),
        transforms.Normalize((0.5,0.5,0.5), (0.5,0.5,0.5))
    ])
}

data_root = os.path.abspath(os.getcwd())
image_path = data_root + '\\flower_data'
train_dataset = datasets.ImageFolder(root=image_path + '\\train',
                                     transform=data_transform['train'])

train_num = len(train_dataset) # 训练集有多少张图片

# {'daisy':0, 'dandelion':1, 'roses':2, 'sunflower':3, 'tulips':4}
flower_list = train_dataset.class_to_idx # 里面包含类别的索引值
cla_dict = dict((val, key) for key, val in flower_list.items()) # 这样最后就可以通过索引得到类别
json_str = json.dumps(cla_dict, indent=4) # encode to json
with open('class_indices.json', 'w') as json_file: # save
    json_file.write(json_str)

batch_size = 32
train_loader = torch.utils.data.DataLoader(train_dataset,
                                           batch_size=batch_size,
                                           shuffle=True,
                                           num_workers=0)
validate_dataset = datasets.ImageFolder(root=image_path + '/val',
                                        transform=data_transform['val'])
val_num = len(validate_dataset)
validate_loader = torch.utils.data.DataLoader(validate_dataset,
                                              batch_size=4,
                                              shuffle=False,
                                              num_workers=0)

# test_data_iter = iter(validate_loader)
# test_image, test_label = test_data_iter.next()
#
# def imshow(img):
#     img = img / 2 + 0.5
#     npimg = img.numpy()
#     plt.imshow(np.transpose(npimg, (1, 2, 0)))
#     plt.show()
#
# print(' '.join('%5s' % cla_dict[test_label[j].item()] for j in range(4)))
# imshow(utils.make_grid(test_image))

net = AlexNet(num_classes=5, init_weights=True)

net.to(device)
loss_func = nn.CrossEntropyLoss()
# para = list(net.parameters())
optimizer = optim.Adam(net.parameters(), lr=0.0002)

save_path = './AlexNet.pth'
best_acc = 0.0
for epoch in range(10):
    ########################################## train ###############################################
    net.train() # 训练过程中开启 Dropout
    running_loss = 0.0
    t1 = time.perf_counter() # 统计训练所使用的时间
    for step, data in enumerate(train_loader, start=0): # 遍历训练集，step从0开始计算
        images, labels = data                           # 获取训练集的图像和标签
        optimizer.zero_grad()                           # 清除历史梯度

        outputs = net(images.to(device))                # 正向传播
        loss = loss_func(outputs, labels.to(device))    # 计算损失
        loss.backward()                                 # 反向传播
        optimizer.step()                                # 优化器更新参数

        running_loss += loss

        rate = (step + 1) / len(train_loader)           # 当前进度 = 当前step / 训练一轮epoch所需总step
        a = '*' * int(rate * 50)
        b = '.' * int((1-rate) * 50)
        print('\rtrain loss: {:^3.0f}%[{}->{}]{:.3f}'.format(int(rate*1000), a, b, loss), end='')
    print()
    print(time.perf_counter() - t1)

    ########################################### validate ###########################################
    net.eval() # 验证过程中关闭 Dropout
    acc = 0.0
    with torch.no_grad():
        for data_test in validate_loader:
            test_images, test_labels = data_test
            outputs = net(test_images.to(device))
            predict_y = torch.max(outputs, dim=1)[1] # 以output中值最大位置对应的索引（标签）作为预测输出
            acc += (predict_y == test_labels.to(device)).sum().item()
        accurate_test = acc / val_num
        if accurate_test > best_acc:
            best_acc = accurate_test
            torch.save(net.state_dict(), save_path)

        print('[epoch %d] train_loss: %.3f  test_accuracy: %.3f \n' %
              (epoch + 1, running_loss / step, acc / val_num))

print('Finished Training')