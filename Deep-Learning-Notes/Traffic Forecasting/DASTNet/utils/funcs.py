import torch
import numpy as np
from .data import MyDataLoader

class StandardScaler:
    """
    Standard the input
    """
    def __init__(self, mean, std):
        self.mean = mean
        self.std = std

    def transform(self, data):
        return (data - self.mean) / self.std

    def inverse_transform(self, data):
        return (data * self.std) + self.mean


def load_all_adj(device):

    adj_pems04 = get_adjacency_matrix(distance_df_filename="./data/PEMS04/PEMS04.csv", num_of_vertices=307)
    adj_pems07 = get_adjacency_matrix(distance_df_filename="./data/PEMS07/PEMS07.csv", num_of_vertices=883)
    adj_pems08 = get_adjacency_matrix(distance_df_filename="./data/PEMS08/PEMS08.csv", num_of_vertices=170)

    return torch.tensor(adj_pems04).to(device), torch.tensor(adj_pems07).to(device), torch.tensor(adj_pems08).to(device)


def load_data(args, scaler=None, visualize=False, distribution=False):
    DATA_PATHS = {
        "4": {"feat": "./data/PEMS04/PEMS04.npz", "adj": "./data/PEMS04/PEMS04.csv"},
        "7": {"feat": "./data/PEMS07/PEMS07.npz", "adj": "./data/PEMS07/PEMS07.csv"},
        "8": {"feat": "./data/PEMS08/PEMS08.npz", "adj": "./data/PEMS08/PEMS08.csv"},
    }
    time = False

    if args.dataset == '4':
        feat_dir = DATA_PATHS['4']['feat']
        adj_dir = DATA_PATHS['4']['adj']
        num_of_vertices = 307

    elif args.dataset == '7':
        feat_dir = DATA_PATHS['7']['feat']
        adj_dir = DATA_PATHS['7']['adj']
        num_of_vertices = 883

    elif args.dataset == '8':
        feat_dir = DATA_PATHS['8']['feat']
        adj_dir = DATA_PATHS['8']['adj']
        num_of_vertices = 170

    train_X, train_Y, val_X, val_Y, test_X, test_Y, max_speed, scaler = load_graphdata_channel1(args, feat_dir, time, scaler, visualize=visualize)
    train_dataloader = MyDataLoader(torch.FloatTensor(train_X), torch.FloatTensor(train_Y),
                                    batch_size=args.batch_size)
    val_dataloader = MyDataLoader(torch.FloatTensor(val_X), torch.FloatTensor(val_Y), batch_size=args.batch_size)
    test_dataloader = MyDataLoader(torch.FloatTensor(test_X), torch.FloatTensor(test_Y), batch_size=args.batch_size)
    adj = get_adjacency_matrix(distance_df_filename=adj_dir, num_of_vertices=num_of_vertices)

    return train_dataloader, val_dataloader, test_dataloader, torch.tensor(adj), max_speed, scaler

def get_adjacency_matrix(distance_df_filename, num_of_vertices,
                         type_='connectivity', id_filename=None):
    '''
    Parameters
    ----------
    distance_df_filename: str, path of the csv file contains edges information
    num_of_vertices: int, the number of vertices
    type_: str, {connectivity, distance}
    Returns
    ----------
    A: np.ndarray, adjacency matrix
    '''
    import csv

    A = np.zeros((int(num_of_vertices), int(num_of_vertices)),
                 dtype=np.float32)

    if id_filename:
        with open(id_filename, 'r') as f:
            id_dict = {int(i): idx
                       for idx, i in enumerate(f.read().strip().split('\n'))}
        with open(distance_df_filename, 'r') as f:
            f.readline()
            reader = csv.reader(f)
            for row in reader:
                if len(row) != 3:
                    continue
                i, j, distance = int(row[0]), int(row[1]), float(row[2])
                A[id_dict[i], id_dict[j]] = 1
                A[id_dict[j], id_dict[i]] = 1
        return A

    # Fills cells in the matrix with distances.
    with open(distance_df_filename, 'r') as f:
        f.readline()
        reader = csv.reader(f)
        for row in reader:
            if len(row) != 3:
                continue
            i, j, distance = int(row[0]), int(row[1]), float(row[2])
            if type_ == 'connectivity':
                A[i, j] = 1
                A[j, i] = 1
            elif type == 'distance':
                A[i, j] = 1 / distance
                A[j, i] = 1 / distance
            else:
                raise ValueError("type_ error, must be "
                                 "connectivity or distance!")
    return A

def load_distribution(feat_dir):
    file_data = np.load(feat_dir)
    data = file_data['data']
    where_are_nans = np.isnan(data)
    data[where_are_nans] = 0
    where_are_nans = (data != data)
    data[where_are_nans] = 0
    data = data[:, :, 0]  # flow only
    data = np.array(data)

    return data

def load_graphdata_channel1(args, feat_dir, time, scaler=None, visualize=False):
    """
        dir: ./data/PEMS04/PEMS04.npz, shape: (16992, 307, 3) 59 days, 2018, 1.1 - 2.28 , [flow, occupy, speed]  24%
        dir: ./data/PEMS07/PEMS07.npz, shape: (28224, 883, 1) 98 days, 2017, 5.1 - 8.31 , [flow]                 14%
        dir: ./data/PEMS08/PEMS08.npz, shape: (17856, 170, 3) 62 days, 2016, 7.1 - 8.31 , [flow, occupy, speed]  23%
    """
    file_data = np.load(feat_dir)
    data = file_data['data']
    where_are_nans = np.isnan(data)
    data[where_are_nans] = 0
    where_are_nans = (data != data)
    data[where_are_nans] = 0
    data = data[:, :, 0]  # flow only

    if time:
        num_data, num_sensor = data.shape
        data = np.expand_dims(data, axis=-1)
        data = data.tolist()

        for i in range(num_data):
            time = (i % 288) / 288
            for j in range(num_sensor):
                data[i][j].append(time)

        data = np.array(data)

    max_val = np.max(data)
    time_len = data.shape[0]
    seq_len = args.seq_len
    pre_len = args.pre_len
    split_ratio = args.split_ratio
    train_size = int(time_len * split_ratio)
    val_size = int(time_len * (1 - split_ratio) / 3)
    train_data = data[:train_size]
    val_data = data[train_size:train_size + val_size]
    test_data = data[train_size + val_size:time_len]

    if args.labelrate != 100:
        import random
        new_train_size = int(train_size * args.labelrate / 100)
        start = random.randint(0, train_size - new_train_size - 1)
        train_data = train_data[start:start+new_train_size]

    train_X, train_Y, val_X, val_Y, test_X, test_Y = list(), list(), list(), list(), list(), list()

    for i in range(len(train_data) - seq_len - pre_len):
        train_X.append(np.array(train_data[i: i + seq_len]))
        train_Y.append(np.array(train_data[i + seq_len: i + seq_len + pre_len]))
    for i in range(len(val_data) - seq_len - pre_len):
        val_X.append(np.array(val_data[i: i + seq_len]))
        val_Y.append(np.array(val_data[i + seq_len: i + seq_len + pre_len]))
    for i in range(len(test_data) - seq_len - pre_len):
        test_X.append(np.array(test_data[i: i + seq_len]))
        test_Y.append(np.array(test_data[i + seq_len: i + seq_len + pre_len]))

    if visualize:
        test_X = test_X[-288:]
        test_Y = test_Y[-288:]

    if args.labelrate != 0:
        train_X = np.array(train_X)
        train_Y = np.array(train_Y)
    val_X = np.array(val_X)
    val_Y = np.array(val_Y)
    test_X = np.array(test_X)
    test_Y = np.array(test_Y)

    if args.labelrate != 0:
        max_xtrain = np.max(train_X)
        max_ytrain = np.max(train_Y)
    max_xval = np.max(val_X)
    max_yval = np.max(val_Y)
    max_xtest = np.max(test_X)
    max_ytest = np.max(test_Y)

    if args.labelrate != 0:
        min_xtrain = np.min(train_X)
        min_ytrain = np.min(train_Y)
    min_xval = np.min(val_X)
    min_yval = np.min(val_Y)
    min_xtest = np.min(test_X)
    min_ytest = np.min(test_Y)

    if args.labelrate != 0:
        max_speed = max(max_xtrain, max_ytrain, max_xval, max_yval, max_xtest, max_ytest)
        min_speed = min(min_xtrain, min_ytrain, min_xval, min_yval, min_xtest, min_ytest)

        # scaler = StandardScaler(mean=train_X[..., 0].mean(), std=train_X[..., 0].std())
        scaler = StandardScaler(mean=train_X.mean(), std=train_X.std())

        train_X = scaler.transform(train_X)
        train_Y = scaler.transform(train_Y)
    else:
        max_speed = max(max_xval, max_yval, max_xtest, max_ytest)
        min_speed = min(min_xval, min_yval, min_xtest, min_ytest)

    val_X = scaler.transform(val_X)
    val_Y = scaler.transform(val_Y)
    test_X = scaler.transform(test_X)
    test_Y = scaler.transform(test_Y)

    if args.labelrate != 0:
        max_xtrain = np.max(train_X)
        max_ytrain = np.max(train_Y)
    max_xval = np.max(val_X)
    max_yval = np.max(val_Y)
    max_xtest = np.max(test_X)
    max_ytest = np.max(test_Y)

    if args.labelrate != 0:
        min_xtrain = np.min(train_X)
        min_ytrain = np.min(train_Y)
    min_xval = np.min(val_X)
    min_yval = np.min(val_Y)
    min_xtest = np.min(test_X)
    min_ytest = np.min(test_Y)

    if args.labelrate != 0:
        max_speed = max(max_xtrain, max_ytrain, max_xval, max_yval, max_xtest, max_ytest)
        min_speed = min(min_xtrain, min_ytrain, min_xval, min_yval, min_xtest, min_ytest)

    else:
        max_speed = max(max_xval, max_yval, max_xtest, max_ytest)
        min_speed = min(min_xval, min_yval, min_xtest, min_ytest)

    return train_X, train_Y, val_X, val_Y, test_X, test_Y, max_val, scaler


def masked_loss(y_pred, y_true):
    mask_true = (y_true > 0.01).float()
    mask_pred = (y_pred > 0.01).float()
    mask = torch.mul(mask_true, mask_pred)
    mask /= mask.mean()
    mae_loss = torch.abs(y_pred - y_true)
    mse_loss = torch.square(y_pred - y_true)
    mape_loss = mae_loss / y_true
    mae_loss = mae_loss * mask
    mse_loss = mse_loss * mask
    mape_loss = mape_loss * mask
    mae_loss[mae_loss != mae_loss] = 0
    mse_loss[mse_loss != mse_loss] = 0
    mape_loss[mape_loss != mape_loss] = 0

    return mae_loss.mean(), torch.sqrt(mse_loss.mean()), mape_loss.mean()