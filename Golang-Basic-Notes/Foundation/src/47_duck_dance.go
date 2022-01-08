package main

import "fmt"


// 接口与动态类型
// 数 DuckDance 接受一个 IDuck 接口类型变量。仅当 DuckDance 被实现了 IDuck 接口的类型调用时程序才能编译通过

type IDuck interface {
	Quack()
	Walk()
}

func DuckDance(duck IDuck) {
	for i := 0; i < 3; i++ {
		duck.Quack()
		duck.Walk()
	}
}

type Bird struct {

}

func (b *Bird) Quack() {
	fmt.Println("I am quacking!")
}

func (b *Bird) Walk() {
	fmt.Println("I am walking!")
}

// 动态方法调用
type xmlWriter interface {
	error
}

func main() {
	b := new(Bird)
	DuckDance(b)
}