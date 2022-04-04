# AQS

## 为什么需要AQS

因为上面的那些协作类,它们有很多工作都是类似的,所以如果能提取出一个工具类,那么就可以直接用,对于ReentrantLock和Semaphore而言就可以屏蔽很多细节, 只关注它们自己的“业务逻辑”就可以了



可以看到`Semaphore`继承了AQS

```java
public class Semaphore implements java.io.Serializable
.....
abstract static class Sync extends AbstractQueuedSynchronizer
```



`CountDownLatch`也继承了AQS

```java
public class CountDownLatch {
    /**
     * Synchronization control For CountDownLatch.
     * Uses AQS state to represent count.
     */
    private static final class Sync extends AbstractQueuedSynchronizer
```



同样，`ReentrantLock`也继承了

```java
public class ReentrantLock implements Lock, java.io.Serializable {
    private static final long serialVersionUID = 7373984872572414699L;
    /** Synchronizer providing all implementation mechanics */
    private final Sync sync;

    /**
     * Base of synchronization control for this lock. Subclassed
     * into fair and nonfair versions below. Uses AQS state to
     * represent the number of holds on the lock.
     */
    abstract static class Sync extends AbstractQueuedSynchronizer
```



## AQS的比喻

* Semaphore :一个人面试完了以后,后一个人才能进来继续面试
* CountDownLatch :群面等待10人到齐.
* Semaphore、CountDownLatch这些同步 工具类,要做的就只是写下自己的“要人”规则。比如是"出一个，进一个"，或者说“凑齐10人, 一起面试"
* 剩下的招呼面试者的脏活累活就交给AQS来做



## AQS的作用

AQS是一个用于构建锁、同步器、协作工具类的工具类(框架)。有了AQS以后,更多的协作工具类都可以很方便得被写出来

一句话总结:有了AQS ,构建线程协作类就容易多了。



## AQS内部原理解析

AQS最核心的三大部分：

* state
* 控制线程抢锁和配合的FIFO队列
* 期望协作工具类去实现的获取/释放等重要方法



### state状态

```java
/**
     * The synchronization state.
     */
private volatile int state;
```

这里的state的具体含义,会根据具体实现类的不同而不同比如在Semaphore里,它表示"剩余的许可证的数量”, 而在CountDownLatch里，它表示 “还需要倒数的数量”

state是volatile修饰的,会被并发地修改,所以所有修改state的方法都需要保证线程安全,比如getState、setState以及compareAndSetState操作来读取和更新这个状态。这些方法都依赖于j.u.c.atomic包的支持



在ReentrantLock中的含义：

* 表示锁的占有情况，包括可重入计数
* 当state的值为0时，标识改Lock不被任何线程所占有





### 控制线程抢锁和配合的FIFO队列

这个队列用来存放"等待的线程” , AQS就是“排队管理器”当多个线程争用同一把锁时,必须有排队机制将那些没能拿到锁的线程串在一 起。当锁释放时,锁管理器就会挑选一 个合适的线程来占有这个刚刚释放的锁

AQS会维护一 个等待的线程队列,把线程都放到这个队列里

这是一个双向形式的队列

![](../../images/20220404123142.png)



### 获取/释放等重要方法

获取方法：

* 获取操作会依赖state变量，经常会阻塞(比如获取不到锁的时候)
* 在Semaphore中,获取就是acquire方法,作用是获取一个许可证
* 而在CountDownLatch里面,获取就是await方法,作用是"等待,直到倒数结束”



释放方法：

* 释放操作不会阻塞
* 在Semaphore中,释放就是release方法,作用是释放一个许可证
* CountDownL atch里面,获取就是countDown方法,作用是'倒数1个数”



## AQS在CountDownLatch的应用

```java
public CountDownLatch(int count) {
        if (count < 0) throw new IllegalArgumentException("count < 0");
    this.sync = new Sync(count);
}
```

