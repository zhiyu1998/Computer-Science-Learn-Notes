package iteratorTest

fun main() {
    foo()

    println()

    foo2()

    println()

    foo3()

    println()

    foo4()
}

fun foo() {
    listOf(1,2,3,4,5).forEach lit@{
        if (it == 3) return@lit
        print(it)
    }
}

// 隐式标签
fun foo2() {
    listOf(1,2,3,4,5).forEach {
        if (it == 3) return@forEach
        print(it)
    }
}

// 匿名函数替代 lambda 表达式
fun foo3() {
    listOf(1,2,3,4,5).forEach ( fun(value: Int) {
        if (value == 3) return
        print(value)
    } )
}

// break 的直接等价形式
fun foo4() {
    run loop@ {
        listOf(1,2,3,4,5).forEach {
            if (it == 3) return@loop
            print(it)
        }
    }
}