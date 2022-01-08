package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	/**
	os.O_RDONLY：只读
	os.O_WRONLY：只写
	os.O_CREATE：创建：如果指定文件不存在，就创建该文件。
	os.O_TRUNC：截断：如果指定文件已存在，就将该文件的长度截为 0 。
	 */
	out, err := os.OpenFile("hello.txt", os.O_WRONLY|os.O_CREATE, 0666)
	if err != nil {
		fmt.Printf("An error occurred with file opening or creation\n")
		return
	}
	defer out.Close()

	writer := bufio.NewWriter(out)
	for i := 0; i < 10; i++ {
		writer.WriteString("Hello Zhiyu\n")
	}
	writer.Flush()
}