package main

import (
	"fmt"
	"strconv"
)

type Base struct {

}

func (Base) Magic() {
	fmt.Println("base magic")
}

func (self Base) MoreMagic() {
	self.Magic()
	self.Magic()
}

type Voodoo struct {
	Base
}

func (Voodoo) Magic() {
	fmt.Println("voodoo magic")
}

type TwoInts2 struct {
	a int
	b int
}

func main() {
	v := new(Voodoo)
	v.Magic()
	v.MoreMagic()

	two1 := new(TwoInts2)
	two1.a = 12
	two1.b = 10
	fmt.Printf("two1 is: %v\n", two1)
	fmt.Println("two1 is:", two1)
	fmt.Printf("two1 is: %T\n", two1)
	fmt.Printf("two1 is: %#v\n", two1)
}

func (tn *TwoInts2) String() string {
	return "(" + strconv.Itoa(tn.a) + "/" + strconv.Itoa(tn.b) + ")"
}

// 不要在 String() 方法里面调用涉及 String() 方法的方法，它会导致意料之外的错误
//func (t TT) String() string {
//	return fmt.Sprintf("%v", t)
//}