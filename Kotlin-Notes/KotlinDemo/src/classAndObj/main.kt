package classAndObj

import kotlin.properties.Delegates

fun main() {
    val a:Person = Person("Joe Smith")
    println(a.children)

    println("Is 7 even? - ${isEven.accept(7)}")

    var list = mutableListOf(1, 2, 3)
    list.swap(0, 2)
    list.forEach {
        print("$it ")
    }

    // 如果一个类定义有一个成员函数与一个扩展函数，而这两个函数又有相同的接收者类型、 相同的名字，并且都适用给定的参数
    // 下面的前者打印method 后者打印function
    println()
    class Example {
        fun printFunctionType() { println("Class method") }
    }

//    fun Example.printFunctionType() { println("Extension function") }

    //    Example().printFunctionType()
    fun Example.printFunctionType(i: Int) { println("Extension function #$i") }

    Example().printFunctionType(1)

    // 扩展属性
    val list2: List<String> = listOf("123", "456")
    println(list.lastIndex)

    // 伴生对象扩展
    MyClass.printCompanion()

    // 可观察属性 Observable properties
    val user = User()
    user.name = "first"
    user.name = "second"

    // 委托给另一个属性
    val myClass3 = MyClass3()
    myClass3.oldName = 42
    println(myClass3.newName)

    // 将属性储存在映射中
    val user1 = User1(mapOf(
            "name" to "John Doe",
            "age" to 25
    ))
    println(user1.name)
    println(user1.age)
}

// 函数式（SAM）接口
fun interface IntPredicate {
    fun accept(i: Int): Boolean
}

val isEven = IntPredicate { it % 2 == 0 }

// 扩展函数
// 扩展不能真正的修改他们所扩展的类。通过定义一个扩展，并没有在一个类中插入新成员， 只不过是可以通过该类型的变量用点表达式去调用这个新函数
fun <T> MutableList<T>.swap(index1: Int, index2: Int) {
    val tmp = this[index1] // “this”对应该列表
    this[index1] = this[index2]
    this[index2] = tmp
}

// 可空接收者
fun Any?.toString(): String {
    if (this == null) return "null"
    // 空检测之后，“this”会自动转换为非空类型，所以下面的 toString()
    // 解析为 Any 类的成员函数
    return toString()
}

// 扩展属性
val <T> List<T>.lastIndex: Int
    get() = size - 1


// 伴生对象的扩展
class MyClass {
    companion object {} // 将被称为 "Companion"
}

fun MyClass.Companion.printCompanion() {
    println("Companion")
}

// 可观察属性 Observable properties
// 三个参数：被赋值的属性、旧值与新值
class User {
    var name: String by Delegates.observable("<no name>") {
        prop, old, new ->
        println("$old -> $new")
    }
}

// 委托给另一个属性
// 为将一个属性委托给另一个属性，应在委托名称中使用 :: 限定符，例如，this::delegate 或 MyClass::delegate。
var topLevelInt: Int = 0
class ClassWithDelegate(val anotherClassInt: Int)

class MyClass2(var memberInt: Int, val anotherClassInstance: ClassWithDelegate) {
    var delegatedToMember: Int by this::memberInt
    var delegatedToTopLevel: Int by ::topLevelInt

    val delegatedToAnotherClass: Int by anotherClassInstance::anotherClassInt
}
var MyClass2.extDelegated: Int by ::topLevelInt

class MyClass3 {
    var newName: Int = 0
    @Deprecated("Use 'newName' instead", ReplaceWith("newName"))
    var oldName: Int by this::newName
}

// 将属性储存在映射中
class User1(val map: Map<String, Any?>) {
    val name: String by map
    val age: Int     by map
}