import random
from gensim.models import Word2Vec


class Node2Vec:
    def __init__(self, G, distance, emb_size=128, p=4, q=1, length_walk=50, num_walks=10, window_size=10, num_iters=2, batch=4, workers=4):
        self.G = G
        self.distance = distance
        self.emb_size = emb_size
        self.length_walk = length_walk
        self.num_walks = num_walks
        self.batch = batch
        self.window_size = window_size
        self.num_iters = num_iters
        self.p = p
        self.q = q
        self.workers = workers

    def walk_step(self, t, v):
        nbs = list(self.G.neighbors(v))
        if len(nbs) == 0:
            return False

        weights = [1] * len(nbs)
        for i, x in enumerate(nbs):
            w = self.G.get_edge_data(v, x)["weight"]
            if w is None:
                continue
            d = self.distance[t][x]

            if d == 0:
                weights[i] = 0
            elif d == 1:
                weights[i] = w
            elif d == 2:
                weights[i] = w / self.q


        return random.choices(nbs, weights=weights, k=1)[0]

    def random_walk(self):
        # random walk with every node as start point
        walks = []
        for node in self.G.nodes():
            walk = [node]
            nbs = list(self.G.neighbors(node))
            if len(nbs) > 0:
                walk.append(random.choice(nbs))
                for i in range(2, self.length_walk):
                    v = self.walk_step(walk[-2], walk[-1])
                    if not v:
                        break
                    walk.append(v)
            walk = [str(x) for x in walk]
            walks.append(walk)

        return walks

    def sentenses(self):
        sts = []
        for _ in range(self.num_walks):
            sts.extend(self.random_walk())

        return sts

    def train(self, is_loadmodel=False, is_loaddata=False):
        if is_loadmodel:
            print('Load model from file')
            w2v = Word2Vec.load('../models/Node2Vec.model')
            return w2v

        if is_loaddata:
            print('Load data from file')
            with open('../data/tencent_walk_node2vec.txt', 'r') as f:
                sts = f.read()
                sentenses = eval(sts)
        else:
            print('Random walk to get training data...')
            sentenses = self.sentenses()
            print('Number of sentenses to train: ', len(sentenses))
            # with open('../data/tencent_walk_node2vec.txt', 'w') as f:
            #     f.write(str(sentenses))

        print('Start training...')
        random.seed(616)
        w2v = Word2Vec(sentences=sentenses, size=self.emb_size, window=self.window_size,  sg=1,
                       hs=1, min_count=1, batch_words=self.batch, workers=self.workers)
        # w2v.save('../models/Node2Vec.model')
        print('Training Done.')

        return w2v


