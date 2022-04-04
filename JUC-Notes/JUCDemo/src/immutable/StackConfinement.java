package immutable;

/**
 * 描述：栈封闭的两种情况，基本变量和对象
 * 先演示线程争抢带来的错误结果，然后把变量放到方法内，情况就变了
 */
public class StackConfinement implements Runnable {

    int index = 0;

    public void inThread() {
        int neverGoOut = 0;

        for (int i = 0; i < 10000; i++) {
            neverGoOut++;
        }

        System.out.println("栈内保护的数字是线程安全的：" + neverGoOut);
    }

    @Override
    public void run() {
        for (int i = 0; i < 10000; i++) {
            index++;
        }
        inThread();
    }

    public static void main(String[] args) throws InterruptedException {
        StackConfinement r1 = new StackConfinement();
        Thread t1 = new Thread(r1);
        Thread t2 = new Thread(r1);
        t1.start();
        t2.start();
        t1.join();
        t2.join();
        System.out.println(r1.index);
    }
}
