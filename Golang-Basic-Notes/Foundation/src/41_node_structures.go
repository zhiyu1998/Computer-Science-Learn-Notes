package main

import "fmt"

/// 通用类型的节点数据结构

type Node struct {
	left *Node
	data interface{}
	right *Node
}

func (node *Node) SetData(data interface{}) {
	node.data = data
}

func main() {
	le := new(Node)
	le.SetData("left node")

	node := new(Node)
	node.SetData("data node")

	ri := new(Node)
	ri.SetData("right node")

	node.left = le
	node.right = le

	fmt.Println(le)
	fmt.Println(node)
	fmt.Println(ri)

	fmt.Println("------------接口到接口----------------")
	// 一个接口的值可以赋值给另一个接口变量，只要底层类型实现了必要的方法。
	// 下面的例子就是不能赋值给空的接口
	var x myInterface
	var s student
	//var empty empty
	//empty = x
	x = s
	//empty = s
	//f3(empty)
	f3(x)
}

type myPrintInterface interface {
	print()
}

type myInterface interface {
	print()
}

type student struct {
	name string
}

type empty interface {}

func (s student) print() {
	s.name = "print(): "
	fmt.Println(s.name, "Hello World")
}

func f3(x myInterface) {
	x.(myPrintInterface).print()
}