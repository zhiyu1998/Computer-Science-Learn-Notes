package classAndObj


/** 型变
 * 这样的方法在Java中是行不通的，但是在kotlin中是可以告诉编译器
 * 参数 T 来确保它仅从 Source<T> 成员中返回（生产），并从不被消费。 为此请使用 out 修饰符
 * // Java
    void demo(Source<String> strs) {
    Source<Object> objects = strs; // ！！！在 Java 中不允许
    // ……
    }
 */
class OutAndOutDecorate {
}

// out
interface Source<out T> {
    fun nextT(): T
}

fun demo(strs: Source<String>) {
    val objects: Source<Any> = strs
}

// in
interface Comparable<in T> {
    operator fun compareTo(other: T): Int
}

fun demo(x: Comparable<Number>) {
    x.compareTo(1.0) // 1.0 拥有类型 Double，它是 Number 的子类型
    // 因此，可以将 x 赋给类型为 Comparable <Double> 的变量
    val y: Comparable<Double> = x
}