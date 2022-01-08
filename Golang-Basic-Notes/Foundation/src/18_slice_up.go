package main

import (
	"fmt"
	"io/ioutil"
	"regexp"
)
/** append 函数常见操作
1. 将切片 b 的元素追加到切片 a 之后：a = append(a, b...)

2. 复制切片 a 的元素到新的切片 b 上：

b = make([]T, len(a))
copy(b, a)
3. 删除位于索引 i 的元素：a = append(a[:i], a[i+1:]...)

4. 切除切片 a 中从索引 i 至 j 位置的元素：a = append(a[:i], a[j:]...)

5.为切片 a 扩展 j 个元素长度：a = append(a, make([]T, j)...)

6. 在索引 i 的位置插入元素 x：a = append(a[:i], append([]T{x}, a[i:]...)...)

7. 在索引 i 的位置插入长度为 j 的新切片：a = append(a[:i], append(make([]T, j), a[i:]...)...)

8. 在索引 i 的位置插入切片 b 的所有元素：a = append(a[:i], append(b, a[i:]...)...)

9. 取出位于切片 a 最末尾的元素 x：x, a = a[len(a)-1], a[:len(a)-1]

10. 将元素 x 追加到切片 a：a = append(a, x)
 */

//  将切片传递给函数
func sum1(a []int) int {
	s := 0
	for i := 0; i < len(a); i++ {
		s += a[i]
	}
	defer fmt.Println("sum: ", s)

	return s
}

func main() {
	a181 := [...]int{1, 2, 3, 4, 5, 6, 7}
	for i := range a181[2:4] {
		fmt.Println(a181[i])
	}

	a182 := a181[2:4]
	fmt.Println(a182)

	sum1(a181[2:])

	// new和make的区别：new 函数分配内存，make 函数初始化
	var slice1 []int = make([]int, 10)
	fmt.Println(slice1)

	// make([]type, start_length, capacity)
	// 这么做的好处是我们的切片在达到容量上限后可以扩容
	v := make([]int, 10, 50)
	for i := 0; i < len(v); i++ {
		v[i] = i
	}
	//println(v[9])

	var slice2 []int = make([]int, 4)

	slice2[0] = 1
	slice2[1] = 2
	slice2[2] = 3
	slice2[3] = 4

	for ix, value := range slice2 {
		fmt.Printf("Slice at %d is: %d\n", ix, value)
	}

	slice3 := make([]int, 0, 10)
	// 切片扩展
	for i := 0; i < cap(slice3); i++ {
		slice3 = slice3[0 : i+1]
		slice3[i] = i
		fmt.Println("The length of slice is %d\n", len(slice3))
	}

	// print the slice:
	for i := 0; i < len(slice3); i++ {
		fmt.Printf("Slice at %d is %d\n", i, slice3[i])
	}

	slFrom := []int{1, 2, 3}
	slTo := make([]int, 10)

	n := copy(slTo, slFrom)
	fmt.Println(slTo)
	fmt.Printf("Copied %d elements\n", n) // n == 3

	sl3 := []int{1, 2, 3}
	sl3 = append(sl3, 4, 5, 6)
	fmt.Println(sl3)

	s1 := "\u00ff\u754c"

	for i, v := range s1 {
		fmt.Printf("%d:%c", i, v)
	}


}

var digitRegexp = regexp.MustCompile("[0-9]+")
// 这段代码可以顺利运行，但返回的 []byte 指向的底层是整个文件的数据。
// 只要该返回的切片不被释放，垃圾回收器就不能释放整个文件所占用的内存
func FindDigits(filename string) []byte {
	b, _ := ioutil.ReadFile(filename)
	return digitRegexp.Find(b)
}

// 通过拷贝我们需要的部分到一个新的切片中
func FindFileDigits(filename string) []byte {
	fileBytes, _ := ioutil.ReadFile(filename)
	b := digitRegexp.FindAll(fileBytes, len(fileBytes))
	c := make([]byte, 0)
	for _, bytes := range b {
		c = append(c, bytes...)
	}
	return c
}
