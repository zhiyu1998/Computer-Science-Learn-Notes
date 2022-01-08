package main

import (
	"fmt"
)

func f2(in chan int) {
	for i := 0; i < 10; i++ {
		in <- i
	}
}

func f1(in chan int) {
	fmt.Println(<-in)
}

// fatal error: all goroutines are asleep - deadlock!
// 死锁原因：通过make(chan int)，开辟的通道是一种无缓冲通道，所以当对这个缓冲通道写的时候，会一直阻塞等到某个协程对这个缓冲通道读
// main函数的执行在go语言中本身就是一个协程的执行，所以在执行到out <- 2的时候，执行main函数的协程将被阻塞，换句话说main函数被阻塞了，此时不能在继续往下执行了
// 所以f1这个函数无法执行到了，就无法读到out中的内容了，所以整个程序阻塞，发生了死锁。

// 小结： out <- 2 无缓冲通道 -> 组塞了 main函数执行 -> 因此程序死锁
// 解决方案：在main函数中另开一个协程，让它对out进行写 -> 解开了 out的阻塞 -> main得到了执行
func main() {
	out := make(chan int)
	//go f2(out)
	out <- 2
	go f1(out)
	//time.Sleep(time.Millisecond)
}