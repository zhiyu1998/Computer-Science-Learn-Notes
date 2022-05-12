# Java8 Steam

## 简介

流：随着时间产生的数据序列

特点：

1. 支持函数式编程
2. 提供管道运算能力
3. 提供并行(parallel)计算能力
4. 提供大量的操作



管道计算过程：

![image-20220512204554007](images/image-20220512204554007.png)



## 基础用法

```java
@Test
public void test_mapfilter() {
    Stream.of(1, 2, 3, 4, 5, 6)
        .map(x -> x.toString())
        .map(x -> x + x)
        .map(x -> x + x + x)
        .map(Integer::parseInt)
        .forEach(x -> {
            System.out.println(x);
        });
}

@Test
public void test_mapfilterreduce() {
    var result = Stream.of(1,2,3,4,5,6)
        .map(x -> x * x)
        .filter(x -> x < 20)
        .reduce(Math::max);
    //        System.out.println(result.get());

    System.out.println(result.isPresent());
    System.out.println(result.orElseGet(() -> 0));
}
```



## 有状态和无状态

通过有状态和无状态可以分为

有状态：
sorted
skip
limit
任何触发状态变化的程序



无状态：

map
reduce

```java
@Test
public void test_sorted() {
    Stream.of(1, 3, 2, 24, 15, 66).sorted().forEach(x -> System.out.println(x));
}
```



## 纯函数

通过有无副作用可以分为

* 纯函数(pure function)
* 非纯函数

> 纯函数

```java
int add(int a, int b) {
    return a + b;
}
```

> 非纯函数

```java
int c = 0;
int add(int a, int b) {
    // Side effect
    c++;
    return a + b;
}
```



## 利用flatMap去重

```java
@Test
public void test_flatMap() {
    var set = Stream.of("My", "Mine")
        .flatMap(str -> str.chars().mapToObj(i -> (char) i))
        .collect(Collectors.toSet());
    System.out.println(set.stream().collect(Collectors.toList()));
}
```

