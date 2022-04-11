package basic

import java.io.File

fun main(args: Array<String>) {
    // 输出
    println("Hello!")

    // 函数
    println(sum(3, 5))

    println("sum of 19 and 23 is ${sum2(19, 23)}")

    // void 函数
    printSum(-1, 8)

    // 常量
    val a: Int = 1
    val b = 2
    val c: Int
    c = 3

    println("a = $a, b = $b , c = $c")

    // 变量
    var x = 5
    x += 1
    println("x = $x")

    // 条件表达式
    println("max of 0 and 42 is ${maxOf(0, 42)}")

    // for
    val items = listOf("apple", "banana", "kiwifruits")
    for (item in items) {
        print("$item ")
    }
    println()

    // for with index
    for (index in items.indices) {
        println("item at $index is ${items[index]}")
    }

    // while
    var index = 0
    while (index < items.size) {
        println("item at $index is ${items[index]}")
        index++
    }

    // when
    println(describe(1))
    println(describe("Hello"))
    println(describe(1000L))
    println(describe(2))
    println(describe("other"))

    // range
    val z = 10
    val y = 9
    if (z in 1..y + 1) {
        println("fits in range")
    }

    for (x in 1..5) {
        print("$x ")
    }

    println()

    for (x in 1..10 step 2) {
        print("$x ")
    }
    println()
    for (x in 9 downTo 0 step 3) {
        print("$x ")
    }

    // 集合
    println()
    val sets = setOf("apple", "apple", "banana", "kiwifruit")
    for (s in sets) {
        println(s)
    }

    // filter & map
    val fruits = listOf("banana", "avocado", "apple", "kiwifruit")
    fruits
        .filter { it.startsWith("a") }
        .sortedBy { it }
        .map { it.uppercase() }
        .forEach { print("$it ") }

    // 空值与空检测
    parseInt("")

    // 类型检测与自动类型转换: is 操作符检测一个表达式是否某类型的一个实例
    println()
    fun printLength(obj: Any) {
        println("Getting the length of '$obj'. Result: ${getStringLength(obj) ?: "Error: The object is not a string"} ")
    }

    printLength("Incomprehensibilities")
    printLength(1000)
    printLength(listOf(Any()))


    // if-not-null 缩写
    val files = File("Test").listFiles()
    println(files?.size) // 如果 files 不是 null，那么输出其大小（size）

    // if-not-null-else 缩写
    println(files?.size ?: "empty") // 如果 files 为 null，那么输出“empty”

    val filesSize = files?.size ?: run {
        return
    }

    println()
    arrayOfMinusOnes(10).forEach { print("$it") }
}

// 函数
fun sum(a: Int, b: Int): Int {
    return a + b
}

// 简化函数
fun sum2(a: Int, b: Int) = a + b

// 返回无意义的值的函数, Unit 返回类型可以省略。
fun printSum(a: Int, b: Int): Unit {
    println("sum of $a and $b is ${a + b}")
}

fun maxof(a: Int, b: Int) = if (a > b) a else b

fun describe(obj: Any): String =
        when (obj) {
            1 -> "One"
            "Hello" -> "Greeting"
            is Long -> "Long"
            !is String -> "Not a string"
            else -> "Unknown"
        }

// 当可能用 null 值时，必须将引用显式标记为可空。可空类型名称以问号（?）结尾
fun parseInt(str: String): Int? {
    return str.toIntOrNull()
}


fun getStringLength(obj: Any): Int? {
    if (obj is String) {
        return obj.length
    }

    return null
}

// 返回类型为 Unit 的方法的构建器风格用法
fun arrayOfMinusOnes(size: Int): IntArray {
    return IntArray(size).apply { fill(-1) }
}
