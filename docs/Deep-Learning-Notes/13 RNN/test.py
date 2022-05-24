import torch
import random

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

# --------------------------读取数据--------------------------
with open('./data/jaychou_lyrics.txt',encoding='utf-8') as f:
    corpus_chars = f.read()
# print(corpus_chars[:40])

# --------------------------转换换行符--------------------------
corpus_chars = corpus_chars.replace('\n', ' ').replace('\r', ' ')
# print(corpus_chars[:40])

# --------------------------转换歌词为字典--------------------------
idx_to_char = list(set(corpus_chars)) # 将周杰伦的歌词的每个字转换为Set(乱序)，再转换为列表
# print(idx_to_char[:10])
char_to_idx = dict([(char, i) for i, char in enumerate(idx_to_char)]) # 将每个字符映射成一个从0开始的整数-字符字典
vocab_size = len(char_to_idx)
# print(char_to_idx)
# print(vocab_size) # 2582

corpus_indices = [char_to_idx[char] for char in corpus_chars] # 通过字典索引歌词在字典的索引位置
sample = corpus_indices[:20]
# print('chars:', ''.join([idx_to_char[idx] for idx in sample]))
# print('indices:', sample)

# 随机采样
# * batch_size: 每个小批量的样本数
# * num_steps: 每个样本所包含的时间步数
# [注] /: 浮点除法， //: 整除 -- 向下取整
def data_iter_random(corpus_indices, batch_size, num_steps): # corpus 31
    num_examples = (len(corpus_indices) - 1) // num_steps # 5个样本（每个样本6个时间步数）
    epochs = num_examples // batch_size # 2 次周期， 每次2个批量 每个批量5个样本
    example_indices = list(range(num_examples)) # [0, 1, 2, 3, 4] -- 样本索引
    random.shuffle(example_indices) # [4, 0, 3, 1, 2] -- 打乱样本索引

    # 返回从pos开始的长为num_steps的序列
    def _data(pos):
        return corpus_indices[pos: pos + num_steps]

    for epoch in range(epochs):
        epoch = epoch * batch_size # 0 -- 第一个周期
        batch_indices = example_indices[epoch: epoch + batch_size] # [4, 0] | 下一次epoch：[3 ,1]
        # 显然X的第一次i == 24, 取值在[24, 24 + 6)  第二次 i == 0, 取值在[0, 时间步) -> [0, 6)
        X = [_data(i * num_steps) for i in batch_indices] # [[24, 25, 26, 27, 28, 29], [0, 1, 2, 3, 4, 5]]
        Y = [_data(i * num_steps + 1) for i in batch_indices] # [[25, 26, 27, 28, 29, 30], [1, 2, 3, 4, 5, 6]]
        yield torch.tensor(X, dtype=torch.float32, device=device), torch.tensor(Y, dtype=torch.float32, device=device)

# example_ez = list(range(31))
# for X, Y in data_iter_random(example_ez, batch_size=2, num_steps=6):
#     print('X: ', X, '\nY:', Y, '\n')

# 相邻采样
def data_iter_consecutive(corpus_indices, batch_size, num_steps):
    corpus_indices = torch.tensor(corpus_indices, dtype=torch.float32, device=device)
    data_len = len(corpus_indices) # 31
    # 计算需要几个批量
    batch_len = data_len // batch_size # 15
    indices = corpus_indices[0: batch_size * batch_len].view(batch_size, batch_len) # [2:15]
    epochs = (batch_len - 1) // num_steps # 2
    for epoch in range(epochs): # 0
        epoch = epoch * num_steps
        X = indices[:, epoch: epoch + num_steps] # [2:6] -> indices[横向, 纵向]
        Y = indices[:, epoch+1: epoch + num_steps + 1] # [2:6]
        yield X, Y

# for X, Y in data_iter_consecutive(example_ez, batch_size=2, num_steps=6):
#     print('X: ', X, '\nY:', Y, '\n')

def one_hot(x, n_class, dtype=torch.float32):
    # X shape: (batch), output shape: (batch, n_class)
    x = x.long()
    res = torch.zeros(x.shape[0], n_class, dtype=dtype, device=x.device)
    res.scatter_(1, x.view(-1, 1), 1)
    return res

# 形状为(批量大小, 词典大小)的矩阵，矩阵个数等于时间步数
def to_onehot(X, n_class):
    # X shape: (batch, seq_len), output: seq_len elements of (batch, n_class)
    return [one_hot(X[:, i], n_class) for i in range(X.shape[1])]

X = torch.arange(10).view(2, 5)
inputs = to_onehot(X, vocab_size)
print(inputs)

# 梯度裁剪
def grad_clipping(params, theta, device):
    norm = torch.tensor([0.0], device=device)
    for param in params:
        norm += (param.grad.data ** 2).sum()
    norm = norm.sqrt().item()
    if norm > theta:
        for param in params:
            param.grad.data *= (theta / norm)