package main

import "fmt"

// 命名返回值
func test1(a int, b int) (int, int, int, int) {
	sum := a + b
	sub := a - b
	mul := a * b
	div := a / 5
	return sum, sub, mul, div
}

// 非命名返回值
func test2(a int, b int) (sum int, sub int, mul int, div int) {
	sum = a + b
	sub = a - b
	mul = a * b
	div = a / 5
	return
}

func ThreeValues() (int, int, float32) {
	return 5, 6, 7.5
}

// 使用指针改变外部变量
func Multiply(a, b int, reply *int) {
	*reply = a * b
}

func main() {
	var a, b, c, d int
	a, b, c, d = test2(1, 2)

	println(a)
	println(b)
	println(c)
	println(d)

	// 空白符（blank identifier）   ====>   _
	var i1 int
	var f1 float32
	i1, _, f1 = ThreeValues()
	fmt.Printf("The int: %d, the float: %f \n", i1, f1)

	// 改变外部变量（outside variable）
	n := 0
	reply := &n
	fmt.Printf("a: %d, b: %d\n", a, b)
	Multiply(a, b, reply)
	fmt.Println("n: ", n)
	fmt.Println("reply: ", *reply)
}
