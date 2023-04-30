---
order: 1
title: 玩转Node.js
category:
  - 前端
---
# 玩转Node.js

### 前言
实践是最好的学习方式。最近前几个月帮朋友部署了一个云崽机器人，然后事情就发展的不可收拾的地步：
玩别人的插件 👉 开始自己写一个单个插件 👉 创造[自己的插件](https://gitee.com/kyrzy0416/rconsole-plugin) 👉 阅读机器人源代码 👉 PR机器人源代码
总之整个过程非常的魔幻，下面目前打算介绍：`1. 常用的Node.js函数 2. 玩转Node.js机器人（待更新）`

## 常用的Node.js函数
下面这个几个Node.js函数都是经过生产环境考验的函数，一般情况下是十分稳定的：

### 常用

#### 下载文件
```javascript
 /**
 * 提取视频下载位置
 * @returns {{groupPath: string, target: string}}
 */
getGroupPathAndTarget() {
	const groupPath = `${this.defaultPath}${this.e.group_id || this.e.user_id}`;
	const target = `${groupPath}/temp.mp4`;
	return { groupPath, target };
}

/**
 * 工具：根URL据下载视频 / 音频
 * @param url       下载地址
 * @param isProxy   是否需要魔法
 * @param headers   覆盖头节点
 * @returns {Promise<unknown>}
 */
async downloadVideo(url, isProxy = false, headers = null) {
	// 这个是获取下载位置，可以自定义
	const { groupPath, target } = this.getGroupPathAndTarget.call(this);
	// 这个参考下面的文件类
	await mkdirIfNotExists(groupPath);

	const userAgent =
		"Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.25 Mobile Safari/537.36";
	const axiosConfig = {
		headers: headers || { "User-Agent": userAgent },
		responseType: "stream",
		...(isProxy && {
			httpAgent: tunnel.httpOverHttp({
				proxy: { host: this.proxyAddr, port: this.proxyPort },
			}),
			httpsAgent: tunnel.httpOverHttp({
				proxy: { host: this.proxyAddr, port: this.proxyPort },
			}),
		}),
	};

	try {
		// 这个参考下面的文件类
		await checkAndRemoveFile(target);

		const res = await axios.get(url, axiosConfig);
		logger.mark(`开始下载: ${url}`);
		const writer = fs.createWriteStream(target);
		res.data.pipe(writer);

		return new Promise((resolve, reject) => {
			writer.on("finish", () => resolve(groupPath));
			writer.on("error", reject);
		});
	} catch (err) {
		logger.error("下载视频发生错误！");
	}
}
```

#### 重试函数
```JavaScript
function retry(func, maxRetries = 3, delay = 1000) {
    return new Promise((resolve, reject) => {
        const attempt = (remainingTries) => {
            func()
                .then(resolve)
                .catch(error => {
                    if (remainingTries === 1) {
                        reject(error);
                    } else {
                        console.log(`错误: ${error}. 重试将在 ${delay/1000} 秒...`);
                        setTimeout(() => attempt(remainingTries - 1), delay);
                    }
                });
        };
        attempt(maxRetries);
    });
}
```

### 文件类
#### 检查文件是否存在并且删除
```JavaScript
async function checkAndRemoveFile(file) {
    try {
        await fs.promises.access(file);
        await fs.promises.unlink(file);
        logger.mark('视频已存在');
    } catch (err) {
        if (err.code !== 'ENOENT') {
            throw err;
        }
    }
}
```
#### 创建文件夹，如果不存在
```javascript
async function mkdirIfNotExists(dir) {
    try {
        await fs.promises.access(dir);
    } catch (err) {
        if (err.code === 'ENOENT') {
            await fs.promises.mkdir(dir, { recursive: true });
        } else {
            throw err;
        }
    }
}
```
#### 删除文件夹下所有文件
```javascript
async function deleteFolderRecursive(folderPath) {
    try {
        const files = await fs.promises.readdir(folderPath);
        const actions = files.map(async (file) => {
            const curPath = path.join(folderPath, file);

            const stat = await fs.promises.lstat(curPath);
            if (stat.isDirectory()) {
                // recurse
                return deleteFolderRecursive(curPath);
            } else {
                // delete file
                return fs.promises.unlink(curPath);
            }
        });

        await Promise.allSettled(actions);
        return files.length;
    } catch (error) {
        logger.error(error);
        return 0;
    }
}
```

### 加解密

#### aes加解密
```javascript
// AES加密
import crypto from "crypto";

const key = crypto.createHash("sha256").update("rconsole").digest();

/**
 * AES加密
 * @param ha1
 * @returns {Promise<string>}
 */
async function ha12store(ha1) {
    // IV.E
    const iv = crypto.randomBytes(16);
    const c = crypto.createCipheriv("aes-256-cbc", key, iv);
    let e = c.update(ha1, "binary", "hex");
    e += c.final("hex");
    return iv.toString("hex") + "." + e;
}

/**
 * AES解密
 * @param passstore
 * @returns {Promise<string>}
 */
async function store2ha1(passstore) {
    try {
        const parts = passstore.split(".");
        if (parts.length === 2) {
            // 新的加密方式 with IV: IV.E
            const c = crypto.createDecipheriv("aes-256-cbc", key, Buffer.from(parts[0], "hex"));
            let d = c.update(parts[1], "hex", "binary");
            d += c.final("binary");
            return d;
        } else {
            // 旧加密方式 without IV: E
            const c = crypto.createDecipher("aes192", key);
            let d = c.update(passstore, "hex", "binary");
            d += c.final("binary");
            return d;
        }
    } catch (e) {
        console.error(
            "在[default]部分设置的passwordSecret无法解密信息。请确保所有节点的passwordSecret相同。如果您更改了密码保密信息，可能需要重新添加用户。",
            e,
        );
    }
}

export { ha12store, store2ha1 };

```

### 并发
#### 令牌桶
```javascript
export default class TokenBucket {
    constructor(rate, capacity, interval = 1, isMinute = false) {
        this.interval = interval; // 生成令牌的时间间隔
        this.rate = isMinute ? rate / 60 : rate; // 修改为每分钟生成的令牌数量
        this.capacity = capacity; // 令牌容量
        this.tokens = capacity; // 令牌容量
        this.tokens = new Map(); // 使用 Map 存储每个用户的令牌桶
        this.lastTime = new Date().getTime(); // 上次使用时间

        /**
         * 核心算法
         * @param tokens
         * @param capacity
         * @param rate
         * @param lastTime
         * @param interval
         * @param isMinute
         * @return {{lastTime: number, tokens: number}}
         */
         this.updateTokens = (tokens, capacity, rate, lastTime, interval) => {
            // 计算从上次请求到现在经过的时间
            const now = new Date().getTime();
            const elapsed = now - lastTime;
            // 根据时间计算出新生成的令牌数量
            const addedTokens = elapsed * (rate / interval / 1000); // 修改为每分钟生成的令牌数量
            tokens = Math.min(tokens + addedTokens, capacity);
            lastTime = now;
            return { tokens, lastTime };
        }
    }

    /**
     * 消耗令牌-一个桶
     * @param count
     * @return {boolean}
     */
    consumeSingle(count = 1) {
        const { tokens, lastTime } = this.updateTokens(this.tokens, this.capacity, this.rate, this.lastTime, this.interval);
        // 更新令牌桶中的令牌数量
        this.tokens = tokens;

        // 判断请求是否能够被处理（即令牌桶中是否有足够的令牌）
        if (count <= this.tokens) {
            this.tokens -= count;
            return true; // 返回 true 表示请求被处理
        } else {
            return false; // 返回 false 表示请求被限流
        }
    }

    /**
     * 消耗令牌
     * @param id     用户id
     * @param count  请求次数
     * @return {boolean}
     */
    consume(id, count = 1) {
        const { tokens: userTokens, lastTime: userLastTime } = this.tokens.get(id) || { tokens: this.capacity, lastTime: new Date().getTime() };
        const { tokens, lastTime } = this.updateTokens(userTokens, this.capacity, this.rate, userLastTime, this.interval);
        // 更新令牌桶中的令牌数量
        this.tokens.set(id, { tokens, lastTime });

        // 判断请求是否能够被处理（即令牌桶中是否有足够的令牌）
        if (count <= tokens) {
            this.tokens.set(id, { tokens: tokens - count, lastTime });
            return true;
        } else {
            return false;
        }
    }

    /**
     * 重置令牌
     * @param newCapacity
     */
    resetCapacity(newCapacity) {
        if (newCapacity >= this.tokens) {
            this.capacity = newCapacity;
            this.tokens = newCapacity;
        } else {
            throw new Error('分配少于当前的容量！');
        }
    }
}
```

使用令牌桶
```javascript
/**
 * 构造令牌桶，防止解析致使服务器宕机（默认限制5s调用一次）
 * @type {TokenBucket}
 */
static #tokenBucket = new TokenBucket(1, 1, 5);

/**
 * 令牌桶 拿来限流（默认限制1min调用一次）
 * @type {TokenBucket}
 */
static #tokenBucket = new TokenBucket(1, 1, 60);
```
