---

order: 15
author: zhiyu1998
title: 2023大厂八股文
category:
  - 八股文
  - 大厂
---


## 前言
2022有的大厂面试题不会在2023再次出现（也有可能会因为粗心加上，欢迎issue或者PR指正和修改），如果想要了解可以先看[2022大厂面试](/Java/eightpart/giant.md)版本


## 数据库

### 什么是覆盖索引？（2023 快手）
> 这个其实在2022年的大厂面试中出现过，但是是以聚簇索引形式提问出现

**覆盖索引是一种数据库查询优化机制**。在覆盖索引中，索引本身包含了查询所需要的所有数据，因此在执行查询时，数据库系统可以只访问索引，而不需要再访问数据行。这样可以显著提高查询速度，因为访问索引通常比访问数据行要快。（在索引 B+Tree 的叶子节点上都能找得到的那些索引，从二级索引中查询得到记录，而不需要通过聚簇索引查询获得，可以避免回表的操作）

> 覆盖索引与聚簇索引和非聚簇索引的主要区别在于数据的存储和访问方式：
> - 覆盖索引：它被称为“覆盖”，因为只需使用索引即可满足查询，而无需访问表数据本身。这可以使查询更快，因为它避免了访问表数据的需要，而是使用通常更小、更紧凑的索引数据
> - 聚簇索引：在聚簇索引中，数据行实际上被存储在索引中，因此每个表只能有一个聚簇索引。索引的顺序与磁盘上行的物理顺序相同。聚簇索引可以快速查找指定的数据行，但如果你需要在同一表上执行许多不同的查询，那么可能会受到限制，因为每个表只能有一个聚簇索引。
> - 非聚簇索引：非聚簇索引是一个单独的结构，与数据行分开存储。非聚簇索引包含索引键值和一个指向每个数据行实际位置的指针。在非聚簇索引中查找数据需要两个步骤：首先在索引中查找，然后使用索引中的指针访问数据行。因此，非聚簇索引的查询通常比聚簇索引要慢一些。

覆盖索引可以看作是非聚簇索引的一个特例，它不仅包含索引键值和数据行的指针，还包含查询所需的其他列的数据。所以，如果查询可以被一个覆盖索引满足，那么查询速度就会比一般的非聚簇索引要快，因为数据库系统不需要再访问数据行，所有需要的数据都在索引中。使用覆盖索引的好处就是，不需要查询出包含整行记录的所有信息，也就减少了大量的 I/O 操作。

使用覆盖索引的例子:

```sql
CREATE TABLE `tbl_user` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `age` int(11) NOT NULL,
  KEY `idx_name_age` (`name`,`age`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

SELECT `name`, `age` FROM `tbl_user` WHERE `name` = 'John' AND `age` = 30;
```
这里 (name, age) 组成了一个复合索引 idx_name_age,查询只需要name和age两列,所以这个查询可以使用覆盖索引,数据库只需要扫描索引,不需要访问表数据,所以查询效率高。

具体查询为：
```sql
SELECT `name`, `age` FROM `tbl_user` WHERE `name` = 'John' AND `age` = 30;
```
这个查询只需要name和age两个字段,而idx_name_age索引中就包含这两个字段,所以这个查询可以使用覆盖索引。
覆盖索引的查询语句应该是:

```sql
SELECT 
    idx_name_age.name, 
    idx_name_age.age
FROM tbl_user 
WHERE idx_name_age.name = 'John' AND idx_name_age.age = 30;
```

这里我们直接从idx_name_age索引中选取需要的字段,而不再访问表数据,所以这个查询使用了覆盖索引。
所以,一个查询要使用覆盖索引,需要满足两个条件:
1. 查询所需要的字段都存在于某个索引中
2. 查询语句直接从该索引中选取字段,而不再访问表数据

没使用覆盖索引的例子:

```sql
CREATE TABLE `tbl_user` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `age` int(11) NOT NULL,
  `address` varchar(100) NOT NULL,
  KEY `idx_name_age` (`name`,`age`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

SELECT `name`, `age`, `address` FROM `tbl_user` WHERE `name` = 'John' AND `age` = 30;
```
这里虽然有(name, age)的索引,但是由于查询需要的address字段不在该索引中,所以这个查询无法使用覆盖索引,需要访问表数据获取address字段,查询效率较低。


图示：
在没有使用覆盖索引，数据库查询数据是这样：
![](./giant_images/n1ql-query-workflow.png)

使用了覆盖索引避免了从数据服务中获取数据的额外步骤。这导致了相当大的性能改进。
![](./giant_images/n1ql-query-workflow-cover-idx.png)

> 参考文献：
> - https://stackoverflow.com/questions/62137/what-is-a-covered-index 什么是覆盖索引？
> - https://xiaolincoding.com/mysql/index/index_interview.html#按字段个数分类 覆盖索引优化-小林coding
> - https://stackoverflow.com/questions/609343/what-are-covering-indexes-and-covered-queries-in-sql-server 在SQL Server中什么是覆盖索引和覆盖查询？
> - https://docs.couchbase.com/server/current/n1ql/n1ql-language-reference/covering-indexes.html Covering Indexes
> - https://www.red-gate.com/simple-talk/databases/sql-server/learn/using-covering-indexes-to-improve-query-performance/ 使用覆盖索引以提高查询性能


## ♻️ JVM

### 堆是如何管理内存的（2023 快手）
1. **堆的划分**：在JVM中，堆被划分为年轻代（Young Generation）和老年代（Old Generation）。年轻代又被划分为Eden区和两个Survivor区（S0和S1）。新创建的对象首先在Eden区创建，当Eden区满时，会触发Minor GC进行垃圾回收。存活的对象会被移动到Survivor区，当Survivor区也满时，对象会被移动到老年代。当老年代满了，会触发Major GC或者Full GC。
2. **垃圾回收**：JVM通过垃圾回收机制自动回收不再使用的对象以释放内存。JVM的垃圾回收算法包括标记-清除、复制、标记-整理、分代收集等。
3. **内存分配**：当创建新对象时，JVM会在堆中为其分配内存。JVM有一个指针叫做TLAB（Thread Local Allocation Buffer），用于在特定的线程中分配对象，这样可以避免线程之间的竞争。如果对象很大，可能直接在老年代分配。
4. **堆大小调整**：JVM的堆大小可以动态调整，以适应程序的需求。可以通过启动参数设置最小堆大小（-Xms）和最大堆大小（-Xmx）。如果程序需要更多内存，堆可以扩展到最大堆大小；如果程序需要的内存减少，堆可以收缩到最小堆大小。

### 跨代引用问题怎么解决（2023 快手）
**跨代引用问题是指在JVM内存模型中，年轻代的对象引用老年代的对象，或者老年代的对象引用年轻代的对象**。这在垃圾回收时可能会导致一些问题，因为垃圾回收通常会针对年轻代和老年代分别进行。

为了解决这个问题，JVM引入了一个叫做 **"卡表"（Card Table）** 的数据结构。卡表的主要作用是快速找到老年代中被年轻代对象引用的对象，从而在进行Minor GC时，减少全堆扫描的开销。

> 卡表概览：卡表是Java虚拟机（JVM）中加速查找引用的一种辅助数据结构。表中每个条目对应于Java堆的一小部分，这里我称为小块。当老年代中的一个对象写入/更新对年轻代中的一个对象的引用时，这个操作会通过一种叫做写屏障的东西。当JVM看到这些写屏障时，它会更新卡片表中的相应条目。
> - 写屏障：垃圾收集器用来跟踪对象引用更改的一种机制。它是一段代码（JVM实现的），每当对象引用更新时就会运行。写屏障确保垃圾收集器可以跟踪堆中的所有引用，并确定哪些对象仍在使用，哪些没有。
> - 当写入屏障发现语句`some_obj.field = other_obj;`将年轻指针存储在旧对象中时，它会这样做：`card_table[(&old_obj - start_of_heap) >> K] = 1;`
> - 其中`&old_obj`是现在有一个年轻代指针的对象的地址（它已经在寄存器中，因为它刚刚被确定引用旧对象）。 在次要GC期间，垃圾收集器查看卡表以确定要扫描哪些堆区域以查找年轻指针。
> 	- for i from 0 to (heap_size >> K):
> 	- if card_table[i]: scan heap[i << K .. (i + 1) << K] for young pointers
> ![card-table](./giant_images/v2-8cec22d735be76cd4a140ac30513ca49_b.jpg)

卡表将老年代的内存分为多个小块（通常为512字节），每个小块对应卡表中的一项，当老年代中的某个小块内存**被修改时**（例如年轻代的对象引用了该小块中的某个对象），对应的卡表项就被标记为 **"脏（dirty）"** 。

在进行Minor GC（清理年轻代）时，JVM只需要检查标记为"脏"的卡表项对应的内存块，找出被年轻代对象引用的老年代对象，而无需扫描整个老年代。这样就大大提高了垃圾回收的效率。

至于**老年代的对象引用年轻代的对象，这在JVM的分代回收策略中是不推荐的，因为会增加垃圾回收的复杂性**。如果确实存在这种情况，一般需要在进行垃圾回收时，遍历老年代找到所有引用年轻代的对象，确保不会误删。

> 参考文献如下：
> - https://stackoverflow.com/questions/19154607/how-actually-card-table-and-writer-barrier-work 卡表和写屏障是如何工作的？
> - https://tschatzl.github.io/2022/02/15/card-table-card-size.html Card Table Card Size Shenanigans
> - https://www.mo4tech.com/jvm-card-table.html JVM Card Table
> - https://www.cnblogs.com/hongdada/p/12016020.html JVM-卡表（Card Table）
> - http://blog.ragozin.info/2011/06/understanding-gc-pauses-in-jvm-hotspots.html Alexey Ragozin

### 每次回收都要从GC ROOT开始吗（2023 快手）
是的，每次垃圾回收都会从GC Roots开始。GC Roots是垃圾回收算法开始工作的一组必要的"根"对象。

Java中可以作为GC Roots的对象包括：
1. 在虚拟机栈（栈帧中的本地变量表）中引用的对象。
2. 方法区中类静态属性引用的对象。
3. 方法区中常量引用的对象。
4. 本地方法栈中JNI（即一般说的Native方法）引用的对象。

垃圾回收器在对堆进行回收前，会先从GC Roots开始对堆中的对象进行可达性分析。只有当对象在GC Roots到该对象之间没有任何引用链可达时（换句话说，GC Roots到该对象不可达），这个对象才会被判定为可回收的垃圾对象。

这种通过GC Roots进行可达性分析的方式，保证了只有真正不再使用的对象会被回收，从而避免了错误地回收仍在使用的对象。


### 垃圾回收过程如何判断每个阶段已经完成，可以进入下一个阶段（2023 快手）
像是垃圾回收器如CMS（并发标记清除）和G1（Garbage-First）在进行垃圾回收时，会通过一系列的阶段来判断何时可以进入下一步。

CMS垃圾回收器：
CMS垃圾回收器主要包含以下四个阶段：
1. 初始标记（Initial Mark）：标记GC Roots能直接关联的对象，此阶段需要暂停所有的其他线程，但是时间通常较短。
2. 并发标记（Concurrent Mark）：进行GC Roots Tracing的过程，也就是从GC Roots开始对堆中的对象进行可达性分析，此阶段可以与用户线程并发执行。
3. 重新标记（Remark）：修正并发标记期间因用户程序继续运行而导致标记产生变动的那一部分标记记录，防止数据不一致，此阶段需要暂停所有的其他线程。
4. 并发清除（Concurrent Sweep）：清除不再使用的对象，此阶段可以与用户线程并发执行。
CMS在每个阶段完成后会判断是否可以进入下一阶段。例如，在并发标记阶段，当所有从GC Roots开始可达的对象都被标记后，就可以进入重新标记阶段。

G1垃圾回收器：
G1垃圾回收器将堆内存划分为多个小块（Region），每个小块可能属于Eden区、Survivor区或者Old区。G1的垃圾回收过程包括以下几个阶段：
1. 初始标记（Initial Mark）：标记所有的GC Roots能直接关联的对象，此阶段需要暂停所有的其他线程。
2. 并发标记（Concurrent Mark）：进行GC Roots Tracing的过程，此阶段可以与用户线程并发执行。
3. 最终标记（Final Mark）：修正并发标记期间因用户程序继续运行而导致标记产生变动的那一部分标记记录，此阶段需要暂停所有的其他线程。
4. 筛选回收（Cleanup）：首先统计各个Region的存活对象，并对Region进行排序，然后回收垃圾对象最多的Region。
类似地，G1在每个阶段完成后会判断是否可以进入下一阶段。例如，在并发标记阶段，当所有从GC Roots开始可达的对象都被标记后，就可以进入最终标记阶段。

总的来说，垃圾回收器在每个阶段的结束条件主要取决于当前阶段的任务是否完成，例如是否所有的对象都已经被标记，或者是否所有的垃圾都已经被清除。

## 💦算法汇总

1. [二叉树的公共祖先（2023 快手）](https://leetcode.cn/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof/)