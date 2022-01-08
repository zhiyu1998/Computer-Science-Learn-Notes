package main

import (
	"fmt"
)

// 在缓冲满载（缓冲被全部使用）之前，给一个带缓冲的通道发送数据是不会阻塞的，而从通道读取数据也不会阻塞，直到缓冲空了
// 增加了缓冲之后main函数不再输出内容, 因为这里不会阻塞等待，直接就执行完整个函数，func还没来得及输入就结束了
func main() {
	ch := make(chan int, 15)

	go func() {
		//time.Sleep(15*1e9)
		x := <- ch
		fmt.Println("received", x)
	}()

	fmt.Println("sending", 10)
	ch <- 10
	ch <- 11
	fmt.Println("sent", 10)
}