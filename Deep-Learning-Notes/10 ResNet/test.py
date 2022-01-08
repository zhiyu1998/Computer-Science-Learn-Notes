import os

data_root = os.path.abspath(os.path.join(os.getcwd(), '../'))
image_path = os.path.join(data_root, "datasets", "flower_data")
print(image_path)