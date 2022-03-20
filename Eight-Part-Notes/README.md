- [八股文学习技巧](#八股文学习技巧)
- [Java基础](#java基础)
- [框架](#框架)
  - [Spring](#spring)
- [微服务](#微服务)
- [JVM](#jvm)
- [JUC](#juc)
- [数据库](#数据库)
  - [RabbitMQ](#rabbitmq)
  - [MySql](#mysql)
- [数据结构和算法](#数据结构和算法)
- [操作系统](#操作系统)
- [计算机网络](#计算机网络)
- [设计模式](#设计模式)
- [安全](#安全)
- [杂项](#杂项)
  - [最新技术](#最新技术)
  - [RBAC](#rbac)

# 八股文学习技巧

* [八股文学习路线及攻略](https://leetcode-cn.com/circle/discuss/2Ypo9Z/) 
* [论如何4个月高效刷满 500 题并形成长期记忆](https://leetcode-cn.com/circle/discuss/jq9Zke/ ) 

# Java基础

> 讲讲hashmap，底层原理是什么？ 

**JDK1.8 之前**

<font color='#e67e22'>JDK1.8 之前 HashMap 底层是 **数组和链表** 结合在一起使用也就是 链表散列</font>。HashMap 通过 key 的 hashCode 经过扰动函数处理过后得到 hash 值，然后通过 (n - 1) & hash 判断当前元素存放的位置（这里的 n 指的是数组的长度），如果当前位置存在元素的话，就判断该元素与要存入的元素的 hash 值以及 key 是否相同，如果相同的话，直接覆盖，<u>不相同就通过拉链法解决冲突</u>。

所谓扰动函数指的就是 HashMap 的 hash 方法。使用 hash 方法也就是扰动函数是为了防止一些实现比较差的 hashCode() 方法 换句话说使用扰动函数之后可以减少碰撞。

JDK 1.8 HashMap 的 hash 方法源码:

JDK 1.8 的 hash 方法 相比于 JDK 1.7 hash 方法更加简化，但是原理不变。

```java
    static final int hash(Object key) {
      int h;
      // key.hashCode()：返回散列值也就是hashcode
      // ^ ：按位异或
      // >>>:无符号右移，忽略符号位，空位都以0补齐
      return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
  }
```

对比一下 JDK1.7 的 HashMap 的 hash 方法源码.

```java
static int hash(int h) {
    // This function ensures that hashCodes that differ only by
    // constant multiples at each bit position have a bounded
    // number of collisions (approximately 8 at default load factor).

    h ^= (h >>> 20) ^ (h >>> 12);
    return h ^ (h >>> 7) ^ (h >>> 4);
}
```

相比于 JDK1.8 的 hash 方法 ，JDK 1.7 的 hash 方法的性能会稍差一点点，因为毕竟扰动了 4 次。

所谓 **“拉链法”** 就是：将链表和数组相结合。也就是说创建一个链表数组，数组中每一格就是一个链表。若遇到哈希冲突，则将冲突的值加到链表中即可。

<img src="images/jdk1.8%E4%B9%8B%E5%89%8D%E7%9A%84%E5%86%85%E9%83%A8%E7%BB%93%E6%9E%84-HashMap.png" alt="jdk1.8之前的内部结构-HashMap" style="zoom: 67%;" />

**JDK1.8 之后**

相比于之前的版本， JDK1.8 之后在解决哈希冲突时有了较大的变化，当链表长度大于阈值（默认为 8）（将链表转换成红黑树前会判断，如果当前数组的长度小于 64，那么会选择先进行数组扩容，而不是转换为红黑树）时，<font color='#fdcb6e'>将链表转化为红黑树，以减少搜索时间</font>。

![jdk1.8之后的内部结构-HashMap](images/jdk1.8%E4%B9%8B%E5%90%8E%E7%9A%84%E5%86%85%E9%83%A8%E7%BB%93%E6%9E%84-HashMap.png)

TreeMap、TreeSet 以及 JDK1.8 之后的 HashMap 底层都用到了红黑树。红黑树就是为了解决二叉查找树的缺陷，因为二叉查找树在某些情况下会退化成一个线性结构。



> stringbuilder有用过吗？
>
> stringbuilder和stringbuffer什么区别？
>
> stringbuilder为什么线程不安全？底层原理是什么？



> 深拷贝和浅拷贝区别，工作原理



> 序列化和反序列化的概念，方式，例子



> 异常分类，Exception分类，受检异常和非受检异常区别，自定义异常优点



> 有没有用过自定义异常，声明式异常工作流程，和return区别，项目中自定义异常工作流程



> 类的生命周期，什么时候回收



> JDBC PreparedStatement和Statement区别



# 常用框架

## Spring

> 对spring和springboot的理解



> springboot是怎么加载redis的，为什么比不用springboot更方便呢?



> 加载的redis或者bean是单例还是多例

默认单例



> springboot是怎么实现单例模式的呢？



> Spring bean启动流程和生命周期



# 微服务、分布式

> 讲讲微服务





> 微服务两台机器怎么通信呢?



> 两台机器如何用HTTP怎么找到对方？



> 微服务都有什么部分呢



> 注册中心是什么讲讲



> 网关是什么呢



> 分布式登录怎么保持状态吗



> 分布式系统中，本地缓存和Redis中的数据是否是每台服务器上都备份同样的数据



> 分布式系统相关概念，序列化在分布式系统中的应用，讲一下thrift

# JVM

> Java static关键字，生命周期，static变量存在JVM哪个区域和生命周期



# JUC

> 怎么保证多线程下面单例模式安全？



> 怎么保证多线程下面单例模式安全

双重校验锁 + volatile



> concurrentMap和hashmap有什么区别



> 线程安全是什么概念



> hashmap为什么多线程不安全，能举出例子来吗



> 怎么保证线程安全



> volatile和synchronize有什么区别？



> volatile能保证i++安全吗



> 乐观锁和悲观锁，具体实现



> 线程池参数，工作流程，阻塞队列中的任务怎么加载到线程中



> ThreadLocal关键字，Tomcat有没有用过



> CAS是什么，原理，原子性怎么保证



> ConcurrentHashMap 和 Hashtable 的区别



> CAS是什么？



> JMM是什么？



> HashMap说一下



# 数据库

## RabbitMQ

> RabbitMQ讲讲对RabbitMQ的了解



> RabbitMQ的交换机和队列是怎样一个联系





> Redis怎么统计在线用户





> Redis的数据结构讲一讲 + 使用场景



> Zset里面跳表是什么



> 讲讲缓存一致性问题



> 脏读幻读的问题





> 不仅从redis角度，同时从数据库并发可能产生问题角度答答



> redis高并发



> redis高可用



> redis主从是怎么做的



> 缓存雪崩，缓存击穿，缓存穿透





> 缓存有哪些，Ehcache和Redis区别，Ehcache为什么效率高



> Redis分布式集群是怎么实现的

## MySql

> 有用mysql做过什么东西吗



> Mysql sql执行过程，用JDBC时sql执行流程



> Mysql监听binlog，binlog是什么



> redolog和binlog的区别





> Mysql里面为什么用B+树？B+树和二叉树区别？那能不能用哈希呢？





> 数据库索引



> 什么是事务？讲讲数据库的隔离级别，分别怎么解决可能出现的问题？



> MVCC，那简单讲讲MVCC？





> MVCC版本查看，为什么还会出现幻读?



> sql慢查询（优化），如果没有索引怎么办？加了索引也比较慢怎么办？



> 事务ACID特性，隔离级别，隔离级别对应问题对其描述



> 了解mysql的索引吗？为什么要用b+树索引？树的高度是多少？ 



# 数据结构和算法



# 操作系统

> 进程和线程的区别



> 进程线程都怎么通信



> 线程的状态



> 了解操作系统的锁吗？讲讲操作系统实现锁的底层原理



> 生产者和消费者模式怎么理解，举个例子



> 线程能不能start两次，线程池中的线程为什么能循环利用



> 利用多线程时最大的难点是什么，怎么解决多线程安全问题





# 计算机网络

> 计算机网络输入URL到看到网页



> 四次握手



> url解析过程



> 七层协议



> 三次握手过程？为什么不能两次握手



> TCP的底层原理知道吗？TCP是怎么实现通信的？ 



> TCP和HTTP有什么区别？ 



> 讲一下http：结构，和tcp关系等，状态码有什么



> HTTP和HTTPs的区别



> NIO和AIO



# 设计模式

> 你能说说设计模式吗



> 为什么设计模式更好，你能说说用和不用的区别吗



> 举个例子讲讲设计模式的好



> 设计模式？哪些框架有设计模式？每个模式是什么样的？



> 会什么设计模式，讲一下模板方法设计模式，应用



# 安全

> 讲讲JWT

# 杂项

## 最新技术

> 你有没有关注一下最新的技术？

## RBAC

> RBAC是什么？怎么实现的？



# 问题解答选取的github仓库

如果不是在github上查找到的答案会给予标注

1. https://github.com/Snailclimb/JavaGuide 「Java学习+面试指南」一份涵盖大部分 Java 程序员所需要掌握的核心知识。准备 Java 面试，首选 JavaGuide！ 
