package immutable;

/**
 * 描述：final的方法
 */
public class FinalMethodDemo {

//    int a;
//
//    public final FinalMethodDemo(int a) {
//        this.a = a;
//    }

    public void drink() {

    }

    public final void eat() {

    }

    public static void sleep() {

    }
}

class SubClass extends FinalMethodDemo {


    @Override
    public void drink() {
        super.drink();
        eat(); // 可以调用
    }

//    @Override
//    public void eat() {
//
//    }

    // 和final不一样的是，子类可以写同名方法，而不是覆盖的意思
    // 因为static在创建的时候就绑定了这个方法，不是后期动态绑定，不属于重写，对于Java来说是两个不同的静态方法
    public static void sleep() {

    }
}
