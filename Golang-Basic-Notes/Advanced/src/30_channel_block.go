package main

import (
	"fmt"
	"time"
)

func main() {
	ch1 := make(chan int)
	//go pump(ch1)
	//fmt.Println(<-ch1)

	// 给程序 1 秒的时间来运行：输出了上万个整数。
	go pump(ch1)
	go suck(ch1)
	time.Sleep(1e9)
}

// 一个协程在无限循环中给通道发送整数数据。不过因为没有接收者，只输出了一个数字 0。
func pump(ch chan int) {
	for i := 0; ; i++ {
		ch <- i
	}
}

func suck(ch chan int) {
	for {
		fmt.Println(<-ch)
	}
}

