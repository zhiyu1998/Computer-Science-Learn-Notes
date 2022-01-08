package main

import "fmt"

type specialString string // 取别名

var whatIsThis specialString = "Hello"

type Element interface {}

type Vector struct {
	a []Element
}

func TypeSwitch() {
	testFunc := func(any interface{}) {
		switch v := any.(type) {
		case bool:
			fmt.Printf("any %v is a bool type", v)
		case int:
			fmt.Printf("any %v is an int type", v)
		case float32:
			fmt.Printf("any %v is a float32 type", v)
		case string:
			fmt.Printf("any %v is a string type", v)
		case specialString:
			fmt.Printf("any %v is a special String!", v)
		default:
			fmt.Println("unknown type!")
		}
	}
	testFunc(whatIsThis)
}


func main() {
	TypeSwitch()

	// 构建通用类型或包含不同类型变量的数组
	// 简而言之：构建通用型的方法（比如：搜索和排序的 int 数组、float 数组以及 string 数组）
	v40 := new(Vector)
	v40.a = make([]Element, 10)
	var e Element
	e = 11

	v40.Set(0, e)
	fmt.Println("vector[0]:", v40.At(0))

	// 赋值数据切片到空接口切片的时候必须使用for 一个一个显式赋值
	// var dataSlice []myType = FuncReturnSlice()
	// var interfaceSlice []interface{} = make([]interface{}, len(dataSlice))
	// for i, d := range dataSlice {
	//	 interfaceSlice[i] = d
	// }
	// 错误演示：赋值数据切片到空接口切片
	// var dataSlice []myType = FuncReturnSlice()
	// var interfaceSlice []interface{} = dataSlice
}

func (p *Vector) At(i int) Element {
	return p.a[i]
}

func (p *Vector) Set(i int, e Element) {
	p.a[i] = e
}