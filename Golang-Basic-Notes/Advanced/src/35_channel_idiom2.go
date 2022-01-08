package main

import (
	"fmt"
	"time"
)

// 给通道使用 for 循环
func main() {
	// 习惯用法：生产者消费者模式
	suck3(pump4())
	time.Sleep(1e9)

	// 习惯用法：管道和选择器模式
	/*sendChan := make(chan int)
	receiveChan := make(chan string)
	go processChannel(sendChan, receiveChan)

	func processChannel(in <-chan int, out chan<- string) {
		for inValue := range in {
			result := ... /// processing inValue
			out <- result
		}
	}*/
}

// 习惯用法：通道迭代模式
func pump4() chan int {
	ch := make(chan int)
	go func(){
		for i := 0; ; i++ {
			ch <- i
		}
	}()
	return ch
}

func suck3(ch chan int) {
	go func() {
		for v := range ch {
			fmt.Println(v)
		}
	}()
}