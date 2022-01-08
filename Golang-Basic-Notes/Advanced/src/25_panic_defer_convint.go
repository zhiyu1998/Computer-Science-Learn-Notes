package main

import (
	"fmt"
	"log"
	"math"
)

func IntFrom64(param int64) int {
	if math.MinInt32 <= param && param <= math.MaxInt32 {
		return int(param)
	}
	panic(fmt.Sprintf("%d is out of the int32 range\n", param))
}

func ConvertInt64ToInt(param int64) (int, error) {
	defer func() {
		if err := recover(); err != nil {
			log.Println("ConvertInt64ToInt Error: %s", err)
		}
	}()
	res := IntFrom64(param)
	return res, nil
}

func main() {
	l := int64(15000)
	if i, err := ConvertInt64ToInt(l); err != nil {
		fmt.Printf("The conversion of %d to an int32 resulted in an error: %s", l, err.Error())
	} else {
		fmt.Printf("%d converted to an int32 is %d", l, i)
	}
	fmt.Println()
	l = int64(math.MaxInt32 + 15000)
	if i, err := ConvertInt64ToInt(l); err != nil {
		fmt.Printf("The conversion of %d to an int32 resulted in an error: %s", l, err.Error())
	} else {
		fmt.Printf("%d converted to an int32 is %d\n", l, i)
	}
}