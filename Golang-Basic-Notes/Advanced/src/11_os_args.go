package main

import (
	"fmt"
	"os"
	"strings"
)

func main() {
	// os.Args，用来处理一些基本的命令行参数，它在程序启动后读取命令行输入的参数
	// 用法：在命令行使用 -- go run 文件名.go 参数
	who := "Alice "
	if len(os.Args) > 1 {
		who += strings.Join(os.Args[1:], " ")
	}
	fmt.Println("Good Morning", who)
}
