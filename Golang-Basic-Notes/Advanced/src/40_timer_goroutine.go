package main

import (
	"fmt"
	"time"
)

/**
使用锁的情景：
	访问共享数据结构中的缓存信息
	保存应用程序上下文和状态信息数据

使用通道的情景：
	与异步操作的结果进行交互
	分发任务
	传递数据所有权
 */

func main() {
	tick := time.Tick(1e8)
	//After() 只发送一次时间
	boom := time.After(5e8)

	for {
		select {
		case <-tick:
			fmt.Println("tick.")
		case <-boom:
			fmt.Println("Boom!")
		default:
			fmt.Println("    .")
			time.Sleep(5e7)
		}
	}
}
