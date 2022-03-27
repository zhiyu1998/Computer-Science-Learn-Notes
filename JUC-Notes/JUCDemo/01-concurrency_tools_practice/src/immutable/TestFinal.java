package immutable;

/**
 * 测试final是否能被修改
 */
public class TestFinal {

    public int test = 12;

    public static void main(String[] args) {

//        final Person person = new Person();
//        person = new Person(); // 此时不能更换引用
//        person.bag = "book";

//        Person person = new Person();
//        person.age = 19;
//        person.name = "Jack";


        final Person person =  new Person();
        person.testFinal.test = 20;
        System.out.println(person.testFinal.test);
        person.testFinal.test = 1000;
        System.out.println(person.testFinal.test);
    }
}
