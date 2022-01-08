package main

import (
	"fmt"
	"math"
)

type B1 struct {
	thing int
}

// change() 接受一个指向 B 的指针，并改变它内部的成员
func (b *B1) change() { b.thing = 1 }

// write() 通过拷贝接受 B 的值并只输出 B 的内容
func (b B1) write() string { return fmt.Sprint(b) }

type Point3 struct {
	x, y, z float64
}

// Point3 是作为值传递给方法的，因此传递的是它的拷贝
func (p Point3) Abs() float64 {
	return math.Sqrt(p.x*p.x + p.y*p.y + p.z*p.z)
}

func main() {
	var b1 B1
	b1.change()
	fmt.Println(b1.write())

	b2 := new(B1)
	b2.change()
	fmt.Println(b2.write())

	// p3 定义为一个指针：p3 := &Point{ 3, 4, 5}
	// 可以使用 p3.Abs() 来替代 (*p3).Abs()
	p3 := &Point3{3, 4 ,5}
	fmt.Println((*p3).Abs())
}
