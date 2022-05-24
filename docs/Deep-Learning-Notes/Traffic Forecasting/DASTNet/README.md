# DASTNet
This is an implementation of [Domain Adversarial Spatial-Temporal Network: A Transferable Framework for Short-term Traffic Forecasting across Cities](https://arxiv.org/abs/2202.03630) 

[![PWC](https://img.shields.io/endpoint.svg?url=https://paperswithcode.com/badge/domain-adversarial-spatial-temporal-network-a/traffic-prediction-on-pemsd4-10-days-training)](https://paperswithcode.com/sota/traffic-prediction-on-pemsd4-10-days-training?p=domain-adversarial-spatial-temporal-network-a)

[![PWC](https://img.shields.io/endpoint.svg?url=https://paperswithcode.com/badge/domain-adversarial-spatial-temporal-network-a/traffic-prediction-on-pemsd4-10-days-training-1)](https://paperswithcode.com/sota/traffic-prediction-on-pemsd4-10-days-training-1?p=domain-adversarial-spatial-temporal-network-a)

[![PWC](https://img.shields.io/endpoint.svg?url=https://paperswithcode.com/badge/domain-adversarial-spatial-temporal-network-a/traffic-prediction-on-pemsd4-10-days-training-2)](https://paperswithcode.com/sota/traffic-prediction-on-pemsd4-10-days-training-2?p=domain-adversarial-spatial-temporal-network-a)

[![PWC](https://img.shields.io/endpoint.svg?url=https://paperswithcode.com/badge/domain-adversarial-spatial-temporal-network-a/traffic-prediction-on-pemsd7-10-days-training)](https://paperswithcode.com/sota/traffic-prediction-on-pemsd7-10-days-training?p=domain-adversarial-spatial-temporal-network-a)

[![PWC](https://img.shields.io/endpoint.svg?url=https://paperswithcode.com/badge/domain-adversarial-spatial-temporal-network-a/traffic-prediction-on-pemsd7-10-days-training-1)](https://paperswithcode.com/sota/traffic-prediction-on-pemsd7-10-days-training-1?p=domain-adversarial-spatial-temporal-network-a)

[![PWC](https://img.shields.io/endpoint.svg?url=https://paperswithcode.com/badge/domain-adversarial-spatial-temporal-network-a/traffic-prediction-on-pemsd7-10-days-training-2)](https://paperswithcode.com/sota/traffic-prediction-on-pemsd7-10-days-training-2?p=domain-adversarial-spatial-temporal-network-a)

[![PWC](https://img.shields.io/endpoint.svg?url=https://paperswithcode.com/badge/domain-adversarial-spatial-temporal-network-a/traffic-prediction-on-pemsd8-10-days-training)](https://paperswithcode.com/sota/traffic-prediction-on-pemsd8-10-days-training?p=domain-adversarial-spatial-temporal-network-a)

[![PWC](https://img.shields.io/endpoint.svg?url=https://paperswithcode.com/badge/domain-adversarial-spatial-temporal-network-a/traffic-prediction-on-pemsd8-10-days-training-1)](https://paperswithcode.com/sota/traffic-prediction-on-pemsd8-10-days-training-1?p=domain-adversarial-spatial-temporal-network-a)

[![PWC](https://img.shields.io/endpoint.svg?url=https://paperswithcode.com/badge/domain-adversarial-spatial-temporal-network-a/traffic-prediction-on-pemsd8-10-days-training-2)](https://paperswithcode.com/sota/traffic-prediction-on-pemsd8-10-days-training-2?p=domain-adversarial-spatial-temporal-network-a)

## Requirements

- python == 3.6
- torch == 1.7.0+cu110
- networkx == 2.4
- gensim == 3.8.1

See [requirements.txt](https://github.com/YihongT/DASTNet/blob/master/requirements.txt) for more details.

## Dataset

- PeMS04
- PeMS07
- PeMS08

Please refer to [STSGCN (AAAI2020)](https://github.com/Davidham3/STSGCN).

## Model

<img src="Figures\model.jpg" style="zoom:80%;" />

## Run
```
python main.py
```

## Reference

Please cite our paper if you use the model in your own work:
```
@article{tang2022domain,
  title={Domain Adversarial Spatial-Temporal Network: A Transferable Framework for Short-term Traffic Forecasting across Cities},
  author={Tang, Yihong and Qu, Ao and Chow, Andy HF and Lam, William HK and Wong, SC and Ma, Wei},
  journal={arXiv preprint arXiv:2202.03630},
  year={2022}
}
```