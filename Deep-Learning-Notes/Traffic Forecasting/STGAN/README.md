# Graph Convolutional Adversarial Networks for Spatio-Temporal Anomaly Detection

Two datasets are available at [Google Drive](https://drive.google.com/file/d/11gCeJ5xak9kXsP5KQ6Yv1aJNIj8fn0GZ/view?usp=sharing).
**If you use the data, please cite the following paper.**
```
@ARTICLE{9669110,
  author={Deng, Leyan and Lian, Defu and Huang, Zhenya and Chen, Enhong},
  journal={IEEE Transactions on Neural Networks and Learning Systems}, 
  title={Graph Convolutional Adversarial Networks for Spatiotemporal Anomaly Detection}, 
  year={2022},
  volume={},
  number={},
  pages={1-13},
  doi={10.1109/TNNLS.2021.3136171}}
```
**PeMS dataset (bay)** is collected from [PeMS](https://pems.dot.ca.gov/) and **NYC dataset (nyc)** is provided by [Detecting Collective Anomalies from Multiple Spatio- Temporal Datasets across Different Domains](https://www.microsoft.com/en-us/research/publication/detecting-collective-anomalies-from-multiple-spatio-temporal-datasets-across-different-domains/). 
Each dataset consists of the following five datasets:
+ data.npy
+ node_subgraph.npy
+ node_adjacent.txt
+ time_features.txt
+ node_dist.txt

where the `data.npy` is the traffic data in Bay area or New York City; 
`node_subgraph.npy` represents the adjacency matrix of the subgraph of each node; 
`node_adjacent.txt` represents all nodes in the subgraph of each node;  `time_features.txt` represents the time feature of each time slots; 
`node_dist.txt` represents the distance between nodes.

We also provide the information of the selected sensors in our paper, the file is `vds_info.csv`. 