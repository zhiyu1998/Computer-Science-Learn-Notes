import os
import json

import torch
import torch.nn as nn
from torchvision import transforms, datasets
import torch.optim as optim
from tqdm import tqdm
from model import GoogleNet
# import torchvision.models.googlenet

device = torch.device('cuda:0' if torch.cuda.is_available() else 'cpu')
print('using {} device'.format(device))

data_transform = {
    'train': transforms.Compose(
        [
            transforms.RandomResizedCrop(224),
            transforms.RandomHorizontalFlip(),
            transforms.ToTensor(),
            transforms.Normalize((0.5,0.5,0.5), (0.5,0.5,0.5))
        ]
    ),
    'val': transforms.Compose(
        [
            transforms.Resize((224, 224)),
            transforms.ToTensor(),
            transforms.Normalize((0.5, 0.5, 0.5), (0.5, 0.5, 0.5))
        ]
    )
}
# find data
data_root = os.path.abspath(os.getcwd())
image_path = data_root + '/flower_data'
train_dataset = datasets.ImageFolder(root=image_path + '/train',
                                     transform=data_transform['train'])
train_num = len(train_dataset)
# save data to json
flower_data = train_dataset.class_to_idx
cla_dict = dict((val, key) for key, val in flower_data.items())
json_str = json.dumps(cla_dict, indent=4)
with open('class_indices.json', 'w') as json_file:
    json_file.write(json_str)

# load data
batch_size = 32

train_loader = torch.utils.data.DataLoader(train_dataset,
                                           batch_size=batch_size,
                                           shuffle=True,
                                           num_workers=0)

validate_dataset = datasets.ImageFolder(root=image_path + '/val',
                                        transform=data_transform['val'])
val_num = len(validate_dataset)
validate_loader = torch.utils.data.DataLoader(validate_dataset,
                                              batch_size=batch_size,
                                              shuffle=False,
                                              num_workers=0)

print("using {} images for training, {} images for validation.".format(train_num, val_num))

# test_data_iter = iter(validate_loader)
# test_image, test_label = test_data_iter.next()

# net = torchvision.models.googlenet(num_classes=5)
# model_dict = net.state_dict()
# pretrain_model = torch.load("googlenet.pth")
# del_list = ["aux1.fc2.weight", "aux1.fc2.bias",
#             "aux2.fc2.weight", "aux2.fc2.bias",
#             "fc.weight", "fc.bias"]
# pretrain_dict = {k: v for k, v in pretrain_model.items() if k not in del_list}
# model_dict.update(pretrain_dict)
# net.load_state_dict(model_dict)

# net
net = GoogleNet(num_classes=5, aux_logits=True, init_weights=True)
# =================迁移学习===============begin======================
# model_weight_path = "./googlenet-pre.pth"
# if os.path.exists(model_weight_path):
#     weights_dict = torch.load(model_weight_path, map_location=device)
#     # load_weights_dict = {k: v for k, v in weights_dict.items() if net.state_dict()[k].numel() == v.numel()}
#     print(net.load_state_dict(weights_dict, strict=False))
# else:
#     raise FileNotFoundError("not found weights file: {}".format(model_weight_path))
# # 冻结权重
# for name, para in net.named_parameters():
#     # 除最后的全连接层外，其他权重全部冻结
#     if "fc" not in name:
#         para.requires_grad_(False)
# =================迁移学习===============end======================
net.to(device)

# loss
loss_function = nn.CrossEntropyLoss()

# optimizer
optimizer = optim.Adam(net.parameters(), lr=0.0001)

# train
epochs = 30
best_acc = 0.0
save_path = './GoogleNet.pth'
train_steps = len(train_loader)
for epoch in range(epochs):
    # train mode
    net.train()
    running_loss = 0.0
    train_bar = tqdm(train_loader)
    for step, data in enumerate(train_bar):
        images, labels = data
        optimizer.zero_grad()
        logits, aux_logits1, aux_logits2 = net(images.to(device))
        loss0 = loss_function(logits, labels.to(device))
        loss1 = loss_function(aux_logits1, labels.to(device))
        loss2 = loss_function(aux_logits2, labels.to(device))
        loss = loss0 + loss1 * 0.3 + loss2 * 0.3
        loss.backward()
        optimizer.step()

        running_loss += loss.item()

        train_bar.desc = 'train epoch[{}/{}] loss:{:.3f}'.format(epoch + 1, epochs, loss)

    # validate mode
    # 在model的第70行使用了self.training， 调用了net.eval不会调用辅助分类器
    net.eval()
    acc = 0.0
    with torch.no_grad():
        val_bar = tqdm(validate_loader)
        for val_data in val_bar:
            val_images, val_labels = val_data
            outputs = net(val_images.to(device))
            predict_y = torch.max(outputs, dim=1)[1]
            acc += torch.eq(predict_y, val_labels.to(device)).sum().item()

    val_accurate = acc / val_num

    print('[epoch %d] train_loss: %.3f  val_accuracy: %.3f' %
          (epoch + 1, running_loss / train_steps, val_accurate))

    if val_accurate > best_acc:
        best_acc = val_accurate
        torch.save(net.state_dict(), save_path)

print('Finished Training')