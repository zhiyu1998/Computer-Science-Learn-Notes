# 容器学习

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

Method Reference

```java
 ArrayList<String> arr = new ArrayList<>();
arr.toArray(String[]::new);
```

