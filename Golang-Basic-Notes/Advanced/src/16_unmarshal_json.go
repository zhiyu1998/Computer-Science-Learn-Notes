package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

/**
 * 首字母大小写的意义：
 * 首字母大写 == public ； 首字母小写 == private
 */

type Uuid struct {
	Uuid string // 首字母大写【注意，必须大写首字母】
}

func main() {
	res, _ := http.Get("https://httpbin.org/uuid")
	//str := `{"uuid": "7b0719f9-47cf-4ffd-a5d6-1939b635ab6f"}`
	uid := Uuid{""}

	body, _ := ioutil.ReadAll(res.Body)
	json.Unmarshal([]byte(body), &uid)
	fmt.Printf("uuid: %s", uid.Uuid)

	b := []byte(`{"Name": "Wednesday", "Age": 6, "Parents": ["Gomez", "Morticia"]}`)
	var f interface{}
	err := json.Unmarshal(b, &f)
	//map[string]interface{} {
	//	"Name": "Wednesday",
	//	"Age":  6,
	//	"Parents": []interface{} {
	//		"Gomez",
	//		"Morticia",
	//	},
	//}
	if err != nil {
		panic(err)
	}
	m := f.(map[string]interface{})
	for k, v := range m {
		switch vv := v.(type) {
		case string:
			fmt.Println(k, "is string", vv)
		case int:
			fmt.Println(k, "is int", vv)

		case []interface{}:
			fmt.Println(k, "is an array:")
			for i, u := range vv {
				fmt.Println(i, u)
			}
		default:
			fmt.Println(k, "is of a type I don’t know how to handle")
		}
	}
}
