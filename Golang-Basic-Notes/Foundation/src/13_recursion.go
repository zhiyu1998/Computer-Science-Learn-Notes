package main

import "log"

func fab(n int) int {
	if n == 1 || n == 0{
		return 1
	}
	defer func() {
		log.Println("current n: ", n)
	}()

	return fab(n - 2) + fab(n - 1)
}

func main() {
	res := fab(4)
	println(res)
}
