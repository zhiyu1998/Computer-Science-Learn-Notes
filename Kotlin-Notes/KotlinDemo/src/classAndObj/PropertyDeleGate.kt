package classAndObj

import kotlin.reflect.KProperty

// 属性委托要求
/**
 * 只读属性（即 val 声明的），委托必须提供一个操作符函数 getValue()，该函数具有以下参数：
 * thisRef 必须与属性所有者类型（对于扩展属性必须是被扩展的类型）相同或者是其超类型。
 * property 必须是类型 KProperty<*> 或其超类型。
 */

/**
 * 对于一个可变属性（即 var 声明的），委托必须额外提供一个操作符函数 setValue()， 该函数具有以下参数：
 * thisRef 必须与属性所有者类型（对于扩展属性必须是被扩展的类型）相同或者是其超类型。
 * property 必须是类型 KProperty<*> 或其超类型。
 * value 必须与属性类型相同（或者是其超类型）。
 */

// 两函数都需要用 operator 关键字来进行标记
class PropertyDeleGate {

    operator fun getValue(thisRef : Any?, property: KProperty<*>): String {
        return "$thisRef, thank you for delegating '${property.name}' to me!"
    }

    operator fun setValue(thisRef: Any?, property: KProperty<*>, value: String) {
        println("$value has been assigned to '${property.name}' in $thisRef.")
    }
}

class Example {
    var p: String by PropertyDeleGate()
}

fun main() {
    // 当从委托到一个 Delegate 实例的 p 读取时，将调用 Delegate 中的 getValue() 函数。 它的第一个参数是读出 p 的对象、第二个参数保存了对 p 自身的描述 （例如可以取它的名称)
    val e = Example()
    println(e.p)
}