package threadpool;

import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

public class ShutDown {

    public static void main(String[] args) throws InterruptedException {
        ExecutorService exectorService = Executors.newFixedThreadPool(10);
        for (int i = 0; i < 100; i++) {
            exectorService.execute(new ShutDownTask());
        }
        Thread.sleep(1500);
        List<Runnable> runnables = exectorService.shutdownNow();
//        exectorService.shutdown();
//        boolean b = exectorService.awaitTermination(5L, TimeUnit.SECONDS);
//        System.out.println(b);
//        System.out.println(exectorService.isShutdown());
//        System.out.println(exectorService.isTerminated());
//        Thread.sleep(10000);
//        System.out.println(exectorService.isTerminated());
//        exectorService.execute(new ShutDownTask());
    }
}

class ShutDownTask implements Runnable {
    @Override
    public void run() {
        try {
            Thread.sleep(500);
            System.out.println(Thread.currentThread().getName());
        } catch (InterruptedException e) {
            System.out.println(Thread.currentThread().getName() + "被中断了");
        }
    }
}