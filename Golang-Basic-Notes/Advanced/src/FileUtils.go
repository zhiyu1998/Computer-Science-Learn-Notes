package main

import (
	"bufio"
	"compress/gzip"
	"fmt"
	"io"
	"io/ioutil"
	"os"
)

/**
	保存string
 */
func save(filename string, content string) {
	file, err := os.OpenFile(filename, os.O_WRONLY|os.O_CREATE, 0666)
	if err != nil {
		panic(err)
	}
	defer file.Close()

	writer := bufio.NewWriter(file)
	writer.WriteString(content)
	writer.Flush()
}

/**
	保存byte
 */
func save4IOUtil(filename string, content []byte) (err error) {
	return ioutil.WriteFile(filename, content, 0666)
}

/**
	直接把文件内容保存为一个字符串
 */
func loadString(filename string) string {
	readFile, err := ioutil.ReadFile(filename)
	if err != nil {
		panic(err)
	}
	return string(readFile)
}

/**
	逐行读取，并保存到一个字符串数组中
 */
func loadInLine(filename string) []string {
	file, err := os.Open(filename)
	if err != nil {
		panic(err)
	}
	defer file.Close()

	if err != nil {
		//fmt.Println(inputError)
		fmt.Printf("An error occurred on opening the inputfile\n" +
			"Does the file exist?\n" +
			"Have you got acces to it?\n")
		return []string{} // exit the function on error
	}
	defer file.Close()

	inputReader := bufio.NewReader(file)
	strs := make([]string, 0)
	for {
		inputString, readError := inputReader.ReadString('\n')
		strs = append(strs, inputString)
		if readError == io.EOF {
			return []string{}
		}
	}
	return strs
}

/**
buffer 读取文件
 */
func loadByBuf(filename string) {
	f, err := os.Open(filename)
	if err != nil {
		panic(err)
	}
	for {
		buf, err := bufio.NewReader(f).ReadBytes('\n')
		fmt.Fprintf(os.Stdout, "%s", buf)
		if err == io.EOF {
			break
		}
	}
	f.Close()
}

/**
	读取GZip文件
 */
func loadGz(filename string) {
	fName := filename
	var r *bufio.Reader
	fi, err := os.Open(fName)
	if err != nil {
		fmt.Fprintf(os.Stderr, "%v, Can't open %s: error: %s\n", os.Args[0], fName,
			err)
		os.Exit(1)
	}
	defer fi.Close()

	fz, err:= gzip.NewReader(fi)
	if err != nil {
		//panic(err)
		r = bufio.NewReader(fi)
	} else {
		r = bufio.NewReader(fz)
	}

	for {
		line, err := r.ReadString('\n')
		if err != nil {
			fmt.Println("Done reading file")
			os.Exit(0)
		}
		fmt.Println(line)
	}
}

/**
用切片读写文件
 */
func cat(f *os.File) {
	const NBUF = 512
	var buf [NBUF]byte
	for {
		switch nr, err := f.Read(buf[:]); true {
		case nr < 0:
			fmt.Fprintf(os.Stderr, "cat: error reading: %s\n", err.Error())
			os.Exit(1)
		case nr == 0: // EOF
			return
		case nr > 0:
			if nw, ew := os.Stdout.Write(buf[0:nr]); nw != nr {
				fmt.Fprintf(os.Stderr, "cat: error writing: %s\n", ew.Error())
			}
		}
	}
}

/**
	文件拷贝
 */
/*func CopyFile(dstName, srcName string) (written int64, err error) {
	src, err := os.Open(srcName)
	if err != nil {
		return
	}
	defer src.Close()

	dst, err := os.Create(dstName)
	if err != nil {
		return
	}
	defer dst.Close()

	return io.Copy(dst, src)
}*/

// 测试
func main() {
	//save("hello.txt", "HHHHHHHHHHHHHHHHHH")
	loadByBuf("hello.txt")
}