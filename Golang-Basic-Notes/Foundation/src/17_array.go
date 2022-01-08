package main

import "fmt"

func main() {
	var arr1 [5]int

	for i := 0; i < len(arr1); i++ {
		arr1[i] = i * 2
	}

	fmt.Println(arr1) // [0 2 4 6 8]

	for i := 0; i < len(arr1); i++ {
		fmt.Printf("Array at index %d is %d\n", i, arr1[i])
	}

	a171 := [...]string{"a", "b", "c", "d"}
	for i := range a171 {
		fmt.Println("Array item", i, "is", a171[i])
	}

	// 将数组传递给函数
	array := [3]float64{7.0, 8.5, 9.1}
	x := sum(&array) // Note the explicit address-of operator
	// to pass a pointer to the array
	fmt.Printf("The sum of the array is: %f", x)
}

func sum(a *[3]float64) (sum float64) {
	for _, v := range a {
		sum += v
	}
	return
}