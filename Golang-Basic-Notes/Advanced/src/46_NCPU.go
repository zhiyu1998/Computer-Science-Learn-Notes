package main

import "runtime"

const NCPU = 4

// DoAll() 函数创建了一个 sem 通道，每个并行计算都将在对其发送完成信号；
// 在一个 for 循环中 NCPU 个协程被启动了，每个协程会承担 1/NCPU 的工作量

// DoAll() 会在 for 循环中等待 NCPU 个协程完成：sem 通道就像一个信号量，这份代码展示了一个经典的信号量模式
func DoAll() {
	sem := make(chan int, NCPU)
	for i := 0; i < NCPU; i++ {
		go DoPart(sem)
	}

	for i := 0; i < NCPU; i++ {
		<- sem
	}
}

// 每一个 DoPart() 协程都会向 sem 通道发送完成信号
func DoPart(sem chan int) {
	sem <- 1
}

func main() {
	runtime.GOMAXPROCS(NCPU)
	DoAll()
}

