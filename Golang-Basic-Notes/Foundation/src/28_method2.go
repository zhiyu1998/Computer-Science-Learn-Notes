package main

import "fmt"

// 非结构体方法例子
type IntVector []int

func (v IntVector) Sum() (s int) {
	for _, x := range v {
		s += x
	}
	return
}

func main() {
	fmt.Println(IntVector{1,2,3}.Sum())
}