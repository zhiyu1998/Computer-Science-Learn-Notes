package main

import (
	"bufio"
	"fmt"
	"io"
	"os"
	"strconv"
	"strings"
)

type book struct {
	title string
	price float64
	quantity int
}

func main() {
	file, err := os.Open("products.txt")
	if err != nil {
		panic(err)
	}
	defer file.Close()

	inputReader := bufio.NewReader(file)
	books := make([]book, 0)

	var splitStr []string
	for {
		newBook := new(book)
		line, err := inputReader.ReadString('\n')
		line = string(line[:len(line)-2])  // 去除末尾的换行符
		splitStr = strings.Split(line, ";")
		newBook.title = splitStr[0]
		newBook.price, _ = strconv.ParseFloat(splitStr[1], 32)
		newBook.quantity, _ = strconv.Atoi(splitStr[2])
		books = append(books, *newBook)
		//fmt.Println(line)
		if err == io.EOF {
			break
		}
	}

	fmt.Println("We have read the following books from the file: ")
	for _, bk := range books {
		fmt.Println(bk)
	}

}