package future;

import java.util.ArrayList;
import java.util.Random;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

/**
 * desc: 演示批量提交任务时，用List批量接收结果
 */
public class MultiFutures {

    public static void main(String[] args) throws InterruptedException {
        ExecutorService service = Executors.newFixedThreadPool(20);
        ArrayList<Future> futures = new ArrayList<>();
        for (int i = 0; i < 20; i++) {
            Future<Integer> future = service.submit(() -> {
                Thread.sleep(3000);
                return new Random().nextInt();
            });
            futures.add(future);
        }

        Thread.sleep(5000); // 20个线程一起并行执行，5s以后都已经执行完毕了，所以一起打印

        for (int i = 0; i < 20; i++) {
            Future<Integer> future = futures.get(i);

            try {
                Integer integer = future.get();
                System.out.println(integer);
            } catch (InterruptedException e) {
                e.printStackTrace();
            } catch (ExecutionException e) {
                e.printStackTrace();
            }
        }
    }
}
