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

## Java11特性
概览：
1. 局部变量类型推断：Java 11允许在局部变量声明时使用var关键字，自动推断变量类型。
2. HTTP Client API：Java 11引入了新的HTTP客户端API，该API提供了更简单、更灵活的方式来执行HTTP请求。
3. ZGC垃圾收集器：Java 11引入了一个新的垃圾收集器ZGC，它是一种低延迟、高吞吐量的收集器，适用于大型内存应用程序。
4. Epsilon垃圾收集器：Java 11还引入了另一种垃圾收集器Epsilon，它是一种无操作的垃圾收集器，适用于那些不需要垃圾收集的应用程序。
5. Unicode 10支持：Java 11支持Unicode 10，包括新的字符和符号。
6. Nest-based Access Control：Java 11引入了嵌套式访问控制，这使得内部类和外部类之间的访问更加安全和可控制。
7. 针对JVM的动态类文件常量API：Java 11引入了一个新的API，允许在运行时动态修改类文件常量池。
8. 其他改进：Java 11还包括了一些小的改进，包括更快的字符串操作、更好的随机数生成器、更好的Javadoc工具等。

### 例子
1. 局部变量类型推断：
   在Java 11之前，声明变量时需要显式指定变量类型，例如：

```java
List<String> list = new ArrayList<>();
```

而在Java 11中，可以使用var关键字进行类型推断，例如：

```java
var list = new ArrayList<String>();
```

2. HTTP Client API：
   Java 11引入了新的HTTP客户端API，可以通过以下方式使用：

```java
HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder().uri(URI.create("http://example.com")).GET().build();
HttpResponse < String > response = client.send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());
```
相比于以前的HTTP客户端API，这种方式更加简单和灵活。

3. ZGC垃圾收集器：
   ZGC是Java 11中引入的一种新的垃圾收集器，可以通过以下方式启用：
   ```java-Xmx16g -XX:+UnlockExperimentalVMOptions -XX:+UseZGC```
   ZGC可以在毫秒级别内实现大型内存应用程序的垃圾收集，比传统的垃圾收集器更加高效。

4. Epsilon垃圾收集器：
   Epsilon是Java 11中引入的另一种垃圾收集器，可以通过以下方式启用：
   ```java-XX:+UnlockExperimentalVMOptions -XX:+UseEpsilonGC```
   Epsilon是一种无操作的垃圾收集器，适用于那些不需要垃圾收集的应用程序。

5. Unicode 10支持：
   Java 11支持Unicode 10，包括新的字符和符号。例如，Java 11中可以使用以下代码将带有Emoji表情的字符串转换为UTF-8编码：
```java
String s = "Hello, 🌎!";

byte[] bytes = s.getBytes(StandardCharsets.UTF_8);
```

6. Nest-based Access Control：

Java 11引入了嵌套式访问控制，可以通过以下方式使用：

```java
class Outer
{
    private int x;
    class Inner
    {
        void foo(Outer outer)
        {
            outer.x = 42;
        }
    }
}
```
使用嵌套式访问控制可以更加安全和可控制地访问内部类和外部类之间的成员。

7. 针对JVM的动态类文件常量API：
   Java 11引入了一个新的API，允许在运行时动态修改类文件常量池。例如，可以使用以下代码向类文件常量池中添加一个新的字符串常量：
```java
ClassFileTransformer transformer = new ClassFileTransformer()
{
    @Override public byte[] transform(ClassLoader loader, String className, Class <? > classBeingRedefined, ProtectionDomain protectionDomain, byte[] classfileBuffer) throws IllegalClassFormatException
    {
        ClassReader reader = new ClassReader(classfileBuffer);
        ClassWriter writer = new ClassWriter(reader, ClassWriter.COMPUTE_MAXS);
        ConstantPoolRemapper remapper = new ConstantPoolRemapper(writer)
        {
            @Override public int mapInvokeDynamicType(String name)
            {
                if(name.equals("myString"))
                {
                    return super.mapInvokeDynamicType(name) + 1;
                }
                return super.mapInvokeDynamicType(name);
            }
        };
        reader.accept(new ClassRemapper(remapper, null), 0);
        return writer.toByteArray();
    }
};
```

8. 其他改进：
   Java 11还包括了一些小的改进，例如：
- String类的strip()方法可以去除字符串开头和结尾的空格。
- Random类的新方法nextInt(int bound)可以生成指定范围内的随机整数。
- Javadoc工具现在支持HTML5输出，并且可以生成搜索索引和导航栏。

## Java17
1. Sealed Classes：允许类和接口受限地继承/实现，以保护类的层次结构和 API 的稳定性。
2. Switch 表达式扩展：允许在 switch 表达式中使用多行文本块和箭头表达式。
3. 在本地变量中使用Lambda表达式：允许在本地变量中使用Lambda表达式。
4. 基本数据类型的“ and ”，“ or ”和“ xor ”操作：提供了用于执行按位逻辑运算的标准库函数。
5. JFR 事件流：允许将 JFR 事件输出到文件或流，以进行分析或发送到其他应用程序中进行实时处理。
6. 线程本地握手（Thread-Local Handshakes）：允许线程在某些事件发生时执行代码。
7. Elastic Metaspace：Metaspace 可以通过限制大小而不是扩展内存来避免 OutOfMemoryError。
   这些是 Java 17 中的新特性，它们扩展了 Java 语言和运行时环境的功能。

### 例子
1. Sealed Classes：Sealed classes 允许您控制一个类及其子类可以被继承的完整列表，这有助于确保代码的安全性和稳定性。这种类型的封闭类通常在框架中很有用，例如在一个框架中，您可能想限制哪些类可以实现/继承您的抽象类或接口。下面是一个 sealed class 的示例：
```java
public abstract sealed class Vehicle permits Car, Truck, Motorcycle {
    // ...
}

public final class Car extends Vehicle {
    // ...
}

public final class Truck extends Vehicle {
    // ...
}

public final class Motorcycle extends Vehicle {
    // ...
}

```
在这个示例中，类 Vehicle 是一个抽象封闭类。它具有 permits 子句，该子句指定此类允许哪些子类。在这个例子中，permitted 子类是 Car、Truck 和 Motorcycle。

2. Switch 表达式扩展：Java 17 的新 switch 表达式扩展提供了以下新功能：

* 允许在 switch 表达式中使用多行文本块
* 允许在 case 语句中使用多个分支标签
* 允许使用箭头语法 => 来代替 case 关键字

以下是一个使用上述新功能的示例：
```java
switch (day) {
    case "Monday", "Tuesday", "Wednesday", "Thursday" -> System.out.println("Weekday");
    case "Friday" -> System.out.println("TGIF");
    case "Saturday", "Sunday" -> {
        System.out.println("Weekend");
        System.out.println("Time to relax");
    }
    default -> throw new IllegalArgumentException("Invalid day of the week: " + day);
}

```
在这个示例中，switch 表达式使用多个分支标签和箭头语法来简化代码。

3. 在本地变量中使用 Lambda 表达式：Java 17 现在允许在本地变量中使用 Lambda 表达式。例如：
```java 
Runnable runnable = () -> System.out.println("Hello, World!");
```
这段代码定义了一个有一个抽象方法的接口 Runnable，并在本地变量 runnable 中使用 Lambda 表达式来实现这个方法。Lambda 表达式可以是一个代码块或一个单一表达式。

4. 基本数据类型的 “and”、“or” 和 “xor” 操作：Java 17 提供了一组新的标准库函数，用于执行按位逻辑操作：and、or 和 xor。
```java
int result = Integer.bitwiseAnd(0b1010, 0b1100); // result = 0b1000
```
在这个示例中，位运算 and（&）将二进制数字 0b1010 和 0b1100 进行按位与运算，并将结果存储在变量 result 中。

5. FR 事件流：Java 17 允许将 JFR（Java Flight Recorder）事件输出到文件或流，以进行分析或发送到其他应用程序中进行实时处理。
   例如，您可以使用以下代码将 JFR 事件输出到文件：
```java
Path outputFile = Paths.get("my-events.jfr");

try (var stream = new FileOutputStream(outputFile.toFile())) {
    EventStream eventStream = EventStream.getOracleEventStream();
    eventStream.dump(stream);
}
```

6. 线程本地握手（Thread-Local Handshakes）：线程本地握手是一种在某些事件发生时执行代码的机制。
   例如，您可以使用线程本地握手来帮助优化垃圾回收：
```java
ThreadLocalHandshakes.withThreadLocalHandshakes(() -> {
    // run garbage collection here
    System.gc();
});
```
这个例子演示了如何在执行垃圾回收之前运行一些代码。

7. Elastic Metaspace：Java 17 引入了 Elastic Metaspace，这意味着 Metaspace 可以通过限制大小而不是扩展内存来避免 OutOfMemoryError。
   例如，JVM 将不再默认扩展 Metaspace，而是在达到限制时开始垃圾回收或抛出 OutOfMemoryError。
   这些是 Java 17 中的主要新特性及其示例。

### 关于泛型的一些理解

#### 解释下这三个T分别代表什么意思？

```java
public static <T> T copy(Class<T> clazz, Object source) {
	if (source == null) {
		return null;
	}
	T obj = null;
	try {
		obj = clazz.newInstance();
	} catch (Exception e) {
		e.printStackTrace();
		return null;
	}
	BeanUtils.copyProperties(source, obj);
	return obj;
}

```
**初步解释**：当我们声明泛型类型参数时，需要在尖括号中使用一个标识符来表示该参数。通常情况下，这个标识符是单个大写字母，通常使用T、E、K和V等。

在Java方法签名中，我们可以使用泛型类型参数来指定方法的返回类型或参数类型。例如，在`public static <T> T copy(Class<T> clazz, Object source) `方法中，`<T>`是泛型类型参数的声明部分，用于指定该方法将接受一个Class对象和一个Object对象作为参数，并返回一个与clazz参数指定的类相同类型的对象。

而第二个T则是泛型类型参数所代表的的实际类型，即在调用此方法时，T将被替换成实际的类型。在copy方法中，T的实际类型由参数clazz指定，因此方法会根据传入的clazz参数创建一个clazz类型的对象，并返回该对象。

总之，`<T>`是泛型类型参数的声明部分，用于指定方法将接受和返回什么类型，而T则是泛型类型参数所代表的实际类型。
 


#### 进一步思考：如果没有`<T>`可以吗？
如果在编译器中不带`<T>`，那么就会报错：`Cannot resolve symbol 'T'`
```java
public T test(Class clazz) {
	T obj = null;
	try {
		obj = clazz.newInstance();
	} catch (Exception e) {
		e.printStackTrace();
	}
	return obj;
}
```

#### `<T>`就是接收参数的类型吗
这里的接收参数指的是：`Class<T> clazz, Object source`
`<T>`不是接收参数的类型，它实际上是一种声明泛型类型参数的方式。在Java中，使用尖括号指定一个或多个泛型类型参数，并将其用于方法签名、类定义或接口定义中。

在`public static <T> T copy(Class<T> clazz, Object source)`这个方法中，`<T>`指定了一个泛型类型参数，该参数可以随意替换成具体的类型。在调用该方法时，我们需要传递一个Class`<T>`类型的clazz参数和一个Object类型的source参数。然后，根据clazz参数指定的类型创建一个新对象，并将source对象的属性值复制到新对象中。

这里的T并不是一个具体的类型，而是声明方法所接受和返回的类型参数的占位符。在调用该方法时，T会被替换成具体的类型，以告诉编译器如何解析该方法的参数和返回值类型。

#### 方法中的static `<T>`中的`<T>`，与Class`<T>` clazz中的`<T>`是同一个意思吗

static `<T>`和Class`<T>`中的`<T>`并不是相同的意思。在Java中，`<T>`或其他标识符（如E、K、V等）用于声明泛型类型参数。通过使用泛型类型参数，我们可以编写更通用、可重用的代码，以处理不同类型的数据。

在`public static <T> T copy(Class<T> clazz, Object source)`方法中，`<T>`声明了一个名为T的泛型类型参数。它指示该方法将接受一个Class`<T>`类型的clazz参数，并返回一个T类型的对象。这里的`<T>`与后面的Class`<T>`是独立的定义，它们只是两个使用了相同标识符名称的不同类型声明而已。

#### 为什么不能写成static T `<T>`
如果尝试将方法签名写成`static T <T>`, 则会出现语法错误，因为在Java中，使用尖括号来声明泛型类型参数，不能将其放在返回类型之前。正确的方法声明应该是 `static <T> T copy(Class<T> clazz, Object source)`，即在返回类型之前使用尖括号声明泛型类型参数T。

#### static `<T>`中T声明了T的泛型类型参数，Class`<T>`才能接收一个为T类型的clazz吗
在声明`static <T> T copy(Class<T> clazz, Object source)`方法时，`<T>`是泛型类型参数的声明部分，用于指定该方法将接受一个Class对象和一个Object对象作为参数，并返回一个与clazz参数指定的类相同类型的对象。

同时，在方法的第一个参数中，clazz是一个Class`<T>`类型的参数，表示clazz参数传递的Class对象是T类型的。这里的T是在方法签名中声明的泛型类型参数，它可以在方法调用时被替换成实际的类型。因此，clazz参数将始终是一个Class对象，其类型与T相同。

通过使用泛型类型参数T，我们可以定义一个通用的方法，它能够接受不同类型的Class对象作为参数，并返回相应类型的对象。这使得我们的代码更加灵活和通用，可以处理多种类型的数据。
 
#### 总结
在声明泛型方法的时候，尤其返回类型是泛型的时候，需要声明`<T>`
* 第一个`<T>`
* Class`<T>`
```java
public <T> T test(Class<T> clazz) {
	T obj = null;
	try {
		obj = clazz.newInstance();
	} catch (Exception e) {
		e.printStackTrace();
	}
	return obj;
}
```
进一步说明，如果T改成其他的例如String是没有问题的，与泛型类型参数没有关系
```java
public <T> String test(Class<T> clazz) {
	T obj = null;
	try {
		obj = clazz.newInstance();
	} catch (Exception e) {
		e.printStackTrace();
	}
	return "13";
}
```
进一步说明，如果有两个泛型类型参数
* 第一个`<S, T>`是需要两种泛型类型参数
* List`<T>`说明返回的类型是T类型
* `List<S> sources` 是第一种类型
* `Supplier<T> target` 是第二种类型
```java
public static <S, T> List<T> copyListProperties(List<S> sources, Supplier<T> target, BeanCopyUtilCallBack<S, T> callBack) {
	List<T> list = new ArrayList<>(sources.size());
	for (S source : sources) {
		T t = target.get();
		copyProperties(source, t);
		list.add(t);
		if (callBack != null) {
			// 回调
			callBack.callBack(source, t);
		}
	}
	return list;
}
```