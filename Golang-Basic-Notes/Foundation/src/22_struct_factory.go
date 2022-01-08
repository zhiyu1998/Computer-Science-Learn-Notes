package main

import "fmt"

type File struct {
	fd int // 文件描述符
	name string
}

type Foo map[string]string
type Bar struct {
	thingOne string
	thingTwo int
}

func newFile(fd int, name string) *File {
	if fd < 0 {
		return nil
	}

	return &File{fd, name}
}

func main() {
	// 可以和大多数面向对象编程语言中笨拙的初始化方式做个比较：File f = new File(...)
	f := newFile(10, "./test.txt")
	fmt.Println(f)

	y := new(Bar)
	(*y).thingOne = "hello"
	(*y).thingTwo = 1
	fmt.Println(y)

	// NOT OK: 试图 make() 一个结构体变量，会引发一个编译错误
	//z := make(Bar) // 编译错误：cannot make type Bar
	//(*z).thingOne = "hello"
	//(*z).thingTwo = 1

	x := make(Foo)
	x["x"] = "goodbye"
	x["y"] = "world"
	fmt.Println(x)

	// NOT OK: new() 一个 map 并试图向其填充数据，将会引发运行时错误！
	// 因为 new(Foo) 返回的是一个指向 nil 的指针，它尚未被分配内存
	//u := new(Foo)
	//(*u)["x"] = "goodbye" // 运行时错误!! panic: assignment to entry in nil map
	//(*u)["y"] = "world"
	//fmt.Println(u)
}