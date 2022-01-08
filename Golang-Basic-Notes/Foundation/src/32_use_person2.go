package main

import (
	"./person"
	"fmt"
)

func main() {
	p := new(person.Person)
	p.SetFirstName("Eric")
	fmt.Println(p.FirstName())
}
