# 线程池

## 线程池的好处

* 加快响应速度
* 合理利用CPU和内存
* 统一管理

## 应用场景

* 服务器接受到大量请求（大大减少线程的创建和销毁次数）
* 需要创建5个以上的线程就可以使用线程池

## 创建线程池

### 参数

* corePoolSize 核心线程数
* maxPoolSize 最大线程数
* keepAliveTime 保持存活事件
* workQueue 任务存储队列
* threadFactory 线程工厂
* Handler 拒绝策略

### 添加线程规则

1. 如果线程数 < corePoolSize, 即使其他工作线程处于空闲状态，也会创建一个线程来运行新任务
2. 如果线程数 >= corePoolSize，但少于maximumPoolSize，则将任务放入队列
3. 如果队列已满，并且线程数 < maxPoolSize，则创建一个新线程来运行任务
4. 如果队列已满，并且线程数 > maxPoolSize，则拒绝该任务

### 添加线程顺序

* corePoolSize
* workQueue
* maxPoolSize

> 例子 核心池大小为5，最大池大小为10，队列为100  
> 因为线程中的请求最多会创建5个,然后任务将被添加到队列中，直到达到100。当队列已满时,将创建最新的线程maxPoolSize ,最多到10个线程,如果再来任务,就拒绝。

### 特点

1. 通过设置corePoolSize和maximumPoolSize相同,就可以 创建固定大小的线程池。
2. 线程池希望保持较少的线程数,并且只有在负载变得很大时才增加它。
3. 通过设置maximumPoolSize为很高的值,例如 Integer.MAX_ VALUE，可以允许线程池容纳任意数量的并发任务。
4. 是只有在队列填满时才创建多于corePoolSize的线程,所以如果你使用的是无界队列(例如LinkedBlockingQueue ) ,那么线程数就不会超过corePoolSize。

### newFixedThreadPool

由于传进去的LinkedBlockingQueue是没有容量上限的 所以当请求数越来越多, 并且无法及时处理完毕的时候， 也就是请求堆积的时候,会容易造成占用大量的内存,可能会导致OOM。

> 代码示例

```java
public class FixedThreadPoolOOM {
    private static ExecutorService executorService = Executors.newFixedThreadPool(1);

    public static void main(String[] args) {
        for (int i = 0; i < Integer.MAX_VALUE; i++) {
            executorService.execute(new SubThread());
        }
    }
}

class SubThread implements Runnable{

    @Override
    public void run() {
        try {
            Thread.sleep(10000000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
```

> 结果
> Exception in thread "main" java.lang.OutOfMemoryError: GC overhead limit exceeded

### newSingleThreadExecutor

可以看出,这里和刚才的newFixedThreadPool的原理基本一样,只不过把线程数直接设置成了1 ,所以这也会导致同样的问题,也就是当请求堆积的时候，可能会占用大量的内存。

> 代码示例

```java
public class SingleThreadExecutor {

    public static void main(String[] args) {
        ExecutorService executorService = Executors.newSingleThreadExecutor();
        for (int i = 0; i < 1000; i++) {
            executorService.execute(new Task());
        }
    }
}
```

> 结果  

```text
pool-1-thread-1  
pool-1-thread-1  
pool-1-thread-1  
pool-1-thread-1  
pool-1-thread-1  
pool-1-thread-1  
pool-1-thread-1
```

### newCachedThreadPool

这里的弊端在于第二个参数maximumPoolSize被设置为了Integer.MAX_ _VALUE ,这可能会创建数量非常多的线程,甚至导致OOM。

> 代码示例

```java
public class CacheThreadPool {

    public static void main(String[] args) {
        ExecutorService executorService = Executors.newCachedThreadPool();
        for (int i = 0; i < 1000; i++) {
            executorService.execute(new Task());
        }
    }
}
```

可以从源码看到,它设置默认的最大为Integer的最大值

```java
public static ExecutorService newCachedThreadPool() {
        return new ThreadPoolExecutor(0, Integer.MAX_VALUE,
                                      60L, TimeUnit.SECONDS,
                                      new SynchronousQueue<Runnable>());
    }
```

### ScheduledThreadPool

* 支持定时、周期性任务执行的线程池

> 代码示例

```java
public class ScheduledThreadPoolTest {

    public static void main(String[] args) {
        ScheduledExecutorService threadPool = Executors.newScheduledThreadPool(10);
//        threadPool.schedule(new Task(), 5, TimeUnit.SECONDS);
        threadPool.scheduleAtFixedRate(new Task(), 1, 3, TimeUnit.SECONDS);
    }
}
```

### 总结

| Paramter      | FixedThreadPool      | CachedThreadPool  | ScheduledThreadPool | SingleThreadPool |
| ------------- | -------------------- | ----------------- | ------------------- | ---------------- |
| corePoolSize  | constructor-arg      | 0                 | constructor-arg     | 1                |
| maxPoolSize   | same as corePoolSize | Integer.MAX_VALUE | Integer.MAX_VALUE   | 1                |
| keepAliveTime | 0 seconds            | 60 seconds        | 60 seconds          | 0 seconds        |




## 线程池里的线程数量设定为多少比较合适

* CPU密集型(加密、计算hash等) : 最佳线程数为CPU核心数的1-2倍左右。
* 耗时IO型(读写数据库、文件、网络读写等) : 最佳线程数一般会大于cpu核心数很多倍,以JVM线程监控显示繁忙情况为依据,保证线程空闲可以衔接上，参考Brain Goetz推荐的计算方法:
  * 线程数=CPU核心数* ( 1+平均等待时间/平均工作时间)



## 阻塞队列分析

FixedThreadPool和SingleThreadPool是LinkedBlockingQueue


## 停止线程池的正确方法

### shutdown

> 代码示例

```java
public class ShutDown {

    public static void main(String[] args) throws InterruptedException  {
        ExecutorService exectorService = Executors.newFixedThreadPool(10);
        for (int i = 0; i < 1000; i++) {
            exectorService.execute(new ShutDownTask());
        }
        Thread.sleep(1500);
        exectorService.shutdown();
    }
}

class ShutDownTask implements Runnable {
    @Override
    public void run() {
        try {
            Thread.sleep(500);
            System.out.println(Thread.currentThread().getName());
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
```

> 运行结果

可以看到进程一直在运行，在1.5s后并没有停止

```
pool-1-thread-1
pool-1-thread-5
pool-1-thread-8
pool-1-thread-6
pool-1-thread-10
pool-1-thread-3
pool-1-thread-9
pool-1-thread-2
pool-1-thread-7
pool-1-thread-7
pool-1-thread-5
pool-1-thread-9
pool-1-thread-1
..............
```



> 对代码进行改进，在main方法停止线程的后面加入

```
Thread.sleep(1500);
exectorService.shutdown();
exectorService.execute(new ShutDownTask())
```

可以看到成功触发了

```
pool-1-thread-3
pool-1-thread-1
pool-1-thread-4
pool-1-thread-2
pool-1-thread-7
pool-1-thread-9
pool-1-thread-10
pool-1-thread-5
pool-1-thread-6
Exception in thread "main" java.util.concurrent.RejectedExecutionException: Task threadpool.ShutDownTask@4b67cf4d rejected from java.util.concurrent.ThreadPoolExecutor@7ea987ac[Shutting down, pool size = 10, active threads = 10, queued tasks = 970, completed tasks = 20]
	at java.util.concurrent.ThreadPoolExecutor$AbortPolicy.rejectedExecution(ThreadPoolExecutor.java:2063)
	at java.util.concurrent.ThreadPoolExecutor.reject(ThreadPoolExecutor.java:830)
	at java.util.concurrent.ThreadPoolExecutor.execute(ThreadPoolExecutor.java:1379)
	at threadpool.ShutDown.main(ShutDown.java:15)
```



### isShutdown

调用shutdown()或shutdownNow()方法后返回为true。

> 那有没有什么办法可以在不创建新线程的条件下停止

```java
Thread.sleep(1500);
exectorService.shutdown();
System.out.println(exectorService.isShutdown());
//        exectorService.execute(new ShutDownTask());
```

可以看到，在打印了已经停止了之后线程还在进行，而是说明开始结束已经返回true了

```
pool-1-thread-4
pool-1-thread-5
pool-1-thread-9
true
pool-1-thread-4
pool-1-thread-8
pool-1-thread-7
```



### isTerminated

* 调用shutdown()方法后，并且所有提交的任务完成后返回为true
* 调用shutdownNow()方法后，成功停止后返回为true

> 再次对main进行修改

```java
public static void main(String[] args) throws InterruptedException {
    ExecutorService exectorService = Executors.newFixedThreadPool(10);
    for (int i = 0; i < 100; i++) {
        exectorService.execute(new ShutDownTask());
    }
    Thread.sleep(1500);
    exectorService.shutdown();
    //        System.out.println(exectorService.isShutdown());
    System.out.println(exectorService.isTerminated());
    Thread.sleep(10000);
    System.out.println(exectorService.isTerminated());
    //        exectorService.execute(new ShutDownTask());
}
```

可以看到第一个isTerminated返回false

```
pool-1-thread-9
pool-1-thread-6
false
pool-1-thread-6
pool-1-thread-10
```

第二个isTerminated返回true

```
pool-1-thread-8
pool-1-thread-4
pool-1-thread-3
pool-1-thread-7
true
```



> 注：当需要用到isTerminated()函数判断线程池中的所有线程是否执行完毕时候，不能直接使用该函数，必须在shutdown()方法关闭线程池之后才能使用，否则isTerminated()永不为TRUE，线程将一直阻塞在该判断的地方，导致程序最终崩溃。



### awaitTermination

1️⃣如果等待的时间超过指定的时间，但是线程池中的线程运行完毕，那么awaitTermination()返回true。执行分线程已结束。

2️⃣如果等待的时间超过指定的时间，但是线程池中的线程未运行完毕，那么awaitTermination()返回false。不执行分线程已结束。

3️⃣如果等待时间没有超过指定时间，等待！



> 程序未执行完 -- 返回false

```java
public class ShutDown {

    public static void main(String[] args) throws InterruptedException {
        ExecutorService exectorService = Executors.newFixedThreadPool(10);
        for (int i = 0; i < 100; i++) {
            exectorService.execute(new ShutDownTask());
        }
        Thread.sleep(1500);
        exectorService.shutdown();
        boolean b = exectorService.awaitTermination(3L, TimeUnit.SECONDS);
        System.out.println(b);
    }
}

class ShutDownTask implements Runnable {
    @Override
    public void run() {
        try {
            Thread.sleep(500);
            System.out.println(Thread.currentThread().getName());
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
```

```
pool-1-thread-1
pool-1-thread-6
false
pool-1-thread-6
pool-1-thread-5
```





> 程序执行完 -- 返回true

```java
public class ShutDown {

    public static void main(String[] args) throws InterruptedException {
        ExecutorService exectorService = Executors.newFixedThreadPool(10);
        for (int i = 0; i < 100; i++) {
            exectorService.execute(new ShutDownTask());
        }
        Thread.sleep(1500);
        exectorService.shutdown();
        boolean b = exectorService.awaitTermination(5L, TimeUnit.SECONDS);
        System.out.println(b);
    }
}

class ShutDownTask implements Runnable {
    @Override
    public void run() {
        try {
            Thread.sleep(500);
            System.out.println(Thread.currentThread().getName());
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
```



```java
..........
pool-1-thread-2
pool-1-thread-3
pool-1-thread-6
pool-1-thread-8
pool-1-thread-1
pool-1-thread-7
true
```



### shutdownNow

```java
public class ShutDown {

    public static void main(String[] args) throws InterruptedException {
        ExecutorService exectorService = Executors.newFixedThreadPool(10);
        for (int i = 0; i < 100; i++) {
            exectorService.execute(new ShutDownTask());
        }
        Thread.sleep(1500);
        List<Runnable> runnables = exectorService.shutdownNow();
    }
}

class ShutDownTask implements Runnable {
    @Override
    public void run() {
        try {
            Thread.sleep(500);
            System.out.println(Thread.currentThread().getName());
        } catch (InterruptedException e) {
            System.out.println(Thread.currentThread().getName() + "被中断了");
        }
    }
}
```



## 拒绝策略

* AbortPolicy
* DiscardPolicy
* DiscardOldestPolicy\
* CallerRunsPolicy

> 代码示例

```java
public class PauseableThreadPool  extends ThreadPoolExecutor {

    private boolean isPaused;
    private final ReentrantLock lock = new ReentrantLock();
    private Condition unpaused = lock.newCondition();

    public PauseableThreadPool(int corePoolSize, int maximumPoolSize, long keepAliveTime, TimeUnit unit, BlockingQueue<Runnable> workQueue) {
        super(corePoolSize, maximumPoolSize, keepAliveTime, unit, workQueue);
    }

    public PauseableThreadPool(int corePoolSize, int maximumPoolSize, long keepAliveTime, TimeUnit unit, BlockingQueue<Runnable> workQueue, ThreadFactory threadFactory) {
        super(corePoolSize, maximumPoolSize, keepAliveTime, unit, workQueue, threadFactory);
    }

    public PauseableThreadPool(int corePoolSize, int maximumPoolSize, long keepAliveTime, TimeUnit unit, BlockingQueue<Runnable> workQueue, RejectedExecutionHandler handler) {
        super(corePoolSize, maximumPoolSize, keepAliveTime, unit, workQueue, handler);
    }

    public PauseableThreadPool(int corePoolSize, int maximumPoolSize, long keepAliveTime, TimeUnit unit, BlockingQueue<Runnable> workQueue, ThreadFactory threadFactory, RejectedExecutionHandler handler) {
        super(corePoolSize, maximumPoolSize, keepAliveTime, unit, workQueue, threadFactory, handler);
    }

    @Override
    protected void beforeExecute(Thread t, Runnable r) {
        super.beforeExecute(t, r);
        lock.lock();
        try {
            while (isPaused) {
                unpaused.await();
            }
        } catch(InterruptedException e) {
            e.printStackTrace();
        } finally {
            lock.unlock();
        }
    }

    private void pause() {
        lock.lock();
        try {
            isPaused = true;
        } finally {
            lock.unlock();
        }
    }

    public void resume() {
        lock.lock();
        try {
            isPaused = false;
            unpaused.signalAll();
        } finally {
            lock.unlock();
        }
    }

    public static void main(String[] args) {
        PauseableThreadPool pool = new PauseableThreadPool(10, 20, 10L, TimeUnit.SECONDS, new LinkedBlockingDeque<>());
        Runnable runnable = new Runnable() {
            @Override
            public void run() {
                System.out.println("我被执行了");
                try {
                    Thread.sleep(10);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        };
        for (int i = 0; i < 10000; i++) {
            pool.execute(runnable);
        }
        try {
            Thread.sleep(1500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        pool.pause();
        System.out.println("线程池被暂停了");
    }
}
```



## 线程池组成部分

* 线程池管理器
* 工作线程
* 任务队列
* 任务接口



### Executor家庭

* Executor
* ExecutorService
* Executors 工具类



## 线程池状态

* **RUNNING** 接受新任务并处理排队任务
* **SHUTDOWN** 不接受新任务，但处理排队任务
* **STOP** 不接受新任务，也不处理排队任务，并中断正在进行的任务
* **TIDYING** 所有任务都已终止，workerCount为0时，线程会转换到TIDYING状态，并将运行terminate()钩子方法
* **TERMINATED** terminate()运行完成



## 使用线程池的注意点

* 避免任务堆积
  * 任务特别多，对于多任务来者不拒的话如newFixedThreadPool，所有任务都可以放进去，那么任务越来越多就会导致内存不够
* 避免线程数过渡增加
* 排查线程泄漏

