package future;

import java.util.concurrent.*;

/**
 * 演示FutureTask的用法
 */
public class FutureTaskDemo {

    public static void main(String[] args) {
        Task1 task = new Task1();
        FutureTask<Integer> futureTask = new FutureTask<>(task);
//        new Thread(futureTask).start();
        ExecutorService service = Executors.newCachedThreadPool();
        service.submit(futureTask);


        try {
            System.out.println("task运行结果：" + futureTask.get());
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        }
    }

    static class Task1 implements Callable<Integer> {

        @Override
        public Integer call() throws Exception {
            System.out.println("子线程正在计算");
            Thread.sleep(3000);
            int sum = 0;
            for (int i = 0; i < 100; i++) {
                sum += i;
            }
            return sum;
        }
    }
}
