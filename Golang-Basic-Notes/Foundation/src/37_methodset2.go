package main

import "fmt"

type List2 []int

func (l List2) Len() int {
	return len(l)
}

func (l *List2) Append(val int) {
	*l = append(*l, val)
}

type Appender interface {
	Append(int)
}

func CountInto(a Appender, start, end int) {
	for i := start; i < end; i++ {
		a.Append(i)
	}
}

type Lener interface {
	Len() int
}

func LongEnough(l Lener) bool {
	return l.Len() * 10 > 42
}

/**
在 lst 上调用 CountInto 时会导致一个编译器错误，因为 CountInto 需要一个 Appender，而它的方法 Append 只定义在指针上。 在 lst 上调用 LongEnough 是可以的，因为 Len 定义在值上。

在 plst 上调用 CountInto 是可以的，因为 CountInto 需要一个 Appender，并且它的方法 Append 定义在指针上。 在 plst 上调用 LongEnough 也是可以的，因为指针会被自动解引用。
 */
func main() {
	var lst List2
	// compiler error:
	//CountInto(lst, 1, 10)
	if LongEnough(lst) {
		fmt.Printf("- lst is long enough\n")
	}

	plst := new(List2)
	CountInto(plst, 1, 10)
	if LongEnough(plst) {
		fmt.Printf("- plst is long enough\n")
	}
}

/**
总结
在接口上调用方法时，必须有和方法定义时相同的接收者类型或者是可以根据具体类型 P 直接辨识的：
* 指针方法可以通过指针调用
* 值方法可以通过值调用
* 接收者是值的方法可以通过指针调用，因为指针会首先被解引用
* 接收者是指针的方法不可以通过值调用，因为存储在接口中的值没有地址
 */