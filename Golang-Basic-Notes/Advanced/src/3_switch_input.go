package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	inputReader := bufio.NewReader(os.Stdin)
	fmt.Print("Please enter your name: ")
	input, err := inputReader.ReadString('\n')

	if err != nil {
		fmt.Println("There were errors reading, exiting program.")
		return
	}
	fmt.Printf("Your name is %s", input)

	// For Unix: test with delimiter "\n", for Windows: test with "\r\n"
	switch input {
	case "Philip\n":  fmt.Println("Welcome Philip!")
	case "Chris\n":   fmt.Println("Welcome Chris!")
	case "Ivo\n":     fmt.Println("Welcome Ivo!")
	default: fmt.Printf("You are not welcome here! Goodbye!")
	}
}