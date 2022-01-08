package main

import (
	"bufio"
	"flag"
	"fmt"
	"io"
	"os"
)

var numberFlag = flag.Bool("n", false, "number each line")

func cat(r *bufio.Reader) {
	index := 0
	for {
		buf, err := r.ReadBytes('\n')
		if err == io.EOF {
			break
		}
		if *numberFlag {
			fmt.Fprintf(os.Stdout, "%d: %s", index, buf)
			index++
		} else {
			fmt.Fprintf(os.Stdout, "%s", buf)
		}
	}
	return
}

// 使用切片读取文件
func cat1(f *os.File) {
	const NBUF = 512
	var buf [NBUF]byte
	for {
		switch nr, err := f.Read(buf[:]); {
		case nr < 0:
			fmt.Fprintf(os.Stderr, "cat: error reading: %s\n", err.Error())
			os.Exit(1)
		case nr == 0: // EOF
			return
		case nr > 0:
			if nw, ew := os.Stdout.Write(buf[0:nr]); nw != nr {
				fmt.Fprintf(os.Stderr, "cat:error writing %s\n", ew.Error())
			}
		}
	}
}

// go run .\13_cat.go ../hello.txt ../yrg.txt
func main() {
	flag.Parse() // 激活 arg(i)
	//println(flag.NArg())
	if flag.NArg() == 0 {
		cat(bufio.NewReader(os.Stdin))
	}
	for i := 0; i < flag.NArg(); i++ {
		f, err := os.Open(flag.Arg(i))
		if err != nil {
			fmt.Fprintf(os.Stderr, "%s:error reading from %s: %s\n", os.Args[0], flag.Arg(i), err.Error())
			continue
		}
		cat(bufio.NewReader(f))

		// 切片读取
		//cat1(f)
		f.Close()
	}
}
