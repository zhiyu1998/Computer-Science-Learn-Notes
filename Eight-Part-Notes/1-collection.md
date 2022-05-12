# 容器学习

> 常见面试题

* 请用Iterable实现一个随机序列产生器?
* Collection和Set的区别？
* Map是不是Collection?
* TreeMap和HashMap的区别？
* HashMap vs Hashtable？
* 实现Key-Value的LRU缓存？



> 代码示例

```java
public class RandomStringGenerator<T> implements Iterable<T> {

    private List<T> list;

    public RandomStringGenerator(List<T> list) {
        this.list = list;
    }

    @Override
    public Iterator<T> iterator() {

        return new Iterator<T>() {
            @Override
            public boolean hasNext() {
                return true;
            }

            @Override
            public T next() {
                return list.get((int) (list.size() * Math.random()));
            }
        };
    }

    public static void main(String[] args) {
        List<String> list = Arrays.asList("List", "Tree", "Array");
        RandomStringGenerator<String> gen = new RandomStringGenerator<>(list);

//        for (String s : gen) {
//            System.out.println(s);
//        }

        Iterator<String> it = gen.iterator();
        for (int i = 0; i < 100; i++) {
            System.out.println(it.next());
        }
    }
}
```



## 源代码阅读

进入collection代码中可以看到：`public interface Collection<E> extends Iterable<E>` 说明一般容器都是可以迭代的

* size
* isEmpty
* contains
* iterator
* toArray
* toArray(T[] a);
* ... 



转成数组举例

```java
ArrayList<String> arr = new ArrayList<>();
arr.add("123");
String[] strings = arr.toArray(new String[10]);
// or String[] strings = arr.toArray(new String[arr.size()]);
```

方法引用（Java8）

* 特性：惰性求值

```java
 ArrayList<String> arr = new ArrayList<>();
arr.toArray(String[]::new);
```



## Set

可以被浏览的被称为`NavigableSet`



【很少用到，直接学到】直接赋值`TreeSet`的写法：

```java
TreeSet<Integer> treeSet = new TreeSet<Integer>() {
    {
        add(x);
        add(7);
        add(2);
        add(81);
    }
};
```

甚至声明了x后可以访问前面和后面的元素

```java
Integer y = treeSet.lower(x);
System.out.println("y: " +  y);
Integer z = treeSet.higher(x);
System.out.println("z: " +  z);
//---------------------------
y: 2
z: 7
```



比较`TreeSet`和`HashSet`

```java
@Test
public void test_benchmark(){

    Random random = new Random();
    LinkedList<String> words = new LinkedList<>();
    for(int i = 0; i < 1000000; i++) {

        String word = random.ints(97, 123)
            .limit(12)
            .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
            .toString();

        words.add(word);
    }


    HashSet<String> hashSet = new HashSet<>();
    TreeSet<String> treeSet = new TreeSet<>();

    long start = System.currentTimeMillis();
    for(String w : words) {
        hashSet.add(w);
    }
    for(String w : words) {
        hashSet.contains(w);
    }
    System.out.println("hashSet time:" + (System.currentTimeMillis() - start));

    start = System.currentTimeMillis();
    for(String w : words) {
        treeSet.add(w);
    }
    for(String w : words) {
        treeSet.contains(w);
    }
    System.out.println("treeSet time:" + (System.currentTimeMillis() - start));
}
```

> hashSet time:233
> treeSet time:2507



##  HashSet Vs HashTable

HashMap允许null

HashTable不允许（dictionary不允许null key/value）



### LRU缓存实现

```java
package cn.zhiyucs.collection;

import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

public class LRUCache<K, V> implements Iterable<K> {

    int MAX = 3;

    LinkedHashMap<K, V> cache = new LinkedHashMap<>();

    public void cache(K key, V value) {
        if (cache.containsKey(key)) {
            // 如果有这个元素就删除，[下从左边插入这个元素]
            cache.remove(key);
        } else if (cache.size() >= MAX) {
            // cache的大小大于MAX，移除最左边元素
            var it = cache.keySet().iterator();
            var first = it.next();
            cache.remove(first);
        }
        // 插入这个元素
        cache.put(key, value);
    }


    @Override
    public Iterator<K> iterator() {

        var it = cache.entrySet().iterator();
        return new Iterator<K>() {
            @Override
            public boolean hasNext() {
                return it.hasNext();
            }

            @Override
            public K next() {
                return it.next().getKey();
            }
        };
    }

    public static void main(String[] args) {
        var lru = new LRUCache<String, Integer>();
        lru.cache("A", 1);
        lru.cache("B", 2);
        lru.cache("C", 3);
        lru.cache("D", 4);

        lru.cache("C", 10);
        System.out.println(
                "leave <-" +
                        StreamSupport.stream(lru.spliterator(), false)
                                .map(x -> x.toString())
                                .collect(Collectors.joining("<-"))
        );
    }
}

```

## 小结

* Map的本质？
* HashMap是什么？
* TreeSet是什么？
* 知识是简单的，但是理解到本质是困难的？思考：为什么简单的知识却很难理解到本质？
* Tree/HashTable/位运算/跳表
