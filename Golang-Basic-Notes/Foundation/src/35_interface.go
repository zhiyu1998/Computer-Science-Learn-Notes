package main

import (
	"bytes"
	"fmt"
)

// （按照约定，只包含一个方法的）接口的名字由方法名加 er 后缀组成
type Shaper interface {
	Area() float32
}

type Square struct {
	side float32
}

func (sq *Square) Area() float32 {
	return sq.side * sq.side
}

type Rectangle struct {
	length, width float32
}

func (r Rectangle) Area() float32 {
	return r.length * r.width
}

type stockPosition struct {
	ticker string
	sharePrice float32
	count float32
}

func (s stockPosition) getValue() float32 {
	return s.sharePrice * s.count
}

type car struct {
	make string
	model string
	price float32
}

func (c car) getValue() float32 {
	return c.price
}

type valuable interface {
	getValue() float32
}

func showValue(asset valuable) {
	fmt.Printf("Value of the asset is %f\n", asset.getValue())
}

// ==============嵌套接口==============
type ReadWrite interface {
	Read(b bytes.Buffer) bool
	Write(n bytes.Buffer) bool
}

type Lock interface {
	Lock()
	Unlock()
}

type file interface {
	ReadWrite
	Lock
	Close()
}

func main() {
	sq1 := new (Square)
	sq1.side = 5

	r := Rectangle{5, 3}

	shapes := []Shaper{r, sq1}

	fmt.Println("Looping through shapes for area ...")
	for n, _ := range shapes {
		fmt.Println("Shape details: ", shapes[n])
		fmt.Println("Area of this shape is: ", shapes[n].Area())
	}

	fmt.Println("================================")

	var o valuable = stockPosition{"GOOG", 577.20, 4}
	showValue(o)
	o = car{"BMW", "M3", 66500}
	showValue(o)
}
