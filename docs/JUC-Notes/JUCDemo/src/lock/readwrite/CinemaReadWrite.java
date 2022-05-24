package lock.readwrite;

import java.util.concurrent.locks.ReentrantReadWriteLock;

public class CinemaReadWrite {
    private static ReentrantReadWriteLock lock = new ReentrantReadWriteLock();

    private static ReentrantReadWriteLock.ReadLock readLock = lock.readLock();

    private static ReentrantReadWriteLock.WriteLock writeLock = lock.writeLock();

    private static void read() {
        readLock.lock();
        try {
            System.out.println(Thread.currentThread().getName() + "得到了读锁，正在读取");
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        } finally {
            System.out.println(Thread.currentThread().getName() + " 释放读锁");
            readLock.unlock();
        }
    }

    private static void write() {
        writeLock.lock();
        try {
            System.out.println(Thread.currentThread().getName() + "得到了读锁，正在写入");
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        } finally {
            System.out.println(Thread.currentThread().getName() + " 释放写锁");
            writeLock.unlock();
        }
    }

    public static void main(String[] args) {
        new Thread(() -> read(), "Thread1").start();
        new Thread(() -> read(), "Thread2").start();
        new Thread(() -> write(), "Thread3").start();
        new Thread(() -> write(), "Thread4").start();
    }
}
