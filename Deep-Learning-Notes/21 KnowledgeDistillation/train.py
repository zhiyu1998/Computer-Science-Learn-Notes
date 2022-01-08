import torch
import torch.nn as nn
from torchvision import transforms, datasets
import json
import os
from tqdm import tqdm
import torch.optim as optim
from model import resnet34
import torch.nn.functional as F


def loss_fn_kd(outputs, labels, teacher_outputs, alpha=0.0, temperature=1):
    """
    Compute the knowledge-distillation (KD) loss given outputs, labels.
    "Hyperparameters": temperature and alpha
    NOTE: the KL Divergence for PyTorch comparing the softmaxs of teacher
    and student expects the input tensor to be log probabilities! See Issue #2
    """
    alpha = alpha
    T = temperature
    KD_loss = nn.KLDivLoss()(F.log_softmax(outputs / T, dim=1),
                             F.softmax(teacher_outputs / T, dim=1)) * (alpha * T * T) + \
              F.cross_entropy(outputs, labels) * (1. - alpha)

    return KD_loss


device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")
print("using {} device.".format(device))

data_transform = {
    "train": transforms.Compose([transforms.RandomResizedCrop(224),
                                 transforms.RandomHorizontalFlip(),
                                 transforms.ToTensor(),
                                 transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])]),
    "val": transforms.Compose([transforms.Resize(256),
                               transforms.CenterCrop(224),
                               transforms.ToTensor(),
                               transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])])}

# find data
data_root = os.path.abspath(os.path.join(os.getcwd(), '../'))
image_path = os.path.join(data_root, "Data", "renzhiyu", "flower_data")
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
batch_size = 16
# windows
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
# Linux
# nw = min([os.cpu_count(), batch_size if batch_size > 1 else 0, 8])  # number of workers
# print('Using {} dataloader workers every process'.format(nw))

# train_loader = torch.utils.data.DataLoader(train_dataset,
#                                            batch_size=batch_size, shuffle=True,
#                                            num_workers=nw)

# validate_dataset = datasets.ImageFolder(root=os.path.join(image_path, "val"),
#                                         transform=data_transform["val"])
# val_num = len(validate_dataset)
# validate_loader = torch.utils.data.DataLoader(validate_dataset,
#                                               batch_size=batch_size, shuffle=False,
#                                               num_workers=nw)

print("using {} images for training, {} images for validation.".format(train_num, val_num))

net = resnet34()
teacher_model = resnet34()

# TODO:加载老师模型
model_weight_path = "./resnet34-pre.pth"
assert os.path.exists(model_weight_path), "file {} does not exist.".format(model_weight_path)
teacher_model.load_state_dict(torch.load(model_weight_path, map_location=device), strict=False)  # load pretrain weights
# change fc layer structure
# in_channel = teacher_model.fc.in_features
# teacher_model.fc = nn.Linear(in_channel, 5)
teacher_model.to(device)
net.to(device)

# optimizer
optimizer = optim.Adam(net.parameters(), lr=0.01)

# train
epochs = 30
best_acc = 0.0
save_path = './ResNet34.pth'
train_steps = len(train_loader)

for epoch in range(epochs):
    # train mode
    net.train()
    running_loss = 0.0
    train_bar = tqdm(train_loader)
    for step, data in enumerate(train_bar):
        images, labels = data
        optimizer.zero_grad()
        outputs = net(images.to(device))

        # TODO: 计算蒸馏损失
        with torch.no_grad():
            output_teacher_batch = teacher_model(images.to(device))
            if torch.cuda.is_available():
                output_teacher_batch = output_teacher_batch.cuda()
        loss = loss_fn_kd(outputs, labels.to(device), output_teacher_batch, alpha=0.9, temperature=5)

        loss.backward()
        optimizer.step()

        running_loss += loss.item()

        train_bar.desc = 'train epoch[{}/{}] loss:{:.3f}'.format(epoch + 1, epochs, loss)

    # validate mode
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