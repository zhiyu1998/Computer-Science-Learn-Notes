package lock.lock;

import java.util.concurrent.atomic.AtomicInteger;

public class PessimismOptimisticLock {

    int a;

    public static void main(String[] args) {
        AtomicInteger aoi = new AtomicInteger();
        aoi.incrementAndGet();
    }

    public synchronized void testMethod() {
        a++;
    }
}
