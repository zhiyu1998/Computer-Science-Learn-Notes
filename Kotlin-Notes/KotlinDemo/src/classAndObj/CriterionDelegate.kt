package classAndObj

class CriterionDelegate {
}

fun main() {
    //  第一次调用 get() 会执行已传递给 lazy() 的 lambda 表达式并记录结果。 后续调用 get() 只是返回记录的结果
    val lazyValue: String by lazy {
        println("computed!")
        "Hello"
    }

    println(lazyValue)
    println(lazyValue)
}