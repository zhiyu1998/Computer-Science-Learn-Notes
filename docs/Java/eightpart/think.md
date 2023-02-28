# 基于面试题的一些思考

## Java的native关键字
Java的native关键字用于表示一个方法的实现是由底层的本地代码（通常是C或C++）提供的，而不是Java代码实现的。因此，该方法的实现在编译时并不会被包含在生成的Java字节码中。

在使用native关键字声明一个方法时，该方法只包含方法签名，而没有方法体。例如：

```java
public native void myMethod();
```

这里的myMethod()方法只有方法签名，没有方法体。实际的方法实现将由本地代码提供。

使用native关键字可以方便地与底层系统进行交互，例如使用本地库、操作系统API或硬件。但需要注意的是，使用本地代码会牺牲一些Java语言的优势，例如跨平台性、类型安全性和自动内存管理。因此，应该仔细考虑是否真正需要使用native关键字来实现特定的功能。

### native里面的代码也是Java写吗还是C
native关键字表示一个方法的实现是由底层的本地代码提供的，而不是Java代码实现的。因此，native方法的实现通常是由C、C++或其他本地语言编写的。

在Java中，native方法的声明只是一种协议，告诉编译器该方法的实现将由外部本地代码提供。在运行时，Java虚拟机会根据方法的签名在本地库中查找对应的实现，并调用它来完成该方法的功能。

例如，如果我们有以下的native方法声明：

```java
public native void myMethod();
```
则需要在本地库中提供对应的实现，例如C语言的实现可以是：

```c
#include <stdio.h>
#include "MyClass.h"

JNIEXPORT void JNICALL Java_MyClass_myMethod(JNIEnv *env, jobject obj) {
printf("Hello, world!\n");
}
```
这个C语言函数与Java方法签名匹配，并使用了JNIEXPORT和JNICALL宏来声明它是一个本地实现。在编译和链接这个本地库时，需要使用特殊的编译器和链接器选项，以便在运行时将它与Java代码连接起来。

需要注意的是，Java和本地语言之间的交互涉及到跨语言调用，需要遵循特定的调用约定和内存管理规则，因此需要仔细编写本地代码，以确保正确性和可靠性。

### 例子Java_MyClass_myMethod我能理解为在MyClass类内的myMethod方法吗，前面的Java是必须的吗？
Java_MyClass_myMethod是一个本地方法的函数名，它的命名规则通常遵循以下格式：
```java
Java_全限定类名_方法名
```
其中，全限定类名是指该本地方法所属的Java类的完整限定名（即包名+类名），使用下划线替代了点号。如果该方法是一个实例方法，则在类名之后加上下划线和字符串1，表示该方法的第一个参数是jobject类型的实例对象。

因此，在我们的例子中，假设myMethod()方法是在MyClass类中声明的，全限定类名应该是MyClass。Java_MyClass_myMethod表示的就是MyClass.myMethod()方法的本地实现函数名。

至于前面的Java_前缀，它是必须的，因为它是一种约定，用于区分Java类的完整限定名和本地方法的函数名。这样做可以避免函数名冲突和歧义。