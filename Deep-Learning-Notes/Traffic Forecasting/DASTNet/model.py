import torch
import torch.nn as nn
import torch.nn.functional as F

class GradReverse(torch.autograd.Function):
    """
    Extension of grad reverse layer
    """
    @staticmethod
    def forward(ctx, x, constant):
        ctx.constant = constant
        return x.view_as(x)

    @staticmethod
    def backward(ctx, grad_output):
        grad_output = grad_output.neg() * ctx.constant
        return grad_output, None

    def grad_reverse(x, constant):
        return GradReverse.apply(x, constant)


class Grad(torch.autograd.Function):
    """
    Extension of grad reverse layer
    """
    @staticmethod
    def forward(ctx, x, constant):
        ctx.constant = constant
        return x.view_as(x)

    @staticmethod
    def backward(ctx, grad_output):
        grad_output = grad_output * ctx.constant
        return grad_output, None

    def grad(x, constant):
        return Grad.apply(x, constant)

class Domain_classifier_DG(nn.Module):

    def __init__(self, num_class, encode_dim):
        super(Domain_classifier_DG, self).__init__()

        self.num_class = num_class
        self.encode_dim = encode_dim

        self.fc1 = nn.Linear(self.encode_dim, 16)
        self.fc2 = nn.Linear(16, num_class)

    def forward(self, input, constant, Reverse):
        if Reverse:
            input = GradReverse.grad_reverse(input, constant)
        else:
            input = Grad.grad(input, constant)
        logits = torch.tanh(self.fc1(input))
        logits = self.fc2(logits)
        logits = F.log_softmax(logits, 1)

        return logits

class VGRULinear(nn.Module):
    def __init__(self, num_gru_units: int, output_dim: int, bias: float = 0.0):
        super(VGRULinear, self).__init__()
        self._num_gru_units = num_gru_units
        self._output_dim = output_dim
        self._bias_init_value = bias
        self.weights = nn.Parameter(
            torch.FloatTensor(self._num_gru_units + 1, self._output_dim)
        )
        self.biases = nn.Parameter(torch.FloatTensor(self._output_dim))
        self.reset_parameters()

    def reset_parameters(self):
        nn.init.xavier_uniform_(self.weights)
        nn.init.constant_(self.biases, self._bias_init_value)

    def forward(self, inputs, hidden_state):
        batch_size, num_nodes = inputs.shape[0], inputs.shape[1]
        inputs = inputs.reshape((batch_size, num_nodes, 1))
        hidden_state = hidden_state.reshape((batch_size, num_nodes, self._num_gru_units))
        concatenation = torch.cat((inputs, hidden_state), dim=2)
        concatenation = concatenation.reshape((-1, self._num_gru_units + 1))
        outputs = concatenation @ self.weights + self.biases
        outputs = outputs.reshape((batch_size, num_nodes, self._output_dim))
        outputs = outputs.reshape((batch_size, num_nodes * self._output_dim))
        return outputs

    def hyperparameters(self):
        return {
            "num_gru_units": self._num_gru_units,
            "output_dim": self._output_dim,
            "bias_init_value": self._bias_init_value,
        }


class VGRUCell(nn.Module):
    def __init__(self, hidden_dim: int, adj_encodedim):
        super(VGRUCell, self).__init__()
        self._encode_dim = adj_encodedim
        self._hidden_dim = hidden_dim
        self.weights = nn.Parameter(
            torch.FloatTensor(self._encode_dim, self._encode_dim)
        )
        self.bias = nn.Parameter(torch.tensor([0.0]))
        self.linear = nn.Linear(self._encode_dim + self._hidden_dim, self._hidden_dim)
        self.linear1 = VGRULinear(self._hidden_dim, self._hidden_dim * 2, bias=1.0)
        self.linear2 = VGRULinear(self._hidden_dim, self._hidden_dim)
        self.reset_parameters()

    def reset_parameters(self):
        nn.init.xavier_uniform_(self.weights, gain=nn.init.calculate_gain("tanh"))

    def forward(self, inputs, hidden_state, feat):
        batch_size, num_nodes = inputs.shape[0], inputs.shape[1]
        concatenation = torch.sigmoid(self.linear1(inputs, hidden_state))
        r, u = torch.chunk(concatenation, chunks=2, dim=1)
        c = torch.tanh(self.linear2(inputs, r * hidden_state))
        new_hidden_state = u * hidden_state + (1 - u) * c

        new_hidden_state = new_hidden_state.reshape((batch_size * num_nodes, self._hidden_dim))
        feat = feat.reshape((batch_size * num_nodes, feat.shape[-1]))
        feat = feat @ self.weights + self.bias
        new_hidden_state = torch.cat((new_hidden_state, feat), 1)
        new_hidden_state = self.linear(new_hidden_state)
        new_hidden_state = new_hidden_state.reshape((batch_size, num_nodes * self._hidden_dim))

        return new_hidden_state, new_hidden_state


class VGRU_FEAT(nn.Module):
    def __init__(self, hidden_dim: int, output_dim: int, encode_dim: int):
        super(VGRU_FEAT, self).__init__()
        self._encode_dim = encode_dim
        self._hidden_dim = hidden_dim
        self._output_dim = output_dim
        self.vgru_cell = VGRUCell(self._hidden_dim, self._encode_dim)

    def forward(self, inputs, feat):
        batch_size, seq_len, num_nodes = inputs.shape
        outputs = list()
        hidden_state = torch.zeros(batch_size, num_nodes * self._hidden_dim).type_as(inputs)
        for i in range(seq_len):
            output, hidden_state = self.vgru_cell(inputs[:, i, :], hidden_state, feat)
            output = output.reshape((batch_size, num_nodes, self._hidden_dim))
            outputs.append(output)
        last_output = outputs[-1]
        last_output = last_output.reshape((-1, last_output.size(2)))

        return last_output

class Extractor_N2V(nn.Module):

    def __init__(self, input_dim, hidden_dim: int, encode_dim, device, batch_size, etype):
        super(Extractor_N2V, self).__init__()
        self.device = device
        self.batch_size = batch_size
        self.etype = etype
        self._input_dim = input_dim
        self._encode_dim = encode_dim
        self._hidden_dim = hidden_dim
        self.adj_encoderlayer1 = nn.Linear(input_dim, hidden_dim)
        self.adj_encoderlayer2 = nn.Linear(hidden_dim, encode_dim)
        self.batch_norm = nn.BatchNorm1d(encode_dim)
        self.eps1 = nn.Parameter(torch.tensor([1.0]))

    def forward(self, h, adj):
        h = self.adj_encoderlayer1(h.float())
        if self.etype == "gin":
            pooled = torch.spmm(adj.float(), h.float())
            degree = torch.spmm(adj.float(), torch.ones((adj.shape[0], 1)).float().to(self.device)).to(
                self.device)
            pooled = pooled / degree
            h = pooled + self.eps1 * h

        h = self.batch_norm(h.float())
        h = self.adj_encoderlayer2(h.float())

        return h

class DASTNet(nn.Module):
    def __init__(self, input_dim, hidden_dim, encode_dim, device, batch_size, etype, pre_len, dataset, ft_dataset,
                 adj_pems04, adj_pems07, adj_pems08):
        super(DASTNet, self).__init__()
        self.dataset = dataset
        self.finetune_dataset = ft_dataset
        self.pems04_adj = adj_pems04
        self.pems07_adj = adj_pems07
        self.pems08_adj = adj_pems08
        self.batch_size = batch_size
        self.hidden_dim = hidden_dim
        self.encode_dim = encode_dim
        self.device = device

        self.pems04_featExtractor = Extractor_N2V(input_dim, hidden_dim, encode_dim, device, batch_size, etype).to(device)
        self.pems07_featExtractor = Extractor_N2V(input_dim, hidden_dim, encode_dim, device, batch_size, etype).to(device)
        self.pems08_featExtractor = Extractor_N2V(input_dim, hidden_dim, encode_dim, device, batch_size, etype).to(device)
        self.shared_pems04_featExtractor = Extractor_N2V(input_dim, hidden_dim, encode_dim, device, batch_size, etype).to(device)
        self.shared_pems07_featExtractor = Extractor_N2V(input_dim, hidden_dim, encode_dim, device, batch_size, etype).to(device)
        self.shared_pems08_featExtractor = Extractor_N2V(input_dim, hidden_dim, encode_dim, device, batch_size, etype).to(device)

        self.speed_predictor = VGRU_FEAT(hidden_dim=hidden_dim, output_dim=pre_len, encode_dim=encode_dim).to(device)
        self.pems04_linear = nn.Linear(hidden_dim, pre_len, )
        self.pems07_linear = nn.Linear(hidden_dim, pre_len, )
        self.pems08_linear = nn.Linear(hidden_dim, pre_len, )

        self.weight_feat_private = nn.Parameter(torch.tensor([1.0]).to(self.device))
        self.weight_feat_shared = nn.Parameter(torch.tensor([0.0]).to(self.device))
        self.private_pems04_linear = nn.Linear(hidden_dim, hidden_dim, )
        self.private_pems07_linear = nn.Linear(hidden_dim, hidden_dim, )
        self.private_pems08_linear = nn.Linear(hidden_dim, hidden_dim, )
        self.shared_pems04_linear = nn.Linear(hidden_dim, hidden_dim, )
        self.shared_pems07_linear = nn.Linear(hidden_dim, hidden_dim, )
        self.shared_pems08_linear = nn.Linear(hidden_dim, hidden_dim, )
        self.combine_pems04_linear = nn.Linear(hidden_dim, hidden_dim, )
        self.combine_pems07_linear = nn.Linear(hidden_dim, hidden_dim, )
        self.combine_pems08_linear = nn.Linear(hidden_dim, hidden_dim, )

    def forward(self, vec_pems04, vec_pems07, vec_pems08, feat, eval):
        if self.dataset != self.finetune_dataset:
            if not eval:
                shared_pems04_feat = self.shared_pems04_featExtractor(vec_pems04, self.pems04_adj).to(self.device)
                shared_pems07_feat = self.shared_pems07_featExtractor(vec_pems07, self.pems07_adj).to(self.device)
                shared_pems08_feat = self.shared_pems08_featExtractor(vec_pems08, self.pems08_adj).to(self.device)
            else:
                if self.dataset == '4':
                    shared_pems04_feat = self.shared_pems04_featExtractor(vec_pems04, self.pems04_adj).to(self.device)
                elif self.dataset == '7':
                    shared_pems07_feat = self.shared_pems07_featExtractor(vec_pems07, self.pems07_adj).to(self.device)
                elif self.dataset == '8':
                    shared_pems08_feat = self.shared_pems08_featExtractor(vec_pems08, self.pems08_adj).to(self.device)

            if self.dataset == '4':
                h_pems04 = shared_pems04_feat.expand(self.batch_size, self.pems04_adj.shape[0], self.encode_dim)
                pred = self.speed_predictor(feat, h_pems04)
                pred = self.pems04_linear(pred)
                pred = pred.reshape((self.batch_size, self.pems04_adj.shape[0], -1))
            elif self.dataset == '7':
                h_pems07 = shared_pems07_feat.expand(self.batch_size, self.pems07_adj.shape[0], self.encode_dim)
                pred = self.speed_predictor(feat, h_pems07)
                pred = self.pems07_linear(pred)
                pred = pred.reshape((self.batch_size, self.pems07_adj.shape[0], -1))
            elif self.dataset == '8':
                h_pems08 = shared_pems08_feat.expand(self.batch_size, self.pems08_adj.shape[0], self.encode_dim)
                pred = self.speed_predictor(feat, h_pems08)
                pred = self.pems08_linear(pred)
                pred = pred.reshape((self.batch_size, self.pems08_adj.shape[0], -1))

            if not eval:
                return pred, shared_pems04_feat, shared_pems07_feat, shared_pems08_feat
            else:
                return pred
        else:
            if self.dataset == '4':
                shared_pems04_feat = self.shared_pems04_featExtractor(vec_pems04, self.pems04_adj).to(self.device)
                pems04_feat = self.pems04_featExtractor(vec_pems04, self.pems04_adj).to(self.device)
                pems04_feat = self.combine_pems04_linear(self.private_pems04_linear(pems04_feat) + self.shared_pems04_linear(shared_pems04_feat))
                h_pems04 = pems04_feat.expand(self.batch_size, self.pems04_adj.shape[0], self.encode_dim)
                pred = self.speed_predictor(feat, h_pems04)
                pred = self.pems04_linear(pred)
                pred = pred.reshape((self.batch_size, self.pems04_adj.shape[0], -1))
            elif self.dataset == '7':
                shared_pems07_feat = self.shared_pems07_featExtractor(vec_pems07, self.pems07_adj).to(self.device)
                pems07_feat = self.pems07_featExtractor(vec_pems07, self.pems07_adj).to(self.device)
                pems07_feat = self.combine_pems07_linear(self.private_pems07_linear(pems07_feat) + self.shared_pems07_linear(shared_pems07_feat))
                h_pems07 = pems07_feat.expand(self.batch_size, self.pems07_adj.shape[0], self.encode_dim)
                pred = self.speed_predictor(feat, h_pems07)
                pred = self.pems07_linear(pred)
                pred = pred.reshape((self.batch_size, self.pems07_adj.shape[0], -1))
            elif self.dataset == '8':
                shared_pems08_feat = self.shared_pems08_featExtractor(vec_pems08, self.pems08_adj).to(self.device)
                pems08_feat = self.pems08_featExtractor(vec_pems08, self.pems08_adj).to(self.device)
                pems08_feat = self.combine_pems08_linear(self.private_pems08_linear(pems08_feat) + self.shared_pems08_linear(shared_pems08_feat))
                h_pems08 = pems08_feat.expand(self.batch_size, self.pems08_adj.shape[0], self.encode_dim)
                pred = self.speed_predictor(feat, h_pems08)
                pred = self.pems08_linear(pred)
                pred = pred.reshape((self.batch_size, self.pems08_adj.shape[0], -1))

            return pred
