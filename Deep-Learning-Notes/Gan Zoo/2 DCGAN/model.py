import torch
import torch.nn as nn
import torch.nn.functional as F

# Size of z latent vector (i.e. size of generator input)
nz = 100

# Size of feature maps in generator
ngf = 64

# Size of feature maps in discriminator
ndf = 64

# Number of channels in the training images. For color images this is 3
nc = 3

class Generator(nn.Module):
    def __init__(self, ngpu=0):
        super().__init__()
        self.ngpu = ngpu
        # Input is the latent vector Z.
        self.tconv1 = nn.ConvTranspose2d(nz, ngf * 8, kernel_size=4, stride=1, padding=0, bias=False)
        self.bn1 = nn.BatchNorm2d(ngf * 8)

        # Input Dimension: (ngf*8) x 4 x 4
        self.tconv2 = nn.ConvTranspose2d(ngf * 8, ngf * 4,
                                         4, 2, 1, bias=False)
        self.bn2 = nn.BatchNorm2d(ngf * 4)

        # Input Dimension: (ngf*4) x 8 x 8
        self.tconv3 = nn.ConvTranspose2d(ngf * 4, ngf * 2,
                                         4, 2, 1, bias=False)
        self.bn3 = nn.BatchNorm2d(ngf * 2)

        # Input Dimension: (ngf*2) x 16 x 16
        self.tconv4 = nn.ConvTranspose2d(ngf * 2, ngf,
                         
                                         4, 2, 1, bias=False)
        self.bn4 = nn.BatchNorm2d(ngf)

        # Input Dimension: (ngf) * 32 * 32
        self.tconv5 = nn.ConvTranspose2d(ngf, nc,
                                         4, 2, 1, bias=False)
        #Output Dimension: (nc) x 64 x 64

    def forward(self, x):
        x = F.relu(self.bn1(self.tconv1(x)))
        x = F.relu(self.bn2(self.tconv2(x)))
        x = F.relu(self.bn3(self.tconv3(x)))
        x = F.relu(self.bn4(self.tconv4(x)))

        x = torch.tanh(self.tconv5(x))

        return x

class Discriminator(nn.Module):
    def __init__(self, ngpu=0):
        super().__init__()
        self.ngpu = ngpu
        # Input Dimension: (nc) x 64 x 64
        self.conv1 = nn.Conv2d(nc, ndf , 4, 2, 1, bias=False)

        # Input Dimension: (ndf) x 32 x 32
        self.conv2 = nn.Conv2d(ndf , ndf * 2,
            4, 2, 1, bias=False)
        self.bn2 = nn.BatchNorm2d(ndf * 2)

        # Input Dimension: (ndf*2) x 16 x 16
        self.conv3 = nn.Conv2d(ndf * 2, ndf * 4,
            4, 2, 1, bias=False)
        self.bn3 = nn.BatchNorm2d(ndf * 4)

        # Input Dimension: (ndf*4) x 8 x 8
        self.conv4 = nn.Conv2d(ndf * 4, ndf * 8,
            4, 2, 1, bias=False)
        self.bn4 = nn.BatchNorm2d(ndf * 8)

        # Input Dimension: (ndf*8) x 4 x 4
        self.conv5 = nn.Conv2d(ndf * 8, 1, 4, 1, 0, bias=False)

    def forward(self, x):
        x = F.leaky_relu(self.conv1(x), 0.2, True)
        x = F.leaky_relu(self.bn2(self.conv2(x)), 0.2, True)
        x = F.leaky_relu(self.bn3(self.conv3(x)), 0.2, True)
        x = F.leaky_relu(self.bn4(self.conv4(x)), 0.2, True)
        x = torch.sigmoid(self.conv5(x))

        return x