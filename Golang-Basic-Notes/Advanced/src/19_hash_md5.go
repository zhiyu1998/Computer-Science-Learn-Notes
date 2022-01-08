package main

import (
	md52 "crypto/md5"
	"fmt"
	"io"
	"log"
)

func main() {
	md5 := md52.New()
	io.WriteString(md5, "test")
	b := []byte{}
	fmt.Printf("Result: %x\n", md5.Sum(b))
	fmt.Printf("Result: %d\n", md5.Sum(b))

	md5.Reset()
	data := []byte("We shall overcome!")
	n, err := md5.Write(data)
	if n != len(data) || err != nil {
		log.Printf("Hash write error: %v / %v", n, err)
	}
	fmt.Printf("Result: %x\n", md5.Sum(b))
}
