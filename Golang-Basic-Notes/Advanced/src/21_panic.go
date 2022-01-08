package main

import "fmt"

func main() {
	fmt.Println("Starting the program")
	// panic 可以直接从代码初始化：当错误条件（我们所测试的代码）很严苛且不可恢复，程序不能继续运行时，
	// 可以使用 panic 函数产生一个中止程序的运行时错误。panic 接收一个做任意类型的参数，通常是字符串，在程序死亡时被打印出来。
	panic("A severe error occurred: stopping the program!")
	fmt.Println("Ending the program")
}
