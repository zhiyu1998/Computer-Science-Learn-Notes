package main

import "fmt"

type FragmentImpl struct {
	i int
}
func (f FragmentImpl) Exec() {
	fmt.Printf("%p\n", &f)
	f.i = 10
}
func (f *FragmentImpl) Exec2() {
	fmt.Printf("%p\n", f)
	f.i = 10
}
func main() {
	fragment := FragmentImpl{1}
	fmt.Printf("%p --  %v \n", &fragment,fragment)
	fragment.Exec()
	fmt.Printf("%p --  %v \n", &fragment,fragment)
	(&fragment).Exec()
	fmt.Printf("%p --  %v \n", &fragment,fragment)

	fmt.Println("----------------------------")

	fragment2 := &FragmentImpl{1}
	fmt.Printf("%p --  %v \n", fragment2,fragment2)
	fragment2.Exec2()
	fmt.Printf("%p --  %v \n", fragment2,fragment2)
	(*fragment2).Exec2()
	fmt.Printf("%p --  %v \n", fragment2,fragment2)
}

