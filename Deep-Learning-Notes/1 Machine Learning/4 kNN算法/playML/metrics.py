import numpy as np


def accuracy_score(y_test, y_predict):
    '''计算y_true和y_predict之间的准确率'''
    assert y_test.shape[0] == y_predict.shape[0], \
        "the size of y_true must be equal to the size of y_predict"

    return np.sum(y_test == y_predict) / len(y_test)