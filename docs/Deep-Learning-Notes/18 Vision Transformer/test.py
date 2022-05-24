import torch

if __name__ == '__main__':
    x0 = torch.randn(2, 3)
    print(x0)
    x = x0.flatten(0)
    print('维度0进行展平：\n', x)
    x = x0.flatten(1)
    print('维度1进行展平：\n', x)