import torch
from load_data import data_loader
import torch.utils.data as data
import torch.nn as nn
import numpy as np
import logging

class Tester(object):
    def __init__(self, opt):

        self.opt = opt

        self.loader = data_loader(opt)
        self.generator = data.DataLoader(self.loader, batch_size=opt['batch_size'], shuffle=True, drop_last=False)

        # model
        self.G = torch.load(self.opt['save_path'] + 'G_' + str(self.opt['epoch']) + '.pth')
        self.D = torch.load(self.opt['save_path'] + 'D_' + str(self.opt['epoch']) + '.pth')

        # loss function
        self.G_loss = nn.MSELoss()
        self.D_loss = nn.BCELoss()

        if opt['cuda']:
            self.G = self.G.cuda()
            self.D = self.D.cuda()
            self.G_loss = self.G_loss.cuda()
            self.D_loss = self.D_loss.cuda()

        # Optimizer
        self.G_optim = torch.optim.Adam(self.G.parameters(), lr=opt['lr'])
        self.D_optim = torch.optim.Adam(self.D.parameters(), lr=opt['lr'])

    def test(self):

        self.G.eval()
        self.D.eval()
        result = torch.zeros((self.loader.time_num, self.loader.node_num, 3))
        for step, ((recent_data, trend_data, time_feature), sub_graph, real_data, index_t, index_r) in enumerate(
                self.generator):
            """
            recent_data: (batch_size, time, node_num, num_feature)
            trend_data: (batch_size, time, num_feature)
            real_data: (batch_size, num_adj, num_feature)
            """
            if self.opt['cuda']:
                recent_data, trend_data, real_data, sub_graph, time_feature = \
                    recent_data.cuda(), trend_data.cuda(), real_data.cuda(), sub_graph.cuda(), time_feature.cuda()

            real_sequence = torch.cat([recent_data, real_data.unsqueeze(1)], dim=1)  # (batch_size, time, num_adj, input_size)
            fake_data = self.G(recent_data, trend_data, sub_graph, time_feature)

            fake_sequence = torch.cat([recent_data, fake_data.unsqueeze(1)], dim=1)
            mse_loss = torch.pow(fake_data - real_data, 2)

            real_score_D = self.D(real_sequence, sub_graph, trend_data)
            fake_score_D = self.D(fake_sequence, sub_graph, trend_data)

            batch_size = recent_data.shape[0]
            for b in range(batch_size):
                result[index_t[b].item(), index_r[b].item(), 0] = torch.mean(mse_loss[b, ]).item()
                result[index_t[b].item(), index_r[b].item(), 1] = real_score_D[b].item()
                result[index_t[b].item(), index_r[b].item(), 2] = fake_score_D[b].item()

            if step % 100 == 0:
                logging.info("step:%d [G mse: %f]" % (step, torch.mean(mse_loss)))

        np.save(self.opt['result_path'] + 'result' + '.npy', result.cpu().numpy())