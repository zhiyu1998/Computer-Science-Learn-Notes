# 获取子线程的执行结果

## Runnable的缺陷
* 不能返回一个返回值
* 也不能抛出checked Exception

可以看到只能try/catch进行捕获异常
```java
public class RunnableCantThrowsException {

    public static void main(String[] args) {
        Runnable runnable = () -> {
            try {
                throw new Exception();
            } catch (Exception e) {
                e.printStackTrace();
            }
        };
    }
}
```

