import torch
from torch.nn import functional as F
from torch.utils.data import Dataset, DataLoader

import argparse
import os

from tqdm import tqdm
import numpy as np
from scipy import linalg
from PIL import Image
from torchvision import datasets, transforms, utils
from torchvision.datasets.folder import find_classes
from torchvision.models import inception_v3, Inception3

parser = argparse.ArgumentParser(description='FID score calculator')
parser.add_argument('--img', required=True, help='path to image directory')
parser.add_argument('--batch', default=64, type=int, help='batch size')
parser.add_argument('--sample', default=5000, type=int,
                    help='number of samples generated for evaluation')
parser.add_argument('--code', default=128, type=int,
                    help='code size for generator')
parser.add_argument('--model', default='dcgan', choices=['dcgan', 'resnet'],
                    help='choice model class')
parser.add_argument('checkpoint', metavar='CHECKPOINT',
                    help='checkpoint of generator model')


device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')


def forward(self, x):
    x = F.upsample(x, size=(299, 299), mode='bilinear', align_corners=True)

    x = self.Conv2d_1a_3x3(x)  # 299 x 299 x 3
    x = self.Conv2d_2a_3x3(x)  # 149 x 149 x 32
    x = self.Conv2d_2b_3x3(x)  # 147 x 147 x 32
    x = F.max_pool2d(x, kernel_size=3, stride=2)  # 147 x 147 x 64

    x = self.Conv2d_3b_1x1(x)  # 73 x 73 x 64
    x = self.Conv2d_4a_3x3(x)  # 73 x 73 x 80
    x = F.max_pool2d(x, kernel_size=3, stride=2)  # 71 x 71 x 192

    x = self.Mixed_5b(x)  # 35 x 35 x 192
    x = self.Mixed_5c(x)  # 35 x 35 x 256
    x = self.Mixed_5d(x)  # 35 x 35 x 288

    x = self.Mixed_6a(x)  # 35 x 35 x 288
    x = self.Mixed_6b(x)  # 17 x 17 x 768
    x = self.Mixed_6c(x)  # 17 x 17 x 768
    x = self.Mixed_6d(x)  # 17 x 17 x 768
    x = self.Mixed_6e(x)  # 17 x 17 x 768

    x = self.Mixed_7a(x)  # 17 x 17 x 768
    x = self.Mixed_7b(x)  # 8 x 8 x 1280
    x = self.Mixed_7c(x)  # 8 x 8 x 2048

    x = F.avg_pool2d(x, kernel_size=8)  # 8 x 8 x 2048

    return x.squeeze()  # 1 x 1 x 2048


def load_patched_inception_v3():
    inception = inception_v3(pretrained=True)
    inception.eval()
    inception.forward = forward.__get__(inception, Inception3)

    return inception.to(device)


transform = transforms.Compose([
    transforms.Resize(128),
    transforms.CenterCrop(128),
    transforms.ToTensor(),
    transforms.Normalize((0.5, 0.5, 0.5), (0.5, 0.5, 0.5))])


class ImageData(Dataset):
    def __init__(self, root, transform=transform):
        self.root = root
        self.transform = transform
        self.images = os.listdir(root)

    def __getitem__(self, index):
        img = os.path.join(self.root, self.images[index])
        img = Image.open(img).convert('RGB')

        if self.transform is not None:
            img = transform(img)

        return img

    def __len__(self):
        return len(self.images)


if __name__ == '__main__':
    args = parser.parse_args()
    print(args)

    eps = 1e-6

    inception = load_patched_inception_v3()
    _, class2id = find_classes(args.img)
    total_class = len(class2id)

    if args.model == 'dcgan':
        from model import Generator

    elif args.model == 'resnet':
        from model_resnet import Generator

    generator = Generator(args.code, total_class).to(device)
    generator.load_state_dict(torch.load(args.checkpoint))
    generator.eval()

    fids = []

    for class_name, id in class2id.items():
        dataloader = DataLoader(ImageData(os.path.join(args.img, class_name)),
                                batch_size=args.batch, num_workers=4)
        real_feature = []
        with torch.no_grad():
            for image in tqdm(dataloader,
                              desc='Extract features of real images'):
                image = image.to(device)
                features = inception(image).detach().cpu().numpy()
                real_feature.append(features)

        real_feature = np.concatenate(real_feature)
        real_mean = np.mean(real_feature, 0)
        real_cov = np.cov(real_feature, rowvar=False)
        del real_feature

        sample_feature = []
        with torch.no_grad():
            n_iter = args.sample // args.batch
            resid = args.sample - n_iter * args.batch
            n_samples = [args.batch] * n_iter
            if resid != 0:
                n_samples += [resid]
            for i in tqdm(n_samples,
                          desc='Extract features of fake images'):
                input_class = torch.full([i], id, dtype=torch.long) \
                    .to(device)
                code = torch.randn(i, args.code).to(device)
                sample = generator(code, input_class)
                features = inception(sample).detach().cpu().numpy()
                sample_feature.append(features)

        sample_feature = np.concatenate(sample_feature)
        sample_mean = np.mean(sample_feature, 0)
        sample_cov = np.cov(sample_feature, rowvar=False)
        del sample_feature

        # Came from https://github.com/bioinf-jku/TTUR

        cov_sqrt, _ = linalg.sqrtm(sample_cov @ real_cov, disp=False)
        if not np.isfinite(cov_sqrt).all():
            print('Product of cov matrices is singular')
            offset = np.eye(sample_cov.shape[0]) * eps
            cov_sqrt = linalg.sqrtm((sample_cov + offset)
                                    @ (real_cov + offset))

        if np.iscomplexobj(cov_sqrt):
            if not np.allclose(np.diagonal(cov_sqrt).imag, 0, atol=1e-3):
                m = np.max(np.abs(cov_sqrt.imag))
                raise ValueError(f'Imaginary component {m}')

            cov_sqrt = cov_sqrt.real

        mean_diff = sample_mean - real_mean
        mean_norm = mean_diff @ mean_diff

        trace = np.trace(sample_cov) + np.trace(real_cov) \
            - 2 * np.trace(cov_sqrt)

        fid = mean_norm + trace

        print(f'FID score of class {id} ({class_name}):', fid)
        fids.append(fid)

    print(f'Mean FID is: {sum(fids) / len(fids)}')