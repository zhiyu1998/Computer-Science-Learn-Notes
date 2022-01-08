package main

import (
	"fmt"
	"math"
	"reflect"
	"strconv"
)

type Square2 struct {
	side float32
}

type Circle2 struct {
	radius float32
}

type Shaper2 interface {
	Area() float32
}

type Stringer interface {
	String() string
}

func main() {
	var areaIntf Shaper2
	sq2 := new(Square2)
	sq2.side = 5

	// 假设类型为 Square
	areaIntf = sq2

	// 如果转换合法，t 是 areaIntf 转换到类型 Square 的值，ok 会是 true；否则 v 是类型 T 的零值，ok 是 false，也没有运行时错误发生。
	// 如果忽略 areaIntf.(*Square) 中的 * 号，会导致编译错误
	if t, ok := areaIntf.(*Square2); ok {
		fmt.Println(reflect.TypeOf(t))
		fmt.Printf("The type of areaIntf is: %T\n", t)
	}
	if u, ok := areaIntf.(*Circle2); ok {
		fmt.Println(reflect.TypeOf(u))
		fmt.Printf("The type of areaIntf is: %T\n", u)
	} else {
		fmt.Println(reflect.TypeOf(u))
		fmt.Println("areaIntf does not contain a variable of type Circle")
	}

	// 在 type-switch 不允许有 fallthrough
	switch t := areaIntf.(type) {
	case *Square2:
		fmt.Printf("Type Square %T with value %v\n", t, t)
	case *Circle2:
		fmt.Printf("Type Circle %T with value %v\n", t, t)
	case nil:
		fmt.Printf("nil value: nothing to check?\n")
	default:
		fmt.Printf("Unexpected type %T\n", t)
	}

	classifier(13, -14.3, "BELGIUM", complex(1, 2), nil, false)


	var v Stringer
	v = sq2
	// 测试一个值是否实现了某个接口
	if sv, ok := v.(Stringer); ok {
		fmt.Printf("v implements String(): %s\n", sv.String()) // note: sv, not v
	}
}

func (sq *Square2) Area() float32 {
	return sq.side * sq.side
}

func (ci *Circle2) Area() float32 {
	return ci.radius * ci.radius * math.Pi
}

func (sq *Square2) String() string {
	return strconv.Itoa(666)
}

func classifier(items ...interface{}) {
	for i, x := range items {
		switch x.(type) {
		case bool:
			fmt.Printf("Param #%d is a bool\n", i)
		case float64:
			fmt.Printf("Param #%d is a float64\n", i)
		case int, int64:
			fmt.Printf("Param #%d is a int\n", i)
		case nil:
			fmt.Printf("Param #%d is a nil\n", i)
		case string:
			fmt.Printf("Param #%d is a string\n", i)
		default:
			fmt.Printf("Param #%d is unknown\n", i)
		}
	}
}
