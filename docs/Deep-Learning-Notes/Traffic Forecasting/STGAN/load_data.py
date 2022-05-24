import torch.utils.data as data
import torch
import numpy as np

class data_loader(data.Dataset):

    def __init__(self, opt):

        self.opt = opt

        data_path = opt['data_path'] + '/data.npy'     # traffic data
        feature_path = opt['data_path'] + '/time_features.txt'     # time feature
        graph_path = opt['data_path'] + '/node_subgraph.npy'     # (num_node, n, n), the subgraph of each node
        adj_path = opt['data_path'] + '/node_adjacent.txt'     # (num_node, n), the adjacent of each node

        self.data = torch.tensor(np.load(data_path), dtype=torch.float)
        self.time_features = torch.tensor(np.loadtxt(feature_path), dtype=torch.float)
        self.graph = torch.tensor(np.load(graph_path), dtype=torch.float)
        self.adjs = torch.tensor(np.loadtxt(adj_path), dtype=torch.int)
        print('traffic data: ', self.data.shape)

        # direction subgraph, no self connect
        self.T_recent = opt['recent_time'] * opt['timestamp']
        self.T_trend = opt['trend_time'] * opt['timestamp']
        if opt['isTrain']:
            self.start_time = self.T_trend
            self.time_num = opt['train_time'] - self.start_time
        else:
            self.start_time = opt['train_time']
            self.time_num = self.data.shape[0] - self.start_time

        self.input_size = self.data.shape[2] * self.data.shape[3]

        self.adj_num = self.adjs.shape[1]
        self.node_num = self.data.shape[1]

        # normalize
        self.normalize()
        self.weight()

        self.length = self.node_num * self.time_num

    def __getitem__(self, idx):

        index_t = idx // self.node_num + self.start_time
        index_r = idx % self.node_num

        # recent_data: (time, sub_graph, num_feature)
        recent_data = torch.zeros((self.T_recent, self.adj_num, self.input_size))
        real_data = torch.zeros((self.adj_num, self.input_size))

        # recent
        for i in range(self.adj_num):
            recent_data[:, i, :] = self.data[index_t - self.T_recent:index_t, self.adjs[index_r, i], :, :].view(
                self.T_recent, -1)
            real_data[i, :] = self.data[index_t, self.adjs[index_r, i], :, :].view(-1)

        # trend
        trend_data = self.data[index_t - self.T_trend:index_t, index_r, :].view(self.T_trend, -1)
        time_feature = self.time_features[index_t, ]
        subgraph = self.graph[index_r, ]
        subgraph = self.calculate_normalized_laplacian(subgraph)

        return (recent_data, trend_data, time_feature), subgraph, real_data, index_t - self.start_time, index_r

    def weight(self):
        # std
        dists = torch.tensor(np.loadtxt(self.opt['data_path'] + '/node_dist.txt'), dtype=torch.float)
        delta = torch.std(dists)
        self.graph = torch.exp(-np.divide(np.power(self.graph, 2), np.power(delta, 2)))

    def calculate_normalized_laplacian(self, adj):
        """
        # L = D^-1/2 (D-A) D^-1/2 = I - D^-1/2 A D^-1/2
        # D = diag(A 1)
        :param adj:
        :return:
        """
        # A = A + I
        adj += torch.eye(adj.shape[0])
        d_inv_sqrt = (torch.sum(adj, 1) + 1e-5) ** (-0.5)
        d_mat_inv_sqrt = torch.diag(d_inv_sqrt)

        normalized_laplacian = torch.mm(torch.mm(d_mat_inv_sqrt, adj), d_mat_inv_sqrt)

        return normalized_laplacian

    def normalize(self):

        max_source1 = torch.max(self.data[:self.opt['train_time'], :, :, 0])
        min_source1 = torch.min(self.data[:self.opt['train_time'], :, :, 0])
        max_source2 = torch.max(self.data[:self.opt['train_time'], :, :, 1])
        min_source2 = torch.min(self.data[:self.opt['train_time'], :, :, 1])

        self.data[:, :, :, 0] = self.max_min(self.data[:, :, :, 0], max_source1, min_source1)
        self.data[:, :, :, 1] = self.max_min(self.data[:, :, :, 1], max_source2, min_source2)

    def max_min(self, data, max_val, min_val):
        data = (data - min_val) / (max_val - min_val)
        data = data * 2 - 1

        return data

    def __len__(self):
        return self.length
