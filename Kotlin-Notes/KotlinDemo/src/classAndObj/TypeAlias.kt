package classAndObj

class TypeAlias {

}

// 把 (T) -> (T) -> Boolean 换成了 Predicate<T>
typealias Predicate<T> = (T) -> Boolean


fun foo(p: Predicate<Int>) = p(42)

fun main() {
    val f: (Int) -> Boolean = { it > 0 }
    println(foo(f)) // 输出 "true"

    val p: Predicate<Int> = { it > 0 }
    println(listOf(1, -2).filter(p)) // 输出 "[1]"
}