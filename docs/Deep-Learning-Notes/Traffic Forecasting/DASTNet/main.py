import argparse
import torch
import copy
import time
import os
import numpy as np
import torch.optim as optim
from utils.funcs import load_data, load_all_adj
from utils.funcs import masked_loss
from utils.vec import generate_vector
from model import DASTNet, Domain_classifier_DG

def arg_parse(parser):
    parser.add_argument('--dataset', type=str, default='4', help='dataset')
    parser.add_argument('--seed', type=int, default=0, help='seed')
    parser.add_argument('--division_seed', type=int, default=0, help='division_seed')
    parser.add_argument('--model', type=str, default='DASTNet', help='model')
    parser.add_argument('--labelrate', type=float, default=23, help='percent')
    parser.add_argument('--patience', type=int, default=200, help='patience')
    parser.add_argument("--hidden_dim", type=int, default=64)
    parser.add_argument("--vec_dim", type=int, default=64)
    parser.add_argument("--enc_dim", type=int, default=64)
    parser.add_argument("--walk_length", "--wl", type=int, default=8)
    parser.add_argument("--num_walks", type=int, default=200)
    parser.add_argument("--theta", type=float, default=1)
    parser.add_argument("--p", type=float, default=1)
    parser.add_argument("--q", type=float, default=1)
    parser.add_argument("--learning_rate", "--lr", type=float, default=1e-4)
    parser.add_argument("--epoch", type=int, default=10)
    parser.add_argument('--device', type=int, default=0, help='CUDA Device')
    parser.add_argument("--batch_size", type=int, default=64)
    parser.add_argument("--seq_len", type=int, default=12)
    parser.add_argument("--pre_len", type=int, default=3)
    parser.add_argument("--split_ratio", type=float, default=0.7)
    parser.add_argument("--alpha", type=float, default=0.1)
    parser.add_argument("--beta", type=float, default=0.2)
    parser.add_argument("--normalize", type=bool, default=True)
    parser.add_argument('--val', action='store_true', default=False, help='eval')
    parser.add_argument('--test', action='store_true', default=False, help='test')
    parser.add_argument('--train', action='store_true', default=False, help='train')
    parser.add_argument('--etype', type=str, default="gin", choices=["gin"], help='feature type')
    return parser.parse_args()


def train(dur, model, optimizer, total_step, start_step):
    t0 = time.time()
    train_mae, val_mae, train_rmse, val_rmse, train_acc = list(), list(), list(), list(), list()
    train_correct = 0

    model.train()
    if type == 'pretrain':
        domain_classifier.train()

    for i, (feat, label) in enumerate(train_dataloader.get_iterator()):
        Reverse = False
        if i > 0:
            if train_acc[-1] > 0.333333:
                Reverse = True
        p = float(i + start_step) / total_step
        constant = 2. / (1. + np.exp(-10 * p)) - 1

        feat = torch.FloatTensor(feat).to(device)
        label = torch.FloatTensor(label).to(device)
        if torch.sum(scaler.inverse_transform(label)) <= 0.001:
            continue

        optimizer.zero_grad()
        if args.model not in ['DCRNN', 'STGCN', 'HA']:
            if type == 'pretrain':
                pred, shared_pems04_feat, shared_pems07_feat, shared_pems08_feat = model(vec_pems04, vec_pems07, vec_pems08, feat, False)
            elif type == 'fine-tune':
                pred = model(vec_pems04, vec_pems07, vec_pems08, feat, False)

            pred = pred.transpose(1, 2).reshape((-1, feat.size(2)))
            label = label.reshape((-1, label.size(2)))

            if type == 'pretrain':
                pems04_pred = domain_classifier(shared_pems04_feat, constant, Reverse)
                pems07_pred = domain_classifier(shared_pems07_feat, constant, Reverse)
                pems08_pred = domain_classifier(shared_pems08_feat, constant, Reverse)

                pems04_label = 0 * torch.ones(pems04_pred.shape[0]).long().to(device)
                pems07_label = 1 * torch.ones(pems07_pred.shape[0]).long().to(device)
                pems08_label = 2 * torch.ones(pems08_pred.shape[0]).long().to(device)

                pems04_pred_label = pems04_pred.max(1, keepdim=True)[1]
                pems04_correct = pems04_pred_label.eq(pems04_label.view_as(pems04_pred_label)).sum()
                pems07_pred_label = pems07_pred.max(1, keepdim=True)[1]
                pems07_correct = pems07_pred_label.eq(pems07_label.view_as(pems07_pred_label)).sum()
                pems08_pred_label = pems08_pred.max(1, keepdim=True)[1]
                pems08_correct = pems08_pred_label.eq(pems08_label.view_as(pems08_pred_label)).sum()

                pems04_loss = domain_criterion(pems04_pred, pems04_label)
                pems07_loss = domain_criterion(pems07_pred, pems07_label)
                pems08_loss = domain_criterion(pems08_pred, pems08_label)

                domain_loss = pems04_loss + pems07_loss + pems08_loss

        if type == 'pretrain':
            train_correct = pems04_correct + pems07_correct + pems08_correct

        mae_train, rmse_train, mape_train = masked_loss(scaler.inverse_transform(pred), scaler.inverse_transform(label))

        if type == 'pretrain':
            loss = mae_train + args.beta * (args.theta * domain_loss)
        elif type == 'fine-tune':
            loss = mae_train

        loss.backward()
        optimizer.step()

        train_mae.append(mae_train.item())
        train_rmse.append(rmse_train.item())

        if type == 'pretrain':
            train_acc.append(train_correct.item() / 855)
        elif type == 'fine-tune':
            train_acc.append(0)

    if type == 'pretrain':
        domain_classifier.eval()
    model.eval()

    for i, (feat, label) in enumerate(val_dataloader.get_iterator()):
        feat = torch.FloatTensor(feat).to(device)
        label = torch.FloatTensor(label).to(device)
        if torch.sum(scaler.inverse_transform(label)) <= 0.001:
            continue
        pred = model(vec_pems04, vec_pems07, vec_pems08, feat, True)
        pred = pred.transpose(1, 2).reshape((-1, feat.size(2)))
        label = label.reshape((-1, label.size(2)))
        mae_val, rmse_val, mape_val = masked_loss(scaler.inverse_transform(pred), scaler.inverse_transform(label))
        val_mae.append(mae_val.item())
        val_rmse.append(rmse_val.item())

    test_mae, test_rmse, test_mape = test()
    dur.append(time.time() - t0)
    return np.mean(train_mae), np.mean(train_rmse), np.mean(val_mae), np.mean(val_rmse), test_mae, test_rmse, test_mape, np.mean(train_acc)


def test():
    if type == 'pretrain':
        domain_classifier.eval()
    model.eval()

    test_mape, test_rmse, test_mae = list(), list(), list()

    for i, (feat, label) in enumerate(test_dataloader.get_iterator()):
        feat = torch.FloatTensor(feat).to(device)
        label = torch.FloatTensor(label).to(device)

        if torch.sum(scaler.inverse_transform(label)) <= 0.001:
            continue

        pred = model(vec_pems04, vec_pems07, vec_pems08, feat, True)
        pred = pred.transpose(1, 2).reshape((-1, feat.size(2)))
        label = label.reshape((-1, label.size(2)))

        mae_test, rmse_test, mape_test = masked_loss(scaler.inverse_transform(pred), scaler.inverse_transform(label))

        test_mae.append(mae_test.item())
        test_rmse.append(rmse_test.item())
        test_mape.append(mape_test.item())

    test_rmse = np.mean(test_rmse)
    test_mae = np.mean(test_mae)
    test_mape = np.mean(test_mape)

    return test_mae, test_rmse, test_mape


def model_train(args, model, optimizer):
    dur = []
    epoch = 1
    best = 999999999999999
    acc = list()

    step_per_epoch = train_dataloader.get_num_batch()
    total_step = 200 * step_per_epoch

    while epoch <= args.epoch:
        start_step = epoch * step_per_epoch
        if type == 'fine-tune' and epoch > 1000:
            args.val = True
        mae_train, rmse_train, mae_val, rmse_val, mae_test, rmse_test, mape_test, train_acc = train(dur, model, optimizer, total_step, start_step)
        print(f'Epoch {epoch} | acc_train: {train_acc: .4f} | mae_train: {mae_train: .4f} | rmse_train: {rmse_train: .4f} | mae_val: {mae_val: .4f} | rmse_val: {rmse_val: .4f} | mae_test: {mae_test: .4f} | rmse_test: {rmse_test: .4f} | mape_test: {mape_test: .4f} | Time(s) {dur[-1]: .4f}')
        epoch += 1
        acc.append(train_acc)
        if mae_val <= best:
            if type == 'fine-tune' and mae_val > 0.001:
                best = mae_val
                state = dict([('model', copy.deepcopy(model.state_dict())),
                              ('optim', copy.deepcopy(optimizer.state_dict())),
                              ('domain_classifier', copy.deepcopy(domain_classifier.state_dict()))])
                cnt = 0
            elif type == 'pretrain':
                best = mae_val
                state = dict([('model', copy.deepcopy(model.state_dict())),
                              ('optim', copy.deepcopy(optimizer.state_dict())),
                              ('domain_classifier', copy.deepcopy(domain_classifier.state_dict()))])
                cnt = 0
        else:
            cnt += 1
        if cnt == args.patience or epoch > args.epoch:
            print(f'Stop!!')
            print(f'Avg acc: {np.mean(acc)}')
            break
    print("Optimization Finished!")
    return state

args = arg_parse(argparse.ArgumentParser())
device = torch.device("cuda:"+str(args.device) if torch.cuda.is_available() else "cpu")
print(f'device: {device}')

torch.manual_seed(args.seed)
np.random.seed(args.seed)

if args.labelrate > 100:
    args.labelrate = 100

adj_pems04, adj_pems07, adj_pems08 = load_all_adj(device)
vec_pems04 = vec_pems07 = vec_pems08 = None, None, None

cur_dir = os.getcwd()
if cur_dir[-2:] == 'sh':
    cur_dir = cur_dir[:-2]

pems04_emb_path = os.path.join('{}'.format(cur_dir), 'embeddings', 'node2vec', 'pems04',
                           '{}_vecdim.pkl'.format(args.vec_dim))
pems07_emb_path = os.path.join('{}'.format(cur_dir), 'embeddings', 'node2vec', 'pems07',
                            '{}_vecdim.pkl'.format(args.vec_dim))
pems08_emb_path = os.path.join('{}'.format(cur_dir), 'embeddings', 'node2vec', 'pems08',
                             '{}_vecdim.pkl'.format(args.vec_dim))

if os.path.exists(pems04_emb_path):
    print(f'Loading pems04 embedding...')
    vec_pems04 = torch.load(pems04_emb_path, map_location='cpu')
    vec_pems04 = vec_pems04.to(device)
else:
    print(f'Generating pems04 embedding...')
    args.dataset = '4'
    vec_pems04, _ = generate_vector(args)
    vec_pems04 = vec_pems04.to(device)
    print(f'Saving pems04 embedding...')
    torch.save(vec_pems04.cpu(), pems04_emb_path)

if os.path.exists(pems07_emb_path):
    print(f'Loading pems07 embedding...')
    vec_pems07 = torch.load(pems07_emb_path, map_location='cpu')
    vec_pems07 = vec_pems07.to(device)
else:
    print(f'Generating pems07 embedding...')
    args.dataset = '7'
    vec_pems07, _ = generate_vector(args)
    vec_pems07 = vec_pems07.to(device)
    print(f'Saving pems07 embedding...')
    torch.save(vec_pems07.cpu(), pems07_emb_path)

if os.path.exists(pems08_emb_path):
    print(f'Loading pems08 embedding...')
    vec_pems08 = torch.load(pems08_emb_path, map_location='cpu')
    vec_pems08 = vec_pems08.to(device)
else:
    print(f'Generating pems08 embedding...')
    args.dataset = '8'
    vec_pems08, _ = generate_vector(args)
    vec_pems08 = vec_pems08.to(device)
    print(f'Saving pems08 embedding...')
    torch.save(vec_pems08.cpu(), pems08_emb_path)
print(f'Successfully load embeddings, 4: {vec_pems04.shape}, 7: {vec_pems07.shape}, 8: {vec_pems08.shape}')

domain_criterion = torch.nn.NLLLoss()
domain_classifier = Domain_classifier_DG(num_class=3, encode_dim=args.enc_dim)

domain_classifier = domain_classifier.to(device)
state = g = None, None

batch_seen = 0
cur_dir = os.getcwd()
if cur_dir[-2:] == 'sh':
    cur_dir = cur_dir[:-2]
assert args.model in ["DASTNet"]

bak_epoch = args.epoch
bak_val = args.val
bak_test = args.test
type = 'pretrain'
pretrain_model_path = os.path.join('{}'.format(cur_dir), 'pretrained', 'transfer_models',
                                   '{}'.format(args.dataset), '{}_prelen'.format(args.pre_len),
                                   'flow_model4_{}_epoch_{}.pkl'.format(args.model, args.epoch))
if os.path.exists(pretrain_model_path):
    print(f'Loading pretrained model at {pretrain_model_path}')
    state = torch.load(pretrain_model_path, map_location='cpu')
else:
    print(f'No existing pretrained model at {pretrain_model_path}')
    args.val = args.test = False
    datasets = ["4", "7", "8"]
    dataset_bak = args.dataset
    labelrate_bak = args.labelrate
    args.labelrate = 100
    dataset_count = 0

    for dataset in [item for item in datasets if item not in [dataset_bak]]:
        dataset_count = dataset_count + 1

        print(f'\n\n****************************************************************************************************************')
        print(f'dataset: {dataset}, model: {args.model}, pre_len: {args.pre_len}, labelrate: {args.labelrate}')
        print(f'****************************************************************************************************************\n\n')

        if dataset == '4':
            g = vec_pems04
        elif dataset == '7':
            g = vec_pems07
        elif dataset == '8':
            g = vec_pems08

        args.dataset = dataset
        train_dataloader, val_dataloader, test_dataloader, adj, max_speed, scaler = load_data(args)
        model = DASTNet(input_dim=args.vec_dim, hidden_dim=args.hidden_dim, encode_dim=args.enc_dim,
                            device=device, batch_size=args.batch_size, etype=args.etype, pre_len=args.pre_len,
                            dataset=args.dataset, ft_dataset=dataset_bak,
                            adj_pems04=adj_pems04, adj_pems07=adj_pems07, adj_pems08=adj_pems08).to(device)
        optimizer = optim.SGD([{'params': model.parameters()},
                               {'params': domain_classifier.parameters()}], lr=args.learning_rate, momentum=0.8)

        if dataset_count != 1:
            model.load_state_dict(state['model'])
            optimizer.load_state_dict(state['optim'])

        state = model_train(args, model, optimizer)

    print(f'Saving model to {pretrain_model_path} ...')
    torch.save(state, pretrain_model_path)
    args.dataset = dataset_bak
    args.labelrate = labelrate_bak
    args.val = bak_val
    args.test = bak_test

type = 'fine-tune'
args.epoch = 2000

print(f'\n\n*******************************************************************************************')
print(f'dataset: {args.dataset}, model: {args.model}, pre_len: {args.pre_len}, labelrate: {args.labelrate}, seed: {args.division_seed}')
print(f'*******************************************************************************************\n\n')

if args.dataset == '4':
    g = vec_pems04
elif args.dataset == '7':
    g = vec_pems07
elif args.dataset == '8':
    g = vec_pems08

train_dataloader, val_dataloader, test_dataloader, adj, max_speed, scaler = load_data(args)
model = DASTNet(input_dim=args.vec_dim, hidden_dim=args.hidden_dim, encode_dim=args.enc_dim,
                    device=device, batch_size=args.batch_size, etype=args.etype, pre_len=args.pre_len,
                    dataset=args.dataset, ft_dataset=args.dataset,
                    adj_pems04=adj_pems04, adj_pems07=adj_pems07, adj_pems08=adj_pems08).to(device)
optimizer = optim.SGD([{'params': model.parameters()},
                       {'params': domain_classifier.parameters()}], lr=args.learning_rate, momentum=0.8)
model.load_state_dict(state['model'])
optimizer.load_state_dict(state['optim'])

if args.labelrate != 0:
    test_state = model_train(args, model, optimizer)
    model.load_state_dict(test_state['model'])
    optimizer.load_state_dict(test_state['optim'])

test_mae, test_rmse, test_mape = test()
print(f'mae: {test_mae: .2f}, rmse: {test_rmse: .2f}, mape: {test_mape * 100: .2f}\n\n')