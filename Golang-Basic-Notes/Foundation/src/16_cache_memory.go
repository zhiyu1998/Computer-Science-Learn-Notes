package main

import (
	"fmt"
	"time"
)

const LIM = 3

var fibs [LIM]uint64

func main() {
	var result uint64 = 0
	start := time.Now()
	for i := 0; i < LIM; i++ {
		result = fibonacci(i)
		fmt.Printf("fibonacci(%d) is: %d\n", i, result)
	}
	end := time.Now()
	delta := end.Sub(start)
	fmt.Printf("longCalculation took this amount of time: %s\n", delta)
}

/**
	斐波那契数列
		fibs数列的用途是：记忆使用过的数字 （内存缓存）
 */
func fibonacci(n int) (res uint64) {
	println(fibs[n])
	if fibs[n] != 0 {
		res = fibs[n]
		return
	}
	if n <= 1 {
		res = 1
	} else {
		res = fibonacci(n - 1) + fibonacci(n - 2)
	}
	fibs[n] = res
	return
}