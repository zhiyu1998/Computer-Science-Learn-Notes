import torch
import torch.nn as nn
import torch.utils.data
import json
import os
import torch.optim as optim
import argparse
import math
import torch.optim.lr_scheduler as lr_scheduler

from torch.utils.tensorboard import SummaryWriter
from torchvision import transforms, datasets
from utils import train_one_epoch, evaluate
from model import mobilevit_s


def main(args):
    device = torch.device(args.device if torch.cuda.is_available() else "cpu")
    print("using {} device.".format(device))

    writer = SummaryWriter()

    data_transform = {
        "train": transforms.Compose([transforms.RandomResizedCrop(224),
                                     transforms.RandomHorizontalFlip(),
                                     transforms.ToTensor(),
                                     transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])]),
        "val": transforms.Compose([transforms.Resize(256),
                                   transforms.CenterCrop(224),
                                   transforms.ToTensor(),
                                   transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])])}

    data_root = os.path.abspath(os.path.join(os.getcwd(), '../'))
    image_path = os.path.join(data_root, "datasets", args.data_path)
    train_dataset = datasets.ImageFolder(root=image_path + '/train',
                                         transform=data_transform['train'])
    train_num = len(train_dataset)

    flower_data = train_dataset.class_to_idx
    cla_dict = dict((val, key) for key, val in flower_data.items())
    json_str = json.dumps(cla_dict, indent=4)
    with open('class_indices.json', 'w') as json_file:
        json_file.write(json_str)

    batch_size = args.batch_size
    nw = min([os.cpu_count(), batch_size if batch_size > 1 else 0, 8])
    train_loader = torch.utils.data.DataLoader(train_dataset,
                                               batch_size=batch_size,
                                               pin_memory=True,
                                               shuffle=True,
                                               num_workers=nw)

    validate_dataset = datasets.ImageFolder(root=image_path + '/val',
                                            transform=data_transform['val'])
    val_num = len(validate_dataset)
    validate_loader = torch.utils.data.DataLoader(validate_dataset,
                                                  batch_size=batch_size,
                                                  pin_memory=True,
                                                  shuffle=False,
                                                  num_workers=nw)

    print("using {} images for training, {} images for validation.".format(train_num, val_num))

    net = mobilevit_s(num_classes=args.num_classes).to(device)

    if args.weights != "":
        assert os.path.exists(args.weights), "weights file: '{}' not exist.".format(args.weights)

        weights_dict = torch.load(args.weights, map_location=device)

        del_keys = ['head.weight', 'head.bias'] if net.has_logits \
            else ['pre_logits.fc.weight', 'pre_logits.fc.bias', 'head.weight', 'head.bias']
        for k in del_keys:
            del weights_dict[k]
        print(net.load_state_dict(weights_dict, strict=False))

    if args.freeze_layers:

        for name, para in net.named_parameters():

            if "head" not in name and "pre_logits" not in name:
                para.requires_grad_(False)
            else:
                print("training {}".format(name))

    params = [p for p in net.parameters() if p.requires_grad]
    optimizer = optim.SGD(params, lr=args.lr, momentum=0.9, weight_decay=5E-5)
    lf = lambda x: ((1 + math.cos(x * math.pi / args.epochs)) / 2) * (1 - args.lrf) + args.lrf
    scheduler = lr_scheduler.LambdaLR(optimizer, lr_lambda=lf)

    best_acc = 0.0
    save_path = './ViT_patch16_224.pth'
    train_steps = len(train_loader)
    for epoch in range(args.epochs):
        train_loss, train_acc = train_one_epoch(net=net,
                                                train_loader=train_loader,
                                                optimizer=optimizer,
                                                epoch=epoch,
                                                device=device)

        scheduler.step()

        val_loss, val_acc = evaluate(net=net,
                                     val_loader=validate_loader,
                                     optimizer=optimizer,
                                     epoch=epoch,
                                     device=device)

        tags = ["train_loss", "train_acc", "val_loss", "val_acc", "learning_rate"]
        writer.add_scalar(tags[0], train_loss, epoch)
        writer.add_scalar(tags[1], train_acc, epoch)
        writer.add_scalar(tags[2], val_loss, epoch)
        writer.add_scalar(tags[3], val_acc, epoch)
        writer.add_scalar(tags[4], optimizer.param_groups[0]["lr"], epoch)

        torch.save(net.state_dict(), "./models/model-{}.pth".format(epoch))


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument("--epochs", type=int, default=30, help="number of epochs of training")
    parser.add_argument("--batch_size", type=int, default=16, help="size of the batches")
    parser.add_argument("--lr", type=float, default=0.01, help="optimizer: learning rate")
    parser.add_argument('--lrf', type=float, default=0.01, help="lr_scheduler rate")
    parser.add_argument('--weights', type=str, default='./jx_vit_base_patch16_224_in21k-e5005f0a.pth',
                        help='initial weights path')
    parser.add_argument('--freeze_layers', type=bool, default=True)
    parser.add_argument("--num_classes", type=int, default=5, help="output of classes")
    parser.add_argument("--data_path", type=str, default='flower_data', help="path of dataset")
    parser.add_argument("--device", type=str, default='cuda0', help="use cuda or cpu")
    opt = parser.parse_args()

    main(opt)
