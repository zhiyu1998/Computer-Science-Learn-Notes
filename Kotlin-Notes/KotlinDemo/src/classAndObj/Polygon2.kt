package classAndObj

/**
 * desc: 可以用一个抽象成员覆盖一个非抽象的开放成员。
 */
open class Polygon2 {
    open fun draw() {

    }
}

abstract class WildShape : Polygon2() {
    abstract override fun draw()
}
