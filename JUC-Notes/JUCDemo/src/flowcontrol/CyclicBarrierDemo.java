package flowcontrol;

import java.util.concurrent.BrokenBarrierException;
import java.util.concurrent.CyclicBarrier;

/**
 * desc: 演示CyclicBarrier
 */
public class CyclicBarrierDemo {

    public static void main(String[] args) {
        CyclicBarrier barrier = new CyclicBarrier(5, new Runnable() {
            @Override
            public void run() {
                System.out.println("所有人都到场，大家一起出发");
            }
        });

        for (int i = 0; i < 10; i++) {
            new Thread(new Task1(i, barrier)).start();
        }
    }

    static class Task1 implements Runnable {
        private int id;
        private CyclicBarrier barrier;

        public Task1(int id, CyclicBarrier barrier) {
            this.id = id;
            this.barrier = barrier;
        }

        @Override
        public void run() {
            System.out.println("线程" + id + "现在前往集合地点");
            try {
                Thread.sleep((long) (Math.random() * 10000));
                System.out.println("线程" + id + "到了集合地点，开始等待其他人到达");
                barrier.await();
                System.out.println("线程" + id + "出发了");
            } catch (InterruptedException e) {
                e.printStackTrace();
            } catch (BrokenBarrierException e) {
                e.printStackTrace();
            }
        }
    }
}
