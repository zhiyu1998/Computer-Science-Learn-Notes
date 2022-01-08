package main

import (
	"fmt"
	"reflect"
)

type List []int

func (l List) Len() int {return len(l)}

func (l *List) Append(val int) {*l = append(*l, val)}

// 指针方法和值方法都可以在指针或非指针上被调用
func main() {
	// 值
	var lst List
	lst.Append(1)
	fmt.Printf("%v (len: %d)", lst, lst.Len()) // [1] (len: 1)

	fmt.Println()

	// 指针
	plst := new(List)
	plst.Append(2)
	fmt.Printf("%v (len: %d)", plst, plst.Len()) // &[2] (len: 1)

	fmt.Println()

	// 对于类型 T，如果在 *T 上存在方法 Meth()，并且 t 是这个类型的变量，那么 t.Meth() 会被自动转换为 (&t).Meth()
	fmt.Println(reflect.TypeOf(lst))
	fmt.Println(reflect.TypeOf(&lst))
	fmt.Println(reflect.TypeOf(plst))
}