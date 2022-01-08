import argparse

import torch
import torch.nn as nn
import torchvision.utils as vutils
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.animation as animation
import random

from model import Generator, nz

device = torch.device("cuda:0" if torch.cuda.is_available()  else "cpu")

parser = argparse.ArgumentParser()
parser.add_argument('-load_path', default='model/model_final.pth', help='Checkpoint to load path from')
parser.add_argument('-num_output', default=64, help='Number of generated outputs')
args = parser.parse_args()

# Load the checkpoint file.
state_dict = torch.load(args.load_path, map_location=device)

# Set the device to run on: GPU or CPU.
device = torch.device("cuda:0" if(torch.cuda.is_available()) else "cpu")
# Get the 'params' dictionary from the loaded state_dict.
# params = state_dict['params']

# Create the generator network.
netG = Generator().to(device)
# Load the trained generator weights.

# 训练时使用的GPU
ngpu = 2

if ngpu > 1:
    # 如果有多个GPU，将模型并行化，用DataParallel来操作。这个过程会将key值加一个"module. ***"。
    netG = nn.DataParallel(netG)
netG.load_state_dict(state_dict['generator']) # 接着就可以将模型参数load进模型。


print(args.num_output)
# Get latent vector Z from unit normal distribution.
noise = torch.randn(int(args.num_output), nz, 1, 1, device=device)

# Turn off gradient calculation to speed up the process.
with torch.no_grad():
	# Get generated image from the noise vector using
	# the trained generator.
    generated_img = netG(noise).detach().cpu()

# Display the generated image.
plt.axis("off")
plt.title("Generated Images")
plt.imshow(np.transpose(vutils.make_grid(generated_img, padding=2, normalize=True), (1,2,0)))

plt.show()