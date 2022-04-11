package classAndObj

interface MyInterface {
    val prop: Int

    val propertyWithImplementation: String
        get() = "foo"

    fun bar()
    fun foo() {
        print(prop)
    }
}