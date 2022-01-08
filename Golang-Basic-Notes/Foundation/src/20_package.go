package main

import (
	"./pack1"
	"container/list"
	"fmt"
)

func printlist(l *list.List) { //把链表指针传入
	i := 1
	for v := l.Front(); v != nil; v = v.Next() {
		fmt.Printf("第%v个元素:%v\n", i, v.Value)
		i++
	}
}

func main() {

	l := list.New()
	l.PushFront(102)
	l.PushFront(101)
	l.PushFront(100)
	printlist(l)

	fmt.Println(pack1.ReturnStr())
}
