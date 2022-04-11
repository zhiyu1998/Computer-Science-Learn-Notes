package classAndObj

/**
 * 委托
 * 类语法：class <类名>(b : <基础接口>) : <基础接口> by <基础对象>
 * 属性：val/var <属性名> : <类型> by <基础对象>
 *
 */
interface Base1 {
    fun print()
}

class Base1Impl(val x: Int) : Base1 {
    override fun print() {
        print(x)
    }
}

// Derived 的超类型列表中的 by-子句表示 b 将会在 Derived 中内部存储， 并且编译器将生成转发给 b 的所有 Base 的方法
class Derived1(base1: Base1) : Base1 by base1

class DeleGate {

}

fun main(args: Array<String>) {
    val b = Base1Impl(10)
    Derived1(b).print()

    // 局部变量也可以声明委托
    val lazyValue: String by lazy {
        println("Lazy Init Completed!")
        "Hello World."
    }

    if (true/*someCondition*/) {
        println(lazyValue) // 首次调用
        println(lazyValue) // 后续调用
    }
}