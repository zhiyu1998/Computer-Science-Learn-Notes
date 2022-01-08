package main

import (
	"bufio"
	"fmt"
	"io"
	"os"
)

func main() {
	inputFile, _ := os.Open("hello.txt")
	outputFile, _ := os.OpenFile("hello_3till5char.txt", os.O_WRONLY|os.O_CREATE|os.O_APPEND, 0666)
	defer inputFile.Close()
	defer outputFile.Close()
	inputReader := bufio.NewReader(inputFile)
	outputWriter := bufio.NewWriter(outputFile)
	for {
		inputString, _, readError := inputReader.ReadLine()
		if readError == io.EOF {
			fmt.Println("EOF")
			break
		}
		outputString := string(inputString[2:5]) + "\n"
		_, err := outputWriter.WriteString(outputString)
		println(outputString)
		if err != nil {
			fmt.Println(err)
			return
		}
	}
	outputWriter.Flush()
	fmt.Println("Conversion done")
}
