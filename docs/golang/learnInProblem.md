---
index: 1
title: 从问题中学习到Go的精髓
---

# Golang-Learn-In-Problem 从问题中学习到Go的精髓

![](./images/logo.jpg)

## 前言

参考书目及视频：

[《The Way to Go》中文译本](https://github.com/unknwon/the-way-to-go_ZH_CN)

[Go 语言简明教程](https://geektutu.com/post/quick-golang.html)

[Go: The Complete Developer's Guide](https://www.udemy.com/course/go-the-complete-developers-guide/)



注：（[Go: The Complete Developer's Guide](https://www.udemy.com/course/go-the-complete-developers-guide/)）欢迎去购买支持此课程，非常的棒！

## Start!

### Golang为什么要有一个main的包？

这个问题我在第一次学习Go的时候没有深究（因为使用的是Goland进行编写）

Golang的包分为两种：可执行包和可重复使用的包 or 依赖类型的包（里面放了很多可重用的辅助函数或可重用的东西），后者可以再分为包计算者和包上传者，如下图所示

![image-20220521211257013](./images/image-20220521211257013.png)

通过实验（使用go build编译）可以看到，如果我把package换成了其他，例如：xiaomi，没有生成文件

```shell
Mode                 LastWriteTime         Length Name

----                 -------------         ------ ----

-a----         2022/5/21     21:17             76 main.go
```

如果归为main包，就可以看到

```shell
Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         2022/5/21     21:18        1891328 main.exe
-a----         2022/5/21     21:18             74 main.go
```



代码示例：

```go
package main

import "fmt"

func main() {
	fmt.Println("Hello, world!")
}
```



### Go中的import是个什么原理？

https://pkg.go.dev/std

我的理解是通过import连接其它的可重用文件（链接其他包）

![image-20220521212519888](./images/image-20220521212519888.png)



### 【比较学习，举一反三】Go在声明上和Java有什么区别？

Java声明函数举例：

```java
public void main(String[] args) {}
```

Go函数声明：
```go
func main() string {}
```



Java声明变量：

```java
String a = "123";
```

Go声明变量：

```go
var a string = "123"
or
a := "123"
```



Java声明数组：

```java
int[] a = {1,2,3,4}
```

Go的切片：

```
a := []int{1, 2, 3, 4}
```

其中的不同就是Go的切片可以相当于Java使用ArrayList

```go
a = append(a, 5)
```



Java的for循环

```java
for (int i = 0; i < a.length(); i++) {}
or
for (int ac in a) {}
or (if a is a List)
a.stream().forEach(e -> xxx)
```

Go的for循环

```go
for i, num := range a {}
```

Python的for循环

```python
for i,num in range(a):
    xxxx
```





Go的自定义类型：

```go
type num []int
```

甚至可以为这个自定义类型声明一个成员函数

```go
type num []int

func (n num) print() {
	for i, nu := range n {
		fmt.Println(i, nu)
	}
}
```

![image-20220523105431566](./images/image-20220523105431566.png)

上述中的 func (n num)中的`(n num)`实际上是接收器参数，每一个num类型的变量都可以调用此函数，老师的意思是实际上这是一个引用！



### Go中的返回类型和Java中有什么区别？

Go可以返回多个，这个就和Java不一样，首先在函数的屁股后面加上返回的类型和个数，然后可以选择分片返回，这是Java8做不到的

```go
func deal(d deck, handSize int) (deck, deck) {
	return d[:handSize], d[handSize:]
}
```

这里的分片又和python有异曲同工之妙，用法都一样



### Go是如何读写文件的？

写

---

首先它返回一个error，原因是这个工具包如果出错会抛出一个异常；另外toString做了把一个数组转换为一坨字符串的效果；最后的0666是权限，这个一般是任何人都可以用

```go
func (d deck) saveToFile(filename string) error {
	return ioutil.WriteFile(filename, []byte(d.toString()), 0666)
}
```

再看[]byte做了什么

![image-20220524232214510](./images/image-20220524232214510.png)

最后看它函数的定义

```go
func WriteFile(filename string, data []byte, perm fs.FileMode) error

解释：WriteFile 将数据写入由文件名命名的文件。  如果文件不存在，WriteFile 使用权限 perm（在 umask 之前）创建它；  否则 WriteFile 在写入之前将其截断，而不更改权限。

// 官方例子
func main() {
	message := []byte("Hello, Gophers!")
	err := ioutil.WriteFile("hello", message, 0644)
	if err != nil {
		log.Fatal(err)
	}
}
```



读

---

先看看API函数：

```go
func ReadFile(filename string) ([]byte, error)
ReadFile 读取由 filename 命名的文件并返回内容。  成功的调用返回 err == nil，而不是 err == EOF。  因为 ReadFile 读取整个文件，所以它不会将 Read 中的 EOF 视为要报告的错误。
```

返回值也有不同

![image-20220525124905645](./images/image-20220525124905645.png)

当然这时会在想[]byte如何转换成string？当然就是直接转换即可string（[]byte）

```go
bs, err := ioutil.ReadFile(filename)
if err != nil {
    // Option #1 - log the error and return a call to newDeck()
    // Option #2 - log the error and entirely quit the program
    fmt.Println("Error:", err)
    os.Exit(1)
}
s := strings.Split(string(bs), ",")
```



### Go什么时候接收器，什么时候又把这个参数放到括号内？





### Go的测试功能要怎么写呢？

在Java中直接引入包然后注解@Test即可

在Go中需要导入`testing`

参数处还有写上：`t *testing.T`

```go
func TestNewDeck(t *testing.T) {
	d := newDeck()

	if len(d) != 16 {
		t.Errorf("Expected deck length of 16, but got %v", len(d))
	}

	if d[0] != "Ace of Spades" {
		t.Errorf("Expected first card of Ace of Spades, but got %v", d[0])
	}

	if d[len(d)-1] != "Four of Clubs" {
		t.Errorf("Expected last card of Four of Clubs, but got %v", d[len(d)-1])
	}
}
```



Go如何测试文件的写入和读取？

流程是这样的：

1. 删除任何一个当前项目中含有相同名字的文件，例如："_decktesting"
2. 创建一个想要测试的类
3. 保存这个文件
4. 加载这个文件
5. 断言这个文件的长度
6. 删除现在文件中的包含这个名字的文件，例如："_decktesting"

```go
func TestSaveToDeckAndNewDeckFromFile(t *testing.T) {
	os.Remove("_decktesting")

	d := newDeck()
	d.saveToFile("_decktesting")

	loadedDeck := newDeckFromFile("_decktesting")

	if len(loadedDeck) != 16 {
		t.Errorf("Expected 16 cards in deck, got %v", len(loadedDeck))
	}

	os.Remove("_decktesting")
}
```



### Go中的结构体

老师在课程当中形容的很形象，这个struct就像python中的字典：

```go
type person struct {
	lastName  string
	firstName string
}

func main() {
	alex := person{firstName: "Alex", lastName: "Anderson"}

}
```

可以通过这个语句查看key-value：`fmt.Printf("%+v", alex)`

注：`%+v 先输出字段类型，再输出该字段的值`



### Go结构体中调用接收体会在内存中复制的问题

```go
type contactInfo struct {
	email   string
	zipCode int
}

type person struct {
	lastName  string
	firstName string
	contactInfo
}
func main() {

	jim := person{
		firstName: "Jim",
		lastName:  "Party",
		contactInfo: contactInfo{
			email:   "jim@gmail.com",
			zipCode: 94000,
		},
	}

	jim.updateName("Jimmy")

	jim.print()
}

func (pointerToPerson *person) updateName(name string) {
	(*pointerToPerson).firstName = name
}

func (p *person) print() {
	fmt.Printf("%+v", p)
}
```

如果直接调用接收体这种函数，在内存当中Go会把原先的复制，然后在新的内存中开辟再进行修改，像是下面这个图

![image-20220529135255808](images/image-20220529135255808.png)

那么，我们如果不进行复制这步操作如何呢？首先要使用`&`获取到这个结构体所在内存的位置，然后通过Go中的指针去改变当前的结构体内容

```go
...............
    jim := person{
        firstName: "Jim",
        lastName:  "Party",
        contactInfo: contactInfo{
            email:   "jim@gmail.com",
            zipCode: 94000,
        },
    }

    jimPointer := &jim
    jimPointer.updateName("Jimmy")

    jim.print()
}
func (pointerToPerson *person) updateName(name string) {
	(*pointerToPerson).firstName = name
}
```

而每当看到`*`的时候就是想看到这个指针的值

总结：每当使用接收者作为参数传给函数的时候数据就会被复制，所以默认情况下都是再副本下完成的



而在数组切片中又有所不同：

```go
import "fmt"

func main() {
	mySlice := []string{"Hi", "There", "How", "Are", "You"}

	updateSlice(mySlice)

	fmt.Println(mySlice)
}

func updateSlice(s []string) {
	s[0] = "Bye"
}
-------------------------------------------------
[Bye There How Are You]
```

![image-20220529141540704](images/image-20220529141540704.png)

每个数组都会分配这样的属性值（length, cap, ptr to head)，然后如果要进行切片操作的话就会进行一层复制，但是这个复制只是对其属性的复制，底层还是操作着同一个数组

![image-20220530203334648](images/image-20220530203334648.png)



### Map的形容介绍

![image-20220529141826436](images/image-20220529141826436.png)



### Go在创建Map的时候有什么不同？

在Go中一般有3种方法创建map

这两个是没有初始化值的

```go
var colors map[string]string

colors ;= make(map[string]string)
```

如果有值的话：

```go
colors := map[string]string{
		"red":   "#ff0000",
		"green": "#4bf745",
		"white": "#ffffff",
	}
```

而在Java中一般创建hashmap都是这样：

```java
Map<String, String> map = new HashMap<>();
or
new HashMap<Integer, String>(){
{
        put(1, "one");
        put(2, "two");
}
or
Map.ofEntries(
        entry(1, "one"),
        entry(2, "two"),
        entry(3, "three"),
)
or
Stream.of(
            new SimpleEntry<>(1, "one"),
            new SimpleEntry<>(2, "two"),
            new SimpleEntry<>(3, "three"),
).collect(Collectors.toMap(SimpleEntry::getKey, SimpleEntry::getValue));
```



而这个map的删除元素的函数也是有所不同，使用`delete`进行删除



## 项目实践：单例爬虫、协程并发爬虫

### 使用说明

文件名称：Spiders

初始化mod
> go mod init xxx

安装goquery库（仅微博使用）

### 新浪微博
单例爬虫（需要cookie）

### 美之图
高并发协程爬虫



## 问题汇总

[go语言/golang protobuf windows解决方案](https://blog.csdn.net/qq_26041727/article/details/121728316?spm=1001.2014.3001.5501)