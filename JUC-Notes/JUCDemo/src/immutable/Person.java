package immutable;

/**
 * 描述：不可变对象，演示其他类无法修改这个对象，public也不行
 */
public class Person {

    final int age = 18;
    final String name = "Alice";
    final TestFinal testFinal = new TestFinal();
}
