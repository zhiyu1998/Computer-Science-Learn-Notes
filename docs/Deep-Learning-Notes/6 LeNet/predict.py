import torch
import torchvision.transforms as transforms
from PIL import Image
from model import LeNet

transform = transforms.Compose(
    [
        transforms.Resize((32, 32)), # 缩放
        transforms.ToTensor(), # 转换为Tensor
        transforms.Normalize((0.5, 0.5, 0.5), (0.5, 0.5, 0.5)) # 实验中用了标准化
    ]
)

classes = ('plane', 'car', 'bird', 'cat', 'deer',
           'dog', 'frog', 'horse', 'ship', 'truck')

net = LeNet()
net.load_state_dict(torch.load('Lenet.pth'))

im = Image.open('2.jpg')
im = transform(im) # 转换为了 [深度，高度，宽度]，但是还有batch
im = torch.unsqueeze(im, dim=0) # 转换为了 [分块，深度，高度，宽度] 【此行作用：增加新的维度】
# unsqueeze: Returns a new tensor with a dimension of size one inserted at the specified position.
# https://pytorch.org/docs/stable/generated/torch.unsqueeze.html#torch.unsqueeze
with torch.no_grad():
    outputs = net(im)
    predict = torch.max(outputs, dim=1)[1].data.numpy()
    # predict = torch.softmax(outputs, dim=1) # softmax 把值转换为概率分布
print(classes[int(predict)])