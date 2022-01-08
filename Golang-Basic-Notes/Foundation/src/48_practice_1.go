package main

import "fmt"

type obj interface{}

func myFunc1(arg obj) obj {
	switch arg.(type) {
	case int:
		return arg.(int) * 2
	case string:
		return arg.(string) + arg.(string)
	default:
		return arg
	}
}

func mapFunc(args ...obj) map[int]obj {
	res := make(map[int]obj, len(args))
	for i, arg := range args {
		res[i] = arg
	}
	return res
}

func main() {
	a := myFunc1(14)
	b := myFunc1("abc")
	res := mapFunc(a, b)
	fmt.Println(res)
}