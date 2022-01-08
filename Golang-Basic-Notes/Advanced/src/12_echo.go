package main

import (
	"flag"
	"os"
)

// flag.Bool() 定义了一个默认值是 false 的 flag：当在命令行出现了第一个参数（这里是 "n"），flag 被设置成 true（NewLine 是 *bool 类型）
var NewLine = flag.Bool("n", false, "print newline")

const (
	Space = " "
	Newline = "\n"
)

func main() {
	// flag.PrintDefaults() 打印 flag 的使用帮助信息
	flag.PrintDefaults()
	// 扫描参数列表（或者常量列表）并设置 flag
	flag.Parse() // Parse() 之后 flag.Arg(i) 全部可用(如果不设置这个在传入参数的时候arg(i)没有值)
	var s string
	// flag.Narg() 返回参数的数量
	for i := 0; i < flag.NArg(); i++ {
		if i > 0 {
			s += " "
			if *NewLine {
				// flag 被解引用到 *NewLine，所以当值是 true 时将添加一个 Newline（"\n"）。
				s += Newline
			}
		}
		// flag.Arg(i) 表示第 i 个参数
		s += flag.Arg(i)
	}
	os.Stdout.WriteString(s)
}