package future;

import java.util.Random;
import java.util.concurrent.*;

/**
 * desc: 演示一个Future的使用方法
 * 快捷键技巧 快速生成变量： ctrl + alt + v
 * 快捷键技巧 把变量提到外面： ctrl + alt + f
 */
public class OneFuture {

    public static void main(String[] args) {

        ExecutorService service = Executors.newFixedThreadPool(10);
        Future<Integer> future = service.submit(new CallableTask());
        try {
            System.out.println(future.get());
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        }
        service.shutdown();
    }

    static class CallableTask implements Callable<Integer> {

        @Override
        public Integer call() throws Exception {
            Thread.sleep(3000);
            return new Random().nextInt();
        }
    }
}
