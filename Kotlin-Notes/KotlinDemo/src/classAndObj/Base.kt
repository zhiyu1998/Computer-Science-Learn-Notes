package classAndObj

/**
 * desc: 要使一个类可继承，请用 open 关键字标记它
 */
open class Base(p: Int) {
}

class Derived(p: Int) : Base(p)