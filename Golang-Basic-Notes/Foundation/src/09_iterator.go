package main

import "fmt"

func main() {
	// 条件判断的迭代
	var i int = 5
	for i >= 0 {
		i -= 1
		fmt.Printf("The variable i is now: %d\n", i + 1)
	}

	fmt.Println("=============================================")

	// for-range 结构
	str := "Go is a beautiful language!"
	fmt.Printf("The length of str is: %d\n", len(str))
	for index, char := range str {
		fmt.Printf("Character on position %d is: %c \n", index, char)
	}
}