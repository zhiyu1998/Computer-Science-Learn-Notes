import torch
from model import CoAtNet
from PIL import Image
from torchvision import transforms
import matplotlib.pyplot as plt
import json

from thop import profile

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

 
img_path_list = []
for i in range(1, 5):
    img_path_list.append('./pre_img/{}.jpg'.format(i))
img_list = []
for img_path in img_path_list:
    assert os.path.exists(img_path), "file: '{}' dose not exist.".format(img_path)
    img = Image.open(img_path)
    img = data_transform(img)
    img_list.append(img)

 
batch_img = torch.stack(img_list, dim=0)

try:
    json_file = open('./class_indices.json', 'r')
    class_indict = json.load(json_file)
except Exception as e:
    print(e)
    exit(-1)

model = vit_base_patch16_224_in21k(num_classes=5).to(device)

model_weight_path = './ViT-model-30.pth'
missing_keys, unexpected_keys = model.load_state_dict(torch.load(model_weight_path, map_location=device), strict=False)
model.eval()
with torch.no_grad():
     
    output = model(batch_img.to(device)).cpu()
    predict = torch.softmax(output, dim=1)
    probs, classes = torch.max(predict, dim=1)

    for idx, (pro, cla) in enumerate(zip(probs, classes)):
        print("image: {}  class: {}  prob: {:.3}".format(img_path_list[idx],
                                                         class_indict[str(cla.numpy())],
                                                         pro.numpy()))
flops, params = profile(model, inputs={batch_img})
print('FLOPs = ' + str(flops/1000**3) + 'G')
print('Params = ' + str(params/1000**2) + 'M')
plt.show()
