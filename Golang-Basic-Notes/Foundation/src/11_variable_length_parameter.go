package main

import "fmt"

func myFunc(arg ...int) {
	fmt.Println(arg)
}

func main() {
	myFunc(1, 2, 3)
}
