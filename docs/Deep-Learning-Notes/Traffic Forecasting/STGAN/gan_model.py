import torch
import torch.nn as nn

class Generator(nn.Module):

    def __init__(self, opt):
        super(Generator, self).__init__()

        self.opt = opt

        self.recent_network = GCGRUModel(opt)
        self.trend_network = \
            nn.LSTM(input_size=opt['num_feature'], hidden_size=opt['hidden_dim'], num_layers=opt['num_layer'],
                    batch_first=True)

        self.recent_fc = nn.Sequential(
            nn.Linear(in_features=opt['hidden_dim'] * opt['num_adj'] // 2, out_features=opt['hidden_dim']),
            nn.ReLU(),
        )

        self.trend_fc = nn.Sequential(
            nn.Linear(in_features=opt['hidden_dim'], out_features=opt['hidden_dim']),
            nn.ReLU(),
        )

        self.feature_fc = nn.Sequential(
            nn.Linear(in_features=opt['time_feature'], out_features=opt['hidden_dim']),
            nn.ReLU(),
        )

        self.fc = nn.Sequential(
            nn.Linear(in_features=int(opt['hidden_dim'] * 2.5), out_features=opt['hidden_dim']),
            nn.ReLU(),
            nn.Linear(in_features=opt['hidden_dim'], out_features=opt['num_feature']),
            nn.Tanh()
        )

        self.gcn = GCN(opt, input_size=int(opt['hidden_dim'] * 2.5), output_size=opt['num_feature'], activation='tanh')

    def forward(self, recent_data, trend_data, sub_graph, time_feature):
        """Generator
        :param recent_data: (B, seq_len, num_node, input_dim)
        :param trend_data: (B, seq_len, input_dim)
        :param sub_graph: (B, num_nodes, num_nodes)
        :param time_feature: (B, time_features)
        :return
        - Output: `2-D` tensor with shape `(B, input_dim)`
        """
        batch_size = recent_data.shape[0]
        recent, _ = self.recent_network(recent_data, sub_graph)  # (B, num_adj, rnn_units)

        trend, _ = self.trend_network(trend_data)  # (B, seq_len, hidden_dim)
        trend = trend[:, -1, ].view(batch_size, 1, -1)  # (B, hidden_dim) --> (B, 1, hidden_dim)
        trend = trend.repeat(1, self.opt['num_adj'], 1)  # (B, num_adj, hidden_dim)

        feature_fc = self.feature_fc(time_feature).view(batch_size, 1, -1)  # (B, hidden_dim) --> (B, 1, hidden_dim)
        feature_fc = feature_fc.repeat(1, self.opt['num_adj'], 1)  # (B, num_adj, hidden_dim)

        combined = torch.cat([recent, trend, feature_fc], dim=2)

        output = self.gcn(combined, sub_graph)

        return output


class Discriminator(nn.Module):

    def __init__(self, opt):
        super(Discriminator, self).__init__()

        self.opt = opt
        self.T_recent = self.opt['recent_time'] * self.opt['timestamp']

        self.gcn = GCN(opt, input_size=opt['num_feature'], output_size=opt['hidden_dim'])

        self.seq_network = GCGRUModel(opt)
        self.seq_fc = nn.Sequential(
            nn.Linear(in_features=opt['hidden_dim'] * opt['num_adj'] // 2, out_features=opt['hidden_dim']),
            nn.ReLU(),
        )

        self.trend_network = \
            nn.LSTM(input_size=opt['num_feature'], hidden_size=opt['hidden_dim'], num_layers=opt['num_layer'],
                    batch_first=True)

        self.output = nn.Sequential(
            nn.Linear(in_features=opt['hidden_dim'] * 2, out_features=opt['hidden_dim']),
            nn.ReLU(),
            nn.Linear(in_features=opt['hidden_dim'], out_features=1),
            nn.Sigmoid()
        )

    def forward(self, sequence, sub_graph, trend_data):
        """Discrminator
        :param sequence: (B, seq_len, num_node, input_dim) or (seq_len, B, num_node, input_dim)
        :param sub_graph: (B, num_nodes, num_nodes)
        :param trend_data: (B, seq_len, input_dim)
        :return
        - Output: `2-D` tensor with shape `(B, 2)`
        """
        seq, hid = self.seq_network(sequence[:, :-1, ], sub_graph)  # (B, num_adj, rnn_units)
        seq_fc = self.seq_fc(seq.view(sequence.shape[0], -1))  # (B, hidden_dim)

        gcn = self.gcn(sequence[:, -1, ], sub_graph)  # (B, num_adj, hidden_dim)
        gcn_pooling = torch.max(gcn, dim=1)[0].squeeze()  # (B, hidden_dim)

        output = self.output(torch.cat([gcn_pooling, seq_fc], dim=1))
        return output


class GCN(nn.Module):
    def __init__(self, opt, input_size, output_size, activation='sigmoid'):
        super().__init__()
        self.opt = opt
        self.output_size = output_size

        self.fc = nn.Linear(in_features=input_size, out_features=output_size)

        if activation == 'tanh':
            self.activation = nn.Tanh()
        else:
            self.activation = nn.Sigmoid()

    def forward(self, x, A):
        """Graph Convolution for batch.
        :param inputs: (B, num_nodes, input_dim)
        :param norm_adj: (B, num_nodes, num_nodes)
        :return
        - Output: `3-D` tensor with shape `(B, num_nodes, rnn_units)`
        """
        x = torch.bmm(A, x)  # (B, num_nodes, input_dim)
        x = self.fc(x)

        return self.activation(x)  # (B, num_nodes, rnn_units)


class GCGRUCell(torch.nn.Module):
    def __init__(self, opt, input_dim, rnn_units):
        super().__init__()

        input_size = input_dim + rnn_units

        self.r_gconv = GCN(opt, input_size=input_size, output_size=rnn_units)
        self.u_gconv = GCN(opt, input_size=input_size, output_size=rnn_units)
        self.c_gconv = GCN(opt, input_size=input_size, output_size=rnn_units, activation='tanh')

    def forward(self, x, h, A):
        """Gated recurrent unit (GRU) with Graph Convolution.
        :param inputs: (B, num_nodes, input_dim)
        :param hx: (B, num_nodes, rnn_units)
        :param norm_adj: (B, num_nodes, num_nodes)
        :return
        - Output: A `3-D` tensor with shape `(B, num_nodes, rnn_units)`.
        """
        x_h = torch.cat([x, h], dim=2)

        r = self.r_gconv(x_h, A)
        u = self.u_gconv(x_h, A)

        x_rh = torch.cat([x, r * h], dim=2)

        c = self.c_gconv(x_rh, A)

        h = u * h + (1.0 - u) * c

        return h


class GCGRUModel(nn.Module):
    def __init__(self, opt):
        super().__init__()
        self.opt = opt

        self.num_rnn_layers = opt['num_layer']

        self.num_nodes = opt['num_adj']
        self.rnn_units = opt['hidden_dim'] // 2

        self.dcgru_layers = nn.ModuleList(
            [GCGRUCell(opt=opt, input_dim=opt['num_feature'], rnn_units=self.rnn_units),
             GCGRUCell(opt=opt, input_dim=self.rnn_units, rnn_units=self.rnn_units)])

    def forward(self, inputs, norm_adj):
        """encoder forward pass on t time steps
        :param inputs: shape (batch_size, seq_len, num_node, input_dim)
        :return: encoder_hidden_state: (num_layers, batch_size, self.hidden_state_size)
        """
        seq_len = inputs.shape[1]
        encoder_hidden_state = None
        for t in range(seq_len):
            output, encoder_hidden_state = self.encoder(inputs[:, t, ], norm_adj, encoder_hidden_state)

        return output, encoder_hidden_state

    def encoder(self, inputs, norm_adj, hidden_state=None):
        """Encoder
        :param inputs: shape (batch_size, self.num_nodes, self.input_dim)
        :param hidden_state: (num_layers, batch_size, self.num_nodes, self.rnn_units)
               optional, zeros if not provided
        :return: output: `2-D` tensor with shape (B, self.num_nodes, self.rnn_units)
                 hidden_state: `2-D` tensor with shape (num_layers, B, self.num_nodes, self.rnn_units)
        """
        batch_size = inputs.shape[0]
        if hidden_state is None:
            hidden_state = torch.zeros((self.num_rnn_layers, batch_size, self.num_nodes, self.rnn_units), device='cuda')
        hidden_states = []

        output = inputs
        for layer_num, dcgru_layer in enumerate(self.dcgru_layers):
            next_hidden_state = dcgru_layer(output, hidden_state[layer_num,], norm_adj)
            hidden_states.append(next_hidden_state)
            output = next_hidden_state

        return output, torch.stack(hidden_states)