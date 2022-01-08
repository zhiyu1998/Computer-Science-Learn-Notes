package main

import (
	"fmt"
	"reflect"
)

func settingPrint(v reflect.Value) {

	fmt.Println("The Elem of v is: ", v)
	fmt.Println("settability of v:", v.CanSet())
}

// 通过反射修改(设置)值
func main() {
	var x float64 = 3.4
	 //  函数通过传递一个 x 拷贝创建了 v
	v := reflect.ValueOf(x)

	fmt.Println("settability of v:", v.CanSet())
	// 要想 v 的更改能作用到 x，那就必须传递 x 的地址
	v = reflect.ValueOf(&x)
	// fmt.Println(v)
	// 可以使用 CanSet() 方法测试是否可设置
	//  Type() 我们看到 v 现在的类型是 *float64 并且仍然是不可设置的
	settingPrint(v)
	// 想让其可设置我们需要使用 Elem() 函数，这间接的使用指针
	v = v.Elem()
	settingPrint(v)
	v.SetFloat(3.141592)
	fmt.Println(v.Interface())
	fmt.Println(v)

}