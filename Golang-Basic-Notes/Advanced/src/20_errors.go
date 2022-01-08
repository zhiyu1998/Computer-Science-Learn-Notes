package main

import (
	"errors"
	"fmt"
	"math"
)

var errNotFound error = errors.New("Not Found Error")

func Sqrt(f float64) (float64, error) {
	if f < 0 {
		return 0, errors.New("math - square root of negative number")
	}
	return math.Sqrt(f), nil
}

func main() {
	fmt.Printf("error: %v", errNotFound)

	if f, err := Sqrt(-1); err != nil {
		fmt.Printf("Error: %s\n", err)
	} else {
		fmt.Println(f)
	}
}