package main

// 在不同的包下加入方法的方法：
// 有一个间接的方式：可以先定义该类型（比如：int 或 float）的别名类型，
// 然后再为别名类型定义方法。或者像下面这样将它作为匿名类型嵌入在一个新的结构体中。
import (
	"fmt"
	"time"
)

type myTime struct {
	time.Time
}

func (t myTime) first3Chars() string {
	return t.Time.String()[0:3]
}



func main() {
	m := myTime{time.Now()}
	// 调用匿名 Time 上的 String 方法
	fmt.Println("Full time now:", m.String())
	// 调用 myTime.first3Chars
	fmt.Println("First 3 chars:", m.first3Chars())
}
