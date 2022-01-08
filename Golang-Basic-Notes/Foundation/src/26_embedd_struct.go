package main

import "fmt"

type A struct {
	ax, ay int
}

type B struct {
	A
	bx, by float32
}

// 命名冲突
type C struct {a int}
type D struct {a, b int}

type E struct {C; D}
var e E

func main() {
	b := B{A{1, 2}, 3.0, 4.0}
	fmt.Println(b.ax, b.ay, b.bx, b.by)
	fmt.Println(b.A)

	c := C{20}
	d := D{30, 40}
	e := E{c, d}
	//fmt.Println(e.a)  // 错误：ambiguous selector e.a
	fmt.Println(e.C.a)
}