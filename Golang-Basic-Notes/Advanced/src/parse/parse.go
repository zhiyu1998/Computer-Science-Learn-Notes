package parse

import (
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

	// Fields 把输入的用空格分隔的字符串转换为一个数组
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

