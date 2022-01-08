package main

import "fmt"

/** 注释：
<- chan 只读通道
chan <- 只写通道

var send_only chan<- int 		// channel can only receive data
var recv_only <-chan int		// channel can only send data
*/

func producer(ch chan int) {
	for i := 0; i < 10; i++ {
		ch <- i * 10
	}
	close(ch)
}

func consumer(in <-chan int, out chan<- bool) {
	for num := range in {
		fmt.Println(num)
	}
	out <- true
}

func main() {
	in := make(chan int)
	out := make(chan bool)
	go producer(in)
	go consumer(in, out)

	<-out
}