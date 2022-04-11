package classAndObj

// 主构造函数
class Person(
        val name: String
) {

    val firstProperty = "First property: $name".also(::println)

    val secondProperty = "Second property: ${name.length}".also(::println)

    init {
        println("First initializer block that prints $name")
    }

    val children: MutableList<Person> = mutableListOf()

    // 如果类有一个主构造函数，每个次构造函数需要委托给主构造函数， 可以直接委托或者通过别的次构造函数间接委托。
    // 委托到同一个类的另一个构造函数用 this 关键字即可
    constructor(name: String, paraent: Person) : this(name) {
        paraent.children.add(this)
    }

    // 延迟初始化属性与变量: lateinit
    lateinit var test: String
}