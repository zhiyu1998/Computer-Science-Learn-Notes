package main

import (
	"fmt"
	"strings"
)

func main() {
	// 5.4 使用 for 结构创建一个简单的循环。要求循环 15 次然后使用 fmt 包来打印计数器的值。
	/*for i := 1; i <= 15; i++ {
		fmt.Println(i)
	}*/

	println()
	// 5.5 使用 goto 语句重写循环，要求不能使用 for 关键字。
/*i1 := 0
START:
	if i1 < 15 {
		fmt.Println(i1)
		i1++
		goto START
	}*/

	// 5.5.1:使用 2 层嵌套 for 循环。
	for i := 0; i <= 6; i++ {
		for j := 0; j < i; j++ {
			fmt.Print("G")
		}
		fmt.Println()
	}

	// 5.5.2:仅用 1 层 for 循环以及字符串连接。
	var mem string
	for i := 0; i < 6; i++ {
		mem = strings.Join([]string{mem, "G"}, "")
		fmt.Println(mem)
	}

	str := ""
	// 5.5.2:方法二
	for i := 0; i < 6; i++ {
		str += "G"
		//fmt.Printf("%T", str) // string
		println(str)
	}

	for i := 0; i < 5; i++ {
		var v int
		fmt.Printf("%d ", v)
		v = 5
	} // 0 0 0 0 0
}
