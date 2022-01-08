package main

// 4.1
/*var a = "G"

func main() {
	n() // 打印全局变量 G
	m() // 初始化一个局部变量 O
	n() // 函数效果消失，接着打印全局变量
}

func n() {println(a)}

func m() {
	a := "O"
	println(a)
}*/

// 4.2
/*var a = "G"

func main() {
	n() // 打印全局变量 G
	m() // 给全局变量赋值，现在a的值发生了改变
	n() // 打印全局变量 O
}

func n() {
	println(a)
}

func m() {
	a = "O"
	println(a)
}*/

// 4.3

var a string

func main() {
	a = "G"
	println(a) // 打印全局变量 G
	f1() // 打印局部变量 O
}

func f1() {
	a := "O"
	println(a)
	f2() // 打印全局变量 G
}

func f2() {
	println(a)
}