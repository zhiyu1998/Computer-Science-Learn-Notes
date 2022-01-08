package main

import "fmt"

// 定义方法的格式：func (recv receiver_type) methodName(parameter_list) (return_value_list) { ... }
type TwoInts struct {
	a int
	b int
}

func main() {
	two1 := new(TwoInts)
	two1.a = 12
	two1.b = 10

	fmt.Printf("The sum is: %d\n", two1.addThem())
	fmt.Printf("Add them to the param: %d\n", two1.addToParam(20))

	two2 := TwoInts{3, 4}
	fmt.Printf("The sum is: %d\n", two2.addThem())
}

func (tn *TwoInts) addThem() int {
	return tn.a + tn.b
}

func (tn *TwoInts) addToParam(param int) int  {
	return tn.a + tn.b + param
}