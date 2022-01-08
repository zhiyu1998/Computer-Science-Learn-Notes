package main

import (
	"flag"
	"fmt"
	"strconv"
	"strings"
)

type ParseError struct {
	Index int
	Word string
	Err error
}

func (e *ParseError) String() string {
	return fmt.Sprintf("pkg parse: error parsing %q as int", e.Word)
}

func Parse(input string) (numbers []int, err error) {
	defer func() {
		if r := recover(); r != nil {
			var ok bool
			err, ok = r.(error)
			if !ok {
				err = fmt.Errorf("plg: %v", r)
			}
		}
	}()

	fields := strings.Fields(input)
	numbers = fields2number(fields)
	return numbers, err
}

func fields2number(fields []string) (numbers []int) {
	if len(fields) == 0 {
		panic("no words to parse")
	}
	for idx, field := range fields {
		num, err := strconv.Atoi(field)
		if err != nil {
			panic(&ParseError{idx, field, err})
		}
		numbers = append(numbers, num)
	}
	return numbers
}


var NewLine = flag.Bool("n", false, "print newline") // echo -n flag, of type *bool

const (
	Newline = "\n"
)

func main() {
	flag.Parse()
	var s string = ""
	for i := 0; i < flag.NArg(); i++ {
		if i > 0 {
			s += " "
			if *NewLine { // -n is parsed, flag becomes true
				s += Newline
			}
		}
		s += flag.Arg(i)
	}
	NumList, _ := Parse(s)
	for _, value := range NumList {
		fmt.Println(value)
	}
}