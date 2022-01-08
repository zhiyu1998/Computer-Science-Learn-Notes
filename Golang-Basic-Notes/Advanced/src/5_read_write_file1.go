package main

import (
	"fmt"
	"io/ioutil"
	"os"
)

func main() {
	inputFile := "yrg.txt"
	outputFile := "yrg_copy.txt"
	buf, err := ioutil.ReadFile(inputFile)
	if err != nil {
		fmt.Fprintf(os.Stderr, "File Error: %s\n", err)
	}
	fmt.Printf("%s\n", string(buf))

	err = ioutil.WriteFile(outputFile, buf, 0644)
	if err != nil {
		panic(err)
	}

	// 带缓冲的读取
	//buf := make([]byte, 1024)
	//n, err := inputReader.Read(buf)
}
