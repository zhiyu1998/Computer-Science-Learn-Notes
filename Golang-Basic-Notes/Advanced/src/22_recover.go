package main

import "log"

func protect(g func()) {
	defer func() {
		log.Println("done")
		if err := recover(); err != nil {
			log.Printf("run time panic: %v", err)
		}
	}()
	log.Println("start")
	g()
}

func main() {

	// recover 只能在 defer 修饰的函数
	// 用于取得 panic 调用中传递过来的错误值
	// 如果是正常执行，调用 recover 会返回 nil，且没有其它效果。
	protect(func (){
		log.Println("Hello")
	})
}
