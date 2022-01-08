import torch
import torch.nn as nn
import torch.optim as optim
from model import RNN
import time
import math

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

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

# 裁剪梯度
def grad_clipping(params, theta, device):
    norm = torch.tensor([0.0], device=device)
    for param in params:
        norm += (param.grad.data ** 2).sum()
    norm = norm.sqrt().item()
    if norm > theta:
        for param in params:
            param.grad.data *= (theta / norm)

# 预测
def predict_rnn_pytorch(prefix, num_chars, model, vocab_size, device, idx_to_char,
                      char_to_idx):
    state = None
    output = [char_to_idx[prefix[0]]] # output会记录prefix加上输出
    for t in range(num_chars + len(prefix) - 1):
        X = torch.tensor([output[-1]], device=device).view(1, 1)
        if state is not None:
            if isinstance(state, tuple): # LSTM, state:(h, c)
                state = (state[0].to(device), state[1].to(device))
            else:
                state = state.to(device)

        (Y, state) = model(X, state)
        if t < len(prefix) - 1:
            output.append(char_to_idx[prefix[t + 1]])
        else:
            output.append(int(Y.argmax(dim=1).item()))
    return ''.join([idx_to_char[i] for i in output])

# data
with open('./data/jaychou_lyrics.txt',encoding='utf-8') as f:
    corpus_chars = f.read()
corpus_chars = corpus_chars.replace('\n', ' ').replace('\r', ' ')
idx_to_char = list(set(corpus_chars)) # 将周杰伦的歌词的每个字转换为Set(乱序)，再转换为列表
char_to_idx = dict([(char, i) for i, char in enumerate(idx_to_char)]) # 将每个字符映射成一个从0开始的整数-字符字典
vocab_size = len(char_to_idx)
corpus_indices = [char_to_idx[char] for char in corpus_chars] # 通过字典索引歌词在字典的索引位置

num_hiddens = 256
rnn_layer = nn.RNN(input_size=vocab_size, hidden_size=num_hiddens)
net = RNN(rnn_layer, vocab_size)

# loss
loss_func = nn.CrossEntropyLoss()

# optimizer
optimizer = optim.Adam(net.parameters(), lr=0.001)

net.to(device)
state = None
epochs = 250
batch_size = 32
num_steps = 35 # 每个样本所包含的时间步数
clipping_theta = 0.01
pred_period, pred_len, prefixes = 50, 50, ['分开', '不分开']
for epoch in range(epochs):
    running_loss, n, start = 0.0, 0, time.time()
    data_iter = data_iter_consecutive(corpus_indices, batch_size, num_steps)
    for X, Y in data_iter:
        if state is not None:
            # 使用detach函数从计算图分离隐藏状态, 这是为了
            # 使模型参数的梯度计算只依赖一次迭代读取的小批量序列(防止梯度计算开销太大)
            if isinstance(state, tuple): # LSTM, state(h, c)
                state = (state[0].detach(), state[1].detach())
            else:
                state = state.detach()

        outputs, state = net(X, state)

        # Y的形状是(batch_size, num_steps)，转置后再变成长度为
        # batch * num_steps 的向量，这样跟输出的行一一对应
        y = torch.transpose(Y, 0, 1).contiguous().view(-1) # 真实值
        loss = loss_func(outputs, y.long())

        optimizer.zero_grad()
        loss.backward()
        grad_clipping(net.parameters(), clipping_theta, device) # 为了应对梯度爆炸，使用裁剪梯度
        optimizer.step()
        running_loss += loss.item() * y.shape[0]
        n += y.shape[0]
    # 困惑度是对交叉熵损失函数做指数运算后得到的值
    try:
        perplexity = math.exp(running_loss / n)
    except OverflowError:
        perplexity = float('inf')

    if (epoch + 1) % pred_period == 0:
        print('epoch %d, perplexity %f, time: %.2f sec' % (
            epoch + 1, perplexity, time.time() - start
        ))
        for prefix in prefixes:
            print(' -', predict_rnn_pytorch(
                prefix, pred_len, net, vocab_size, device, idx_to_char,
                char_to_idx))


# epoch 50, perplexity 2.011111, time: 0.28 sec
#  - 分开始没用眼泪 我又该不该再不见  随风飘移青春  输跟赢的分寸计算得很精准  我踏上风火轮在飘移 春
#  - 不分开 你身边中想 你想很久 别怪我 说你不会 不该再见 你 我不想再不住把  你的回忆 待落看不见 你说
# epoch 100, perplexity 1.084286, time: 0.24 sec
#  - 分开 为什么这样子 你看着我说你已表情还在暴力 说加速超分下 你我我笑着我的这样 我很有点难道再不停再想
#  - 不分开 三分手说不出来不该 不能不能不能 我回向你继续看穿 这里引擎声就像是一种乐器  再考一台 时光机
# epoch 150, perplexity 1.045234, time: 0.28 sec
#  - 分开 为什么这里 我跟着球 对着长大人都有人还记得你 我等待死慢慢慢的回忆 翻练世界 爱成中还记得动 如
#  - 不分开 三分手说问不该再该 不到你还要勇气 我就能够得更最  加足了代表　因为温柔不要我 说你的嘴角是 山
# epoch 200, perplexity 1.035917, time: 0.28 sec
#  - 分开 为什么这么简单你做不到 坐车厢朝着南下方向 为什么这种速度你追不到 鸟飞翔穿过这条小巷 为什么这么
#  - 不分开不能不能不要我 我知道好话不会说你还爱 我喜欢的样子你都有 我说我只是你错过的很想　 我们都赢不了
# epoch 250, perplexity 1.043096, time: 0.27 sec
#  - 分开 为什么这样子 你知道很简单离 没有你说我不能害怕你 不没回意 你的而爱我 你拉不知这不了 不会把手
#  - 不分开 三分手说问不到我很多 因为我没有孤单 想象 你身边 这里你的未写 你说的那快就一定因为我没有到 却
