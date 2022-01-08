package main

import (
	"flag"
	"fmt"
)

var ngoroutine =flag.Int("n", 100000, "how many goroutines")

func f(left, right chan int) {left <- 1 + <- right}

func main() {
	flag.Parse()
	leftmost := make(chan int)
	var left, right chan int = nil, leftmost
	// for 循环中最初的 go f(left, right) 因为没有发送者一直处于等待状态
	for i := 0; i < *ngoroutine; i++ {
		left, right = right, make(chan int)
		go f(left, right)
	}
	// 主线程的 right <- 0 执行时，类似于递归函数在最内层产生返回值一般
	right <- 0
	x := <-leftmost
	fmt.Println(x)
}