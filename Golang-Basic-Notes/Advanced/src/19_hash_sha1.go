package main

import (
	"crypto/sha1"
	"fmt"
	"io"
	"log"
)

func main() {
	// 通过调用 sha1.New() 创建了一个新的 hash.Hash 对象，用来计算 SHA1 校验值
	hasher := sha1.New()
	io.WriteString(hasher, "test")
	b := []byte{}
	// %x 十六进制表示
	fmt.Printf("Result: %x\n", hasher.Sum(b))
	fmt.Printf("Result: %d\n", hasher.Sum(b))

	hasher.Reset()
	data := []byte("We shall overcome!")
	n, err := hasher.Write(data)
	if n!=len(data) || err != nil {
		log.Printf("Hash write error: %v / %v", n, err)
	}
	checksum := hasher.Sum(b)
	fmt.Printf("Result: %x\n", checksum)
}
