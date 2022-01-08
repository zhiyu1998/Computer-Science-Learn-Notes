package main

import (
	"fmt"
	"time"
)

func main() {
	ch := make(chan string)

	// 如果我们移除一个或所有 go 关键字，程序无法运行，Go 运行时会抛出 panic：
	go sendData(ch)
	go getData(ch)

	time.Sleep(1e9) // 如果注释掉，不会显示信息 --> main 等待了 1 秒让两个协程完成，如果不这样，sendData() 就没有机会输出。
}

func sendData(ch chan string) {
	ch <- "Washington"
	ch <- "Tripoli"
	ch <- "London"
	ch <- "Beijing"
	ch <- "Tokyo"
}

func getData(ch chan string) {
	var input string
	for {
		input = <- ch
		fmt.Println(input)
	}
}
