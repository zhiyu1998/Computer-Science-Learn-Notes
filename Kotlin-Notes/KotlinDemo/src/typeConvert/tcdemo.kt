package typeConvert

fun main() {

    val obj = "123dajskldjklas"

    if (obj !is String) return
    println(obj.length)

    if (obj is String) {
        println(obj.length)
    }

    if (obj !is String) {
        println("Not a String")
    } else {
        println(obj.length)
    }

    val x = "123"
    // `||` 右侧的 x 自动转换为 String
    if (x !is String || x.length == 0) return

    // `&&` 右侧的 x 自动转换为 String
    if (x is String && x.length > 0) {
        print(x.length) // x 自动转换为 String
    }

    // 智能转换适用场景
    /**
    val 局部变量——总是可以，局部委托属性除外。
    val 属性——如果属性是 private 或 internal，或者该检测在声明属性的同一模块中执行。智能转换不能用于 open 的属性或者具有自定义 getter 的属性。
    var 局部变量——如果变量在检测和使用之间没有修改、没有在会修改它的 lambda 中捕获、并且不是局部委托属性。
    var 属性——决不可能（因为该变量可以随时被其他代码修改）。
     */

    // 不安全转换
    val y: String = "123" as String

    // 为了让这样的代码用于可空值
    val z: String? = "4556" as String?

    // “安全的”（可空）转换操作符
    // as? 的右边是一个非空类型的 String，但是其转换的结果是可空的
    val x1: String? = "213" as? String


}

// 智能转换
fun demo(x: Any) {
    if (x is String) {
        println(x.length)
    }
}