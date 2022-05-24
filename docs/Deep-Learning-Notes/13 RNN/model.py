import torch
import torch.nn as nn

class RNN(nn.Module):
    def __init__(self, rnn_layer, vocab_size):
        super(RNN, self).__init__()
        self.rnn = rnn_layer
        self.hidden_size = rnn_layer.hidden_size * (2 if rnn_layer.bidirectional else 1)
        self.vocab_size = vocab_size
        self.dense = nn.Linear(self.hidden_size, vocab_size)
        self.state = None

    def forward(self, inputs, state):
        X = self.to_onehot(inputs, self.vocab_size)
        Y, self.state = self.rnn(torch.stack(X), state)
        output = self.dense(Y.view(-1, Y.shape[-1]))
        return output, self.state

    def one_hot(self, x, n_class, dtype=torch.float32):
        # X shape: (batch), output shape: (batch, n_class)
        x = x.long()
        res = torch.zeros(x.shape[0], n_class, dtype=dtype, device=x.device)
        res.scatter_(1, x.view(-1, 1), 1)
        return res

    def to_onehot(self, X, n_class):
        # X shape: (batch, seq_len), output: seq_len elements of (batch, n_class)
        return [self.one_hot(X[:, i], n_class) for i in range(X.shape[1])]