package collections.copyonwrite;

import java.util.Iterator;
import java.util.concurrent.CopyOnWriteArrayList;

/**
 * 演示CopyOnWriteArrayList可以在迭代过程中修改数组的内
 * 但是ArrayList不行
 */
public class CopyOnWriteArrayListDemo2 {

    public static void main(String[] args) {

        CopyOnWriteArrayList<Integer> list = new CopyOnWriteArrayList<>(new Integer[]{1, 2, 3});

        Iterator<Integer> itr1 = list.iterator();

        System.out.println(list);

        list.add(4);

        Iterator<Integer> itr2 = list.iterator();

        itr1.forEachRemaining(System.out::println);
        itr2.forEachRemaining(System.out::println);
    }
}
