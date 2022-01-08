package main

import (
	"fmt"
)

/**
/bin：包含可执行文件，如：编译器，Go 工具
/doc：包含示例程序，代码工具，本地文档等
/lib：包含文档模版
/misc：包含与支持 Go 编辑器有关的配置文件以及 cgo 的示例
/os_arch：包含标准库的包的对象文件（.a）
/src：包含源代码构建脚本和标准库的包的完整源代码（Go 是一门开源语言）
/src/cmd：包含 Go 和 C 的编译器和命令行脚本
*/

func getNumber() int {
	return 2
}

func main() {
	fmt.Println("Hello Golang")

	// 常量 (隐式定义)
	const Pi = 3.14159
	// 显示定义
	const Pi2 float32 = 3.141592

	// 一个没有指定类型的常量被使用时，会根据其使用环境而推断出它所需要具备的类型。
	// 换句话说，未定义类型的常量会在必要时刻根据上下文来获得相关类型
	var n int
	var n1 = n + 5
	println(n1)

	// 因为在编译期间自定义函数均属于未知，因此无法用于常量的赋值，但内置函数可以使用，如：len()
	//const c2 = getNumber()
	// 正确做法是
	const c2 = 2 / 3

	// 数字型的常量是没有大小和符号的，并且可以使用任何精度而不会导致溢出
	const Ln2 = 0.693147180559945309417232121458176568075500134360255254120680009
	println(Ln2)
	const Log2E = 1 / Ln2
	println(Log2E)

	// 枚举
	const (
		Unknown = 0
		Female  = 1
		Male    = 0
	)

	// iota 可以被用作枚举值，第一个 iota 等于 0，每当 iota 在新的一行被使用时，它的值都会自动加 1
	//const (
	//	a = iota
	//	b = iota
	//	c = iota
	//	d = iota
	//	e = iota
	//)
	//println(a, b, c, d, e)

	// 赋值一个常量时，之后没赋值的常量都会应用上一行的赋值表达式
	const (
		a = iota  // a = 0
		b         // b = 1
		c         // c = 2
		d = 5     // d = 5
		e         // e = 5
	)
	println(a, b, c, d, e)
}
