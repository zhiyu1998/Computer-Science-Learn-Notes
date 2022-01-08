import torch

if __name__ == '__main__':
    # x0 = torch.randn(2, 3)
    # print(x0)
    # x = x0.flatten(0)
    # print('维度0进行展平：\n', x)
    # x = x0.flatten(1)
    # print('维度1进行展平：\n', x)

    depth = 8
    max_tokens_per_depth = (256, 128, 64, 32, 16, 8)


    for i in zip(range(depth), max_tokens_per_depth):
        print(i)
    for _, output_num_tokens in zip(range(depth), max_tokens_per_depth):
        print(output_num_tokens)