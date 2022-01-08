package main

import (
	"Advance/src/engine"
	"Advance/src/parser"
)

func main() {
	engine.Run(engine.Request{
		Url: "http://www.zhenai.com/zhenghun",
		ParseFunc: parser.ParseCityList,
	})
}

