package main

import (
	"errors"
	"fmt"
)

type Stack []interface {}

func (s Stack) Len() int {
	return len(s)
}

func (s *Stack) Push(x interface{}) {
	*s = append(*s, x)
}

func (s Stack) Top() (interface{}, error) {
	if len(s) == 0 {
		return nil, errors.New("stack is empty")
	}
	return s[len(s)-1], nil
}

func (s *Stack) Pop() (interface{}, error) {
	stk := *s // dereference to a local variable stk
	index := s.Len() - 1
	if len(stk) > 0 {
		top := stk[len(stk)- 1]
		*s = stk[:index]
		return top, nil
	} else {
		return nil, errors.New("stack is empty")
	}
}

func main() {
	var st1 Stack
	st1.Push("Brown")
	st1.Push(3.14)
	st1.Push(100)
	st1.Push([]string{"Java", "C++", "Python", "C#", "Ruby"})
	//fmt.Println(st1)
	for {
		item, err := st1.Pop()
		if err != nil {
			break
		}
		fmt.Println(item)
	}
}
