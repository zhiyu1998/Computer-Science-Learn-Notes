package main

import (
	"fmt"
	"math"
	"os"
	"runtime"
)

var Pi float64

func init() {
	Pi = 4 *math.Atan(1)
}

func main() {

	// 变量声明规范： var identifier [type] = value

	// 同时声明指针
	//var a, b *int

	//var a int
	//var b bool
	//var str string
	// 上述代码可以写成
	//var (
	//	a int
	//	b bool
	//	str string
	//)

	//自动推断其类型
	var s = "Hello Golang"
	fmt.Println(s)

	var (
		HOME = os.Getenv("JAVA_HOME")
		PATH = os.Getenv("GO_PATH")
		GOROOT = os.Getenv("GOROOT")
	)
	fmt.Println(HOME, PATH, GOROOT)

	// 语法糖 ( 初始化值 )
	// 注意： 如果在相同的代码块中，我们不可以再次对于相同名称的变量使用初始化声明，
	// 例如：a := 20 就是不被允许的，编译器会提示错误 no new variables on left side of :=，
	// 但是 a = 20 是可以的，因为这是给相同的变量赋予一个新的值
	a := 12
	println(a)

	var goos string = runtime.GOOS
	fmt.Println("The operating system is:", goos)

	println(Pi)
}