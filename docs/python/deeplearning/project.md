---
index: 1
title: 我的深度学习路径
---



## :checkered_flag: 前言

我的研究生期间（研究方向：异常检测）深度学习的读书/学习笔记，包含
* 图形分类（入门）
* 目标识别（纯属游戏向 :arrow_right: 自动瞄准）
* 异常检测（交通时序）



## :mountain_cableway: 路线推荐

机器学习  :arrow_right: 数据操作（推荐观看我的仓库：）  :arrow_right: 深度学习基础（推荐阅读pytorch版本《动手深度学习》：https://zh.d2l.ai/）  :arrow_right: 深度学习基础网络【分类】（推荐观看：https://space.bilibili.com/18161609/channel/series）  :arrow_right: 分支（看研究方向）:arrow_double_up:

> 注：个人建议《动手深度学习》不用读到基础网络（alexnet...）



## :bookmark_tabs: 推荐书籍和网址

* pytorch内功修炼（Pytorch中文百科） https://www.pytorch.wiki/
* 论文理论支撑 （神经网络与深度学习）：https://nndl.github.io/
* 语法精益（流畅的Pyhon）



## :pencil2: 论文推荐阅读

### 图像分类(Classification)

- LeNet [http://yann.lecun.com/exdb/lenet/index.html](http://yann.lecun.com/exdb/lenet/index.html)
- AlexNet [http://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks.pdf](http://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks.pdf)
- ZFNet(Visualizing and Understanding Convolutional Networks) [https://arxiv.org/abs/1311.2901](https://arxiv.org/abs/1311.2901)
- VGG [https://arxiv.org/abs/1409.1556](https://arxiv.org/abs/1409.1556)
- GoogLeNet, Inceptionv1(Going deeper with convolutions) [https://arxiv.org/abs/1409.4842](https://arxiv.org/abs/1409.4842)
- Batch Normalization [https://arxiv.org/abs/1502.03167](https://arxiv.org/abs/1502.03167)
- Inceptionv3(Rethinking the Inception Architecture for Computer Vision) [https://arxiv.org/abs/1512.00567](https://arxiv.org/abs/1512.00567)
- Inceptionv4, Inception-ResNet [https://arxiv.org/abs/1602.07261](https://arxiv.org/abs/1602.07261)
- Xception(Deep Learning with Depthwise Separable Convolutions) [https://arxiv.org/abs/1610.02357](https://arxiv.org/abs/1610.02357)
- ResNet [https://arxiv.org/abs/1512.03385](https://arxiv.org/abs/1512.03385)
- ResNeXt [https://arxiv.org/abs/1611.05431](https://arxiv.org/abs/1611.05431)
- DenseNet [https://arxiv.org/abs/1608.06993](https://arxiv.org/abs/1608.06993)
- NASNet-A(Learning Transferable Architectures for Scalable Image Recognition) [https://arxiv.org/abs/1707.07012](https://arxiv.org/abs/1707.07012)
- SENet(Squeeze-and-Excitation Networks) [https://arxiv.org/abs/1709.01507](https://arxiv.org/abs/1709.01507)
- MobileNet(v1) [https://arxiv.org/abs/1704.04861](https://arxiv.org/abs/1704.04861)
- MobileNet(v2) [https://arxiv.org/abs/1801.04381](https://arxiv.org/abs/1801.04381)
- MobileNet(v3) [https://arxiv.org/abs/1905.02244](https://arxiv.org/abs/1905.02244)
- ShuffleNet(v1) [https://arxiv.org/abs/1707.01083](https://arxiv.org/abs/1707.01083)
- ShuffleNet(v2) [https://arxiv.org/abs/1807.11164](https://arxiv.org/abs/1807.11164)
- Bag of Tricks for Image Classification with Convolutional Neural Networks [https://arxiv.org/abs/1812.01187](https://arxiv.org/abs/1812.01187)
- EfficientNet(v1) [https://arxiv.org/abs/1905.11946](https://arxiv.org/abs/1905.11946)
- EfficientNet(v2) [https://arxiv.org/abs/2104.00298](https://arxiv.org/abs/2104.00298)
- CSPNet [https://arxiv.org/abs/1911.11929](https://arxiv.org/abs/1911.11929)
- RegNet [https://arxiv.org/abs/2003.13678](https://arxiv.org/abs/2003.13678)
- NFNets(High-Performance Large-Scale Image Recognition Without Normalization) [https://arxiv.org/abs/2102.06171](https://arxiv.org/abs/2102.06171)
- Attention Is All You Need [https://arxiv.org/abs/1706.03762](https://arxiv.org/abs/1706.03762)
- Vision Transformer [https://arxiv.org/abs/2010.11929](https://arxiv.org/abs/2010.11929)
- DeiT(Training data-efficient image transformers ) [https://arxiv.org/abs/2012.12877](https://arxiv.org/abs/2012.12877)
- Swin Transformer [https://arxiv.org/abs/2103.14030](https://arxiv.org/abs/2103.14030)
- Swin Transformer V2: Scaling Up Capacity and Resolution [https://arxiv.org/abs/2111.09883](https://arxiv.org/abs/2111.09883)
- BEiT: BERT Pre-Training of Image Transformers [https://arxiv.org/abs/2106.08254](https://arxiv.org/abs/2106.08254)
- MAE(Masked Autoencoders Are Scalable Vision Learners) [https://arxiv.org/abs/2111.06377](https://arxiv.org/abs/2111.06377)
- CoAtNet [https://arxiv.org/pdf/2106.04803v2.pdf](https://arxiv.org/pdf/2106.04803v2.pdf)



### 目标检测(Object Detection)

- R-CNN [https://arxiv.org/abs/1311.2524](https://arxiv.org/abs/1311.2524)
- Fast R-CNN [https://arxiv.org/abs/1504.08083](https://arxiv.org/abs/1504.08083)
- Faster R-CNN [https://arxiv.org/abs/1506.01497](https://arxiv.org/abs/1506.01497)
- Cascade R-CNN: Delving into High Quality Object Detection [https://arxiv.org/abs/1712.00726](https://arxiv.org/abs/1712.00726)
- Mask R-CNN [https://arxiv.org/abs/1703.06870](https://arxiv.org/abs/1703.06870)
- SSD [https://arxiv.org/abs/1512.02325](https://arxiv.org/abs/1512.02325)
- FPN(Feature Pyramid Networks for Object Detection) [https://arxiv.org/abs/1612.03144](https://arxiv.org/abs/1612.03144)
- RetinaNet(Focal Loss for Dense Object Detection) [https://arxiv.org/abs/1708.02002](https://arxiv.org/abs/1708.02002)
- Bag of Freebies for Training Object Detection Neural Networks [https://arxiv.org/abs/1902.04103](https://arxiv.org/abs/1902.04103)
- YOLOv1 [https://arxiv.org/abs/1506.02640](https://arxiv.org/abs/1506.02640)
- YOLOv2 [https://arxiv.org/abs/1612.08242](https://arxiv.org/abs/1612.08242)
- YOLOv3 [https://arxiv.org/abs/1804.02767](https://arxiv.org/abs/1804.02767)
- YOLOv4 [https://arxiv.org/abs/2004.10934](https://arxiv.org/abs/2004.10934)
- Scaled-YOLOv4 [https://arxiv.org/abs/2011.08036](https://arxiv.org/abs/2011.08036)
- PP-YOLO [https://arxiv.org/abs/2007.12099](https://arxiv.org/abs/2007.12099)
- PP-YOLOv2 [https://arxiv.org/abs/2104.10419](https://arxiv.org/abs/2104.10419)
- YOLOX [http://arxiv.org/abs/2107.08430](http://arxiv.org/abs/2107.08430)
- CornerNet [https://arxiv.org/abs/1808.01244](https://arxiv.org/abs/1808.01244)
- FCOS [https://arxiv.org/abs/1904.01355](https://arxiv.org/abs/1904.01355)
- CenterNet [https://arxiv.org/abs/1904.07850](https://arxiv.org/abs/1904.07850)
- Mask R-CNN https://arxiv.org/abs/1703.06870)



### 异常检测（Anomaly Detection）

- Anomaly Transformer [http://arxiv.org/abs/2110.02642](http://arxiv.org/abs/2110.02642)
- DL-Traff [http://arxiv.org/abs/2108.09091](http://arxiv.org/abs/2108.09091)
- Generative adversarial networks in time series: A survey and taxonomy [http://arxiv.org/abs/2107.11098](http://arxiv.org/abs/2107.11098)
- Learning Graph Neural Networks for Multivariate Time Series Anomaly Detection [http://arxiv.org/abs/2111.08082](http://arxiv.org/abs/2111.08082)
- Long-Range Transformers [http://arxiv.org/abs/2109.12218](http://arxiv.org/abs/2109.12218)
- Sig-Wasserstein GANs [http://arxiv.org/abs/2111.01207](http://arxiv.org/abs/2111.01207)



### Others

- Microsoft COCO: Common Objects in Context [https://arxiv.org/abs/1405.0312](https://arxiv.org/abs/1405.0312)
- The PASCALVisual Object Classes Challenge: A Retrospective [http://host.robots.ox.ac.uk/pascal/VOC/pubs/everingham15.pdf](http://host.robots.ox.ac.uk/pascal/VOC/pubs/everingham15.pdf)



## :surfer: 感谢

特别致谢以下仓库对于我学习的帮助：  
[ WZMIAOMIAO /
深度学习在图像处理中的应用教程](https://github.com/WZMIAOMIAO/deep-learning-for-image-processing)  
[《神经网络与深度学习》 邱锡鹏著](https://github.com/nndl/nndl.github.io)  
[ d2l-ai /《动手学深度学习》](https://github.com/d2l-ai/d2l-zh)
