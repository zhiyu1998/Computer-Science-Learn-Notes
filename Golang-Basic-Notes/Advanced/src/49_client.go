package main

import (
	"bufio"
	"fmt"
	"net"
	"os"
	"strings"
)

func main() {
	// 打开连接(通过 net.Dial 创建了一个和服务器之间的连接)
	// 在网络编程中 net.Dial 函数是非常重要的，一旦你连接到远程系统，就会返回一个 Conn 类型接口，我们可以用它发送和接收数据
	conn, err := net.Dial("tcp", "localhost:50000")
	if err != nil {
		//由于目标计算机积极拒绝而无法创建连接
		fmt.Println("Error dialing", err.Error())
		return // 终止程序
	}

	inputReader := bufio.NewReader(os.Stdin)
	fmt.Println("First, what is your name?")
	clientName, _ := inputReader.ReadString('\n')
	trimmedClient := strings.Trim(clientName, "\n")

	for {
		fmt.Println("What to send to the server? Type Q to quit.")
		input, _ := inputReader.ReadString('\n')
		trimmedInput := strings.Trim(input, "\n")

		if trimmedInput == "Q" || trimmedInput == "q" {
			return
		}
		_, err = conn.Write([]byte(trimmedClient + ": " + trimmedInput))
	}
}