package main

import (
	"fmt"
	"strings"
)

func main() {
	// HasPrefix 判断字符串 s 是否以 prefix 开头
	// HasSuffix 判断字符串 s 是否以 suffix 结尾

	var str string = "This is an example of a string"
	fmt.Println(strings.HasPrefix(str, "Th"))
}