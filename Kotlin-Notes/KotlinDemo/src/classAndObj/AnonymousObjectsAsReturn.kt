package classAndObj

/**
 * 对象表达式
 */
interface A {
    fun funFromA() {}
}

interface B

class AnonymousObjectsAsReturn {
    // 使用private修饰符而不是内联修饰符
    // 成员可以通过函数来访问
    private fun getObjectPri() = object {
        val x: String = "x"
    }

    // 使用的修饰符是public 或者是 private inline，成员函数式不可访问
    // 返回是 Any. x 是不可访问的
    fun getObject() = object {
        val x: String = "x"
    }

    // 如果在函数或属性的实际类型中声明了被覆盖的成员，则它们是可访问的
    fun getObjectA() = object: A {
        override fun funFromA() {}
        val x: String = "x"
    }

    // 返回是 B; funFromA() 和 x 是不能被访问的
    fun getObjectB(): B = object: A, B { // explicit return type is required
        override fun funFromA() {}
        val x: String = "x"
    }

    fun printX() {
        println(getObjectPri().x)
    }
}

fun main() {
    val test = AnonymousObjectsAsReturn()

    test.printX()

    test.getObjectA()


    test.getObjectA().funFromA()

//    test.getObjectB().funForm

}