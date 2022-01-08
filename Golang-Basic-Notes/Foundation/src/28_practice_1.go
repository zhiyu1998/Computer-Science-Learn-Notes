package main

import "fmt"

// 注意：类型和作用在它上面定义的方法必须在同一个包里定义
type employee struct {
	salary float32
}

func (emp *employee) addSalary(salary float32) {
	emp.salary += salary
}

func main() {
	emp1 := new(employee)
	emp1.addSalary(20.)
	emp1.addSalary(30.22)
	fmt.Println(emp1)
}