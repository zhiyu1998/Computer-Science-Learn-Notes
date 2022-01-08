package parser

import (
	"Advance/src/fetcher"
	"fmt"
	"testing"
)

func TestParseCityList(t *testing.T) {
	content, err := fetcher.Fetch("https://www.zhenai.com/zhenghun/kunming")

	if err != nil {
		panic(err)
	}

	fmt.Printf("%s\n", content)
}