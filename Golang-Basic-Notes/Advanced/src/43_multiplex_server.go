package main

import "fmt"

type Request struct {
	a, b int
	replyc chan int
}

type binOp func(a, b int) int

func run(op binOp, req *Request)  {
	req.replyc <- op(req.a, req.b)
}

func server(op binOp, service chan *Request) {
	for {
		req := <- service
		go run(op, req)
	}
}

func startServer(op binOp) chan *Request {
	res := make(chan *Request)
	go server(op, res)
	return res
}

func main() {
	adder := startServer(func(a, b int) int {return a + b})
	const N = 100
	var reqs [N]Request
	for i := 0; i < N; i++ {
		req := &reqs[i]
		req.a = i
		req.b = i + N
		req.replyc = make(chan int)
		adder <- req
	}

	// checks:
	for i := N - 1; i >= 0; i-- {
		if <- reqs[i].replyc != N + 2 * i {
			fmt.Println("fail at", i)
		} else {
			fmt.Println("Request", i, " is ok!")
		}
	}
	fmt.Println("done")
}
