package main

import (
	"fmt"
	"log"
)

func badCall() {
	a, b := 10, 0
	n := a / b
	fmt.Println(n)
}

func test() {
	defer func() {
		if err := recover(); err != nil {
			log.Printf("Panicing %s\r\n", err)
		}
	}()
	badCall()
	fmt.Printf("After bad call\r\n")
}

func main() {
	fmt.Printf("Calling test\r\n")
	test()
	fmt.Printf("Test completed\r\n")
}