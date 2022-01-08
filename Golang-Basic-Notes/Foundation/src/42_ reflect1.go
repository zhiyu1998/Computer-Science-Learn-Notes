package main

import (
	"fmt"
	"reflect"
)

func main() {
	//type MyInt int
	//var m MyInt = 5
	//v := reflect.TypeOf(m)
	//fmt.Println(v)
	//fmt.Println(v.Kind())

	var x float64 = 3.4
	fmt.Println("type: ", reflect.TypeOf(x))
	v := reflect.ValueOf(x)
	fmt.Println("value:", v)
	fmt.Println("type:", v.Type())
	fmt.Println("kind:", v.Kind())
	fmt.Println("value:", v.Float())
	// 变量 v 的 Interface() 方法可以得到还原（接口）值，所以可以这样打印 v 的值
	fmt.Println(v.Interface())
	// v.Interface() 相当于以下的做法：
	var i interface{} = v
	fmt.Println("i:", i)
	fmt.Printf("value is %5.2e\n", v.Interface())
	y := v.Interface().(float64)
	fmt.Println(y)
}
