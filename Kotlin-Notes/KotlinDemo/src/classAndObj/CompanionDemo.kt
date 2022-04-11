package classAndObj

interface Factory<T> {
    fun create(): T
}

class CompanionDemo {
    
    companion object : Factory<CompanionDemo>  {

        override fun create(): CompanionDemo {
            TODO("Not yet implemented")
        }
    }
}