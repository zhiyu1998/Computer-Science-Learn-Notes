package main

import "fmt"

func main() {
	ch := make(chan int)
	go func(a int, b int) {
		ch <- a + b
	}(1, 2)

	x := <- ch
	fmt.Println(x)
}