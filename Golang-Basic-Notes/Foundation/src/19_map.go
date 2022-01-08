package main

import (
	"fmt"
	"sort"
)

var (
	barVal = map[string]int{"alpha": 34, "bravo": 56, "charlie": 23,
		"delta": 87, "echo": 56, "foxtrot": 12,
		"golf": 34, "hotel": 16, "indio": 87,
		"juliet": 65, "kili": 43, "lima": 98}
)

func main() {
	var mapList map[string]int
	var mapAssigned map[string]int

	mapList = map[string]int{"one": 1, "two": 2}
	mapCreated := make(map[string]float32)
	mapAssigned = mapList

	mapCreated["key1"] = 4.5
	mapCreated["key2"] = 3.14159
	mapAssigned["two"] = 3

	fmt.Printf("Map literal at \"one\" is: %d\n", mapList["one"])
	fmt.Printf("Map created at \"key2\" is: %f\n", mapCreated["key2"])
	fmt.Printf("Map assigned at \"two\" is: %d\n", mapList["two"])
	fmt.Printf("Map literal at \"ten\" is: %d\n", mapList["ten"])

	//用切片作为 map 的值
	//mp1 := make(map[int][]int)
	//mp2 := make(map[int]*[]int)

	// 测试键值对是否存在
	value, isPresent := mapCreated["key2"]
	if isPresent {
		fmt.Println(value)
	} else {
		fmt.Printf("map1 does not contain key2")
	}

	// map的删除操作：delete(map_name, key)
	//delete(mapCreated, "key2")
	//value, isPresent = mapCreated["key2"]
	//if isPresent {
	//	fmt.Println(value)
	//} else {
	//	fmt.Printf("map1 does not contain key2")
	//}

	// for-range 的配套用法
	for key, value := range mapCreated {
		fmt.Printf("key is: %s - value is: %f\n", key, value)
	}

	// map 类型的切片
	// 实现方法1
	// 第一次分配切片，第二次分配切片中每个 map 元素
	items := make([]map[int]int, 5) // <==  注意第一次分配切片的时候是分配数组 map
	for i := range items {
		items[i] = make(map[int]int, 1)
		items[i][1] = 2
	}
	fmt.Printf("Version A: Value of items: %v\n", items)

	// 实现方法2
	items2 := make([]map[int]int, 5)
	for _, item := range items2 {
		item = make(map[int]int, 1)
		item[1] = 2
	}
	fmt.Printf("Version B: Value of items: %v\n", items2)

	// 排序：如果你想为 map 排序，需要将 key（或者 value）拷贝到一个切片，
	//再对切片排序（使用 sort 包），然后可以使用切片的 for-range 方法打印出所有的 key 和 value。
	fmt.Println("unsorted")
	for k, v := range barVal {
		fmt.Printf("Key: %v, Value: %v / ", k, v)
	}
	keys := make([]string, len(barVal))
	i := 0
	for k, _ := range barVal {
		keys[i] = k
		i++
	}
	sort.Strings(keys)
	fmt.Println()
	fmt.Println("sorted")
	for k, v := range barVal {
		fmt.Printf("Key: %v, Value: %v / ", k, v)
	}

	// map 的键值对调
	invMap := make(map[int]string, len(barVal))
	for k, v := range barVal {
		invMap[v] = k
	}
	fmt.Println("inverted:")
	for k, v := range invMap {
		fmt.Printf("Key: %v, Value: %v / ", k, v)
	}
}
