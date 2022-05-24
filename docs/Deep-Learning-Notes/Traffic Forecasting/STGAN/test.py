import pandas as pd
import numpy as np

# 先用pandas读入csv
data = pd.read_csv("nyc/pure_Four.csv")
# 再使用numpy保存为npy
np.save("nyc/data/data.npy", data)