package future;

import java.util.concurrent.*;

/**
 * 演示get的超时方法，调用future.cancel
 * 演示cancel传入true和FALSE的区别，代表是否中断当前正在执行的任务
 *
 * 演示结果：cancel传入true，会被中断
 * 传入false，会超时
 */
public class Timeout {

    private static final Ad DEFAULT_AD = new Ad("无网络时候的默认广告");
    private static final ExecutorService exec = Executors.newFixedThreadPool(10);

    static class Ad {
        String name;

        public Ad(String name) {
            this.name = name;
        }

        @Override
        public String toString() {
            return "Ad{" +
                    "name='" + name + '\'' +
                    '}';
        }
    }

    static class FetchAdTask implements Callable<Ad> {

        @Override
        public Ad call() throws Exception {
            try {
                Thread.sleep(3000);
            } catch (InterruptedException e){
                System.out.println("sleep期间被中断了");
                return new Ad("被中断时候的默认广告");
            }
            return new Ad("旅游订票哪家强？找某程");
        }
    }

    public void printAd() {
        Future<Ad> future = exec.submit(new FetchAdTask());

        Ad ad;

        try {
            ad = future.get(2000, TimeUnit.SECONDS);
        } catch (ExecutionException e) {
            ad = new Ad("被中断时候的默认广告");
        } catch (InterruptedException e) {
            ad = new Ad("异常时候的默认广告");
        } catch (TimeoutException e) {
            ad = new Ad("超时时候的默认广告");
            System.out.println("超时，未获取到广告");
            boolean cancel = future.cancel(true);
            System.out.println("cancel的结果:" + cancel);
        }

        exec.shutdown();
        System.out.println(ad);
    }

    public static void main(String[] args) {
        Timeout timeout = new Timeout();
        timeout.printAd();
    }
}
