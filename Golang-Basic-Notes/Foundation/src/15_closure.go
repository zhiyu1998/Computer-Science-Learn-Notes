package main

import (
	"fmt"
	"log"
	"runtime"
	"strings"
)

func main() {
	f15()

	fmt.Println(f151())

	var f152 = Addr()
	fmt.Println(f152(12), '-')
	fmt.Println(f152(50), '-')
	fmt.Println(f152(185))

	f155()

	addBmp := makeAddSuffix(".bmp")
	addJpeg := makeAddSuffix(".jpeg")
	fmt.Println(addBmp("file"), addJpeg("file"))

	debugtest()

	debugTestSimplify()
}

func f151() (ret int) {
	defer func() {
		ret++
	}()
	return 1
}

func Addr() func(int) int {
	var x int
	return func(delta int) int {
		x += delta
		return x
	}
}

func f15() {
	for i := 0; i < 4; i++ {
		g := func(i int) {fmt.Printf("%d", i)}
		g(i)
		fmt.Printf(" - g is of type %T and has value %v\n", g, g)
	}
}

func f155() {
	var g int
	go func(i int) {
		s := 0
		for j := 0; j < i; j++ { s += j }
		g = s
	}(1000) // Passes argument 1000 to the function literal.
}

// 工厂函数
func makeAddSuffix(suffix string) func(string) string {
	return func(name string) string {
		if !strings.HasSuffix(name, suffix) {
			return name + suffix
		}
		return name
	}
}

func debugtest() {
	where := func() {
		_, file, line, _ := runtime.Caller(1)
		log.Printf("%s:%d", file, line)
	}
	where()
	println(1)
	println(2)
	println(3)
	println(4)
	where()
}

func debugTestSimplify() {
	var where = log.Print
	where()
	println(1)
	println(2)
	println(3)
	println(4)
	where()
}