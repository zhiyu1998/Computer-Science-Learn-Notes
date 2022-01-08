package main

import (
	"fmt"
	"strconv"
)

func main() {
	var orig string = "20"

	var newS string

	fmt.Printf("The size of ints is: %d\n", strconv.IntSize)

	// Go 语言的函数经常使用两个返回值来表示执行是否成功：返回某个值以及 true 表示成功；
	// 返回零值（或 nil）和 false 表示失败

	// Atoi:字符串转换为整数
	an, err := strconv.Atoi(orig)
	if err != nil {
		fmt.Printf("orig %s is not an integer - exiting with error\n", orig)
		return
	}
	fmt.Printf("The integer is %d \n", an)
	an = an + 5
	newS = strconv.Itoa(an)
	fmt.Printf("The new strings is : %s\n", newS)

	/*if an, err := strconv.Atoi(orig); err != nil {
		println(an)
		fmt.Printf("Program stopping with error %v", err)
		os.Exit(1)
	}*/
	k := 6
	switch k {
	case 4:
		fmt.Println("was <= 4")
		fallthrough
	case 5:
		fmt.Println("was <= 5")
		fallthrough
	case 6:
		fmt.Println("was <= 6")
		fallthrough
	case 7:
		fmt.Println("was <= 7")
		fallthrough
	case 8:
		fmt.Println("was <= 8")
		fallthrough
	default:
		fmt.Println("default case")
	}
}
