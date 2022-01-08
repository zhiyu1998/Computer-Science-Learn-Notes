package main

import (
	"flag"
	"fmt"
	"os"
)

func cat2(f *os.File) {
	const NBUF = 512
	var buf [NBUF]byte
	for {
		switch nr, err := f.Read(buf[:]); true {
		case nr < 0:
			fmt.Fprintf(os.Stderr, "cat error reading: %s\n", err.Error())
		case nr == 0:  // EOF
			return
		case nr > 0: // 没有到底
			if nw, ew := os.Stdout.Write(buf[0:nr]); nw != nr {
				fmt.Fprintf(os.Stderr, "cat:error writing: %s\n", ew.Error())
		}
		}
	}
}

func main() {
	flag.Parse()
	if flag.NArg() == 0 {
		cat2(os.Stdin)
	}
	for i := 0; i < flag.NArg(); i++ {
		f, err := os.Open(flag.Arg(i))
		if f == nil {
			fmt.Fprintf(os.Stderr, "cat: can't open %s: error %s\n", flag.Arg(i), err)
			os.Exit(1)
		}
		cat2(f)
		f.Close()
	}
}