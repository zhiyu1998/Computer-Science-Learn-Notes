import torch
from load_data import data_loader
import torch.utils.data as data
import torch.nn as nn
from gan_model import Generator, Discriminator
import logging

class Trainer(object):
    def __init__(self, opt):

        self.opt = opt

        self.generator = data.DataLoader(data_loader(opt), batch_size=opt['batch_size'], shuffle=True)

        # model
        self.G = Generator(opt)
        self.D = Discriminator(opt)

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

    def train(self):
    
        self.G.train()
        self.D.train()
        for e in range(1, self.opt['epoch']+1):
            for step, ((recent_data, trend_data, time_feature), sub_graph, real_data, _, _) in enumerate(self.generator):
                """
                recent_data: (batch_size, time, node_num, num_feature)
                trend_data: (batch_size, time, num_feature)
                real_data: (batch_size, num_adj, num_feature)
                """

                valid = torch.zeros((real_data.shape[0], 1), dtype=torch.float)
                fake = torch.ones((real_data.shape[0], 1), dtype=torch.float)

                if self.opt['cuda']:
                    recent_data, trend_data, real_data, sub_graph, time_feature, valid, fake = \
                        recent_data.cuda(), trend_data.cuda(), real_data.cuda(), sub_graph.cuda(), time_feature.cuda(), valid.cuda(), fake.cuda()

                # ---------------------
                #  Train Discriminator
                # ---------------------
                self.D_optim.zero_grad()
                real_sequence = torch.cat([recent_data, real_data.unsqueeze(1)], dim=1)  # (batch_size, time, num_adj, input_size)
                fake_data = self.G(recent_data, trend_data, sub_graph, time_feature)

                fake_sequence = torch.cat([recent_data, fake_data.unsqueeze(1)], dim=1)

                real_score_D = self.D(real_sequence, sub_graph, trend_data)
                fake_score_D = self.D(fake_sequence, sub_graph, trend_data)

                real_loss = self.D_loss(real_score_D, valid)
                fake_loss = self.D_loss(fake_score_D, fake)
                D_total = (real_loss + fake_loss) / 2

                D_total.backward(retain_graph=True)
                self.D_optim.step()

                # -----------------
                #  Train Generator
                # -----------------
                self.G_optim.zero_grad()
                fake_data = self.G(recent_data, trend_data, sub_graph, time_feature)

                mse_loss = self.G_loss(fake_data, real_data)
                fake_sequence = torch.cat([recent_data, fake_data.unsqueeze(1)], dim=1)
                        
                fake_score = self.D(fake_sequence, sub_graph, trend_data)

                binary_loss = self.D_loss(fake_score, valid)
                G_total = self.opt['lambda_G'] * mse_loss + binary_loss

                G_total.backward()
                self.G_optim.step()
                
                if step % 100 == 0:
                    count = 0
                    for score in real_score_D:
                        if torch.mean(score) < 0.5:
                            count += 1
                    for score in fake_score_D:
                        if torch.mean(score) > 0.5:
                            count += 1

                    acc = count / (self.opt['batch_size'] * 2)
                    logging.info("epoch:%d step:%d [D loss: %f D acc: %.2f] [G mse: %f G binary %f]" % (e, step, D_total.cpu(), acc * 100, mse_loss, binary_loss))

            torch.save(self.G, self.opt['save_path'] + 'G_' + str(e) + '.pth')
            torch.save(self.D, self.opt['save_path'] + 'D_' + str(e) + '.pth')