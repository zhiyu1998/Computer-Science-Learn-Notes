package main

import (
	"fmt"
	"strings"
)

type struct1 struct {
	i1 int
	f1 float32
	str string
}

type Interval struct {
	start int
	end   int
}

type Person struct {
	firstName   string
	lastName    string
}

func upPerson(p *Person) {
	p.firstName = strings.ToUpper(p.firstName)
	p.lastName = strings.ToUpper(p.lastName)
}

type number struct {
	f float32
}

type nr number

func main() {
	ms := new(struct1)
	ms.i1 = 10
	ms.f1 = 15.5
	ms.str = "Chris"

	fmt.Printf("The int is: %d\n", ms.i1)
	fmt.Printf("The float is: %f\n", ms.f1)
	fmt.Printf("The string is: %s\n", ms.str)
	fmt.Println(ms)

	// 初始化结构体实例
	// 1
	ms1 := &struct1{10, 15.5, "Chris"}

	// 2
	var ms2 struct1
	ms2 = struct1{10, 15.5, "Chris"}
	fmt.Printf("ms1: %v,  ms2: %v", ms1, ms2)

	intr1 := Interval{end:5, start:1}
	intr2 := Interval{end:6}
	fmt.Println(intr1)
	fmt.Println(intr2)

	var pers1 Person
	pers1.firstName = "Chris"
	pers1.lastName = "Woodward"
	upPerson(&pers1)
	fmt.Printf("The name of the person is %s %s\n", pers1.firstName, pers1.lastName)

	pers2 := new(Person)
	pers2.firstName = "Chris"
	pers2.lastName = "Woodward"
	(*pers2).lastName = "Woodward" // 注意也可以通过解指针的方式来设置值
	upPerson(pers2)
	fmt.Printf("The name of the person is %s %s\n", pers2.firstName, pers2.lastName)

	pers3 := &Person{"Chris", "Woodward"}
	upPerson(pers3)
	fmt.Printf("The name of the person is %s %s\n", pers3.firstName, pers3.lastName)

	a211 := number{5.0}
	b211 := nr{6.0}

	var c211 = number(b211)

	fmt.Println(a211, b211, c211)
}