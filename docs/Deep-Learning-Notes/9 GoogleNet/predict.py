import torch
from model import GoogleNet
from PIL import Image
from torchvision import transforms
import matplotlib.pyplot as plt
import json

import os
os.environ['KMP_DUPLICATE_LIB_OK'] = 'TRUE'

device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")

data_transform = transforms.Compose(
    [
        transforms.Resize((224, 224)),
        transforms.ToTensor(),
        transforms.Normalize((0.5, 0.5, 0.5), (0.5, 0.5, 0.5))
    ]
)

# load image
img = Image.open('./2.jpg')
plt.imshow(img)
# [N, C, H, W]
img = data_transform(img)
# expend batch
# unsqueeze: Returns a new tensor with a dimension of size one inserted at the specified position.
img = torch.unsqueeze(img, dim=0)

try:
    json_file = open('./class_indices.json', 'r')
    class_indict = json.load(json_file)
except Exception as e:
    print(e)
    exit(-1)

model = GoogleNet(num_classes=5, aux_logits=False).to(device)

model_weight_path = './GoogleNet.pth'
missing_keys, unexpected_keys = model.load_state_dict(torch.load(model_weight_path, map_location=device), strict=False)
model.eval()
with torch.no_grad():
    # squeeze: Returns a tensor with all the dimensions of input of size 1 removed.
    output = torch.squeeze(model(img.to(device))).cpu()
    predict = torch.softmax(output, dim=0)
    # argmax: Returns the indices of the maximum value of all elements in the input tensor.
    predict_cla = torch.argmax(predict).numpy()
print(class_indict[str(predict_cla)], predict[predict_cla].item())
plt.show()
