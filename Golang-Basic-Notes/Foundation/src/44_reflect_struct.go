package main

import (
	"fmt"
	"reflect"
	strings2 "strings"
)

type NotknownType struct {
	s1, s2, s3 string
}

func (n NotknownType) String() string {
	return strings2.Join([]string{n.s1, n.s2, n.s3}, "-")
}

var secret interface{} = NotknownType{"Ada", "Go", "Oberon"}

// 反射结构
func main() {
	value := reflect.ValueOf(secret)
	typ := reflect.TypeOf(secret)

	fmt.Println(typ)
	knd := value.Kind()
	fmt.Println(knd)

	// 通过一个 for 循环用索引取得每个字段的值 Field(i)
	for i := 0; i < value.NumField(); i++ {
		fmt.Printf("Field %d: %v\n", i, value.Field(i))
	}

	// 调用签名在结构上的方法，例如，使用索引 n 来调用：Method(n).Call(nil)
	res := value.Method(0).Call(nil)
	fmt.Println(res)
}
