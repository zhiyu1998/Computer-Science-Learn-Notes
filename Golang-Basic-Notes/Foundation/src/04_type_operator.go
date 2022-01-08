package main

import (
	"fmt"
	"math"
	"math/rand"
	"time"
)

func Uint8FromInt(n int) (uint8, error) {
	if 0 <= n && n <= math.MaxUint8 {
		return uint8(n), nil
	}
	return 0, fmt.Errorf("%d is out of the uint8 range", n)
}

func IntFromFloat64(x float64) int {
	if math.MinInt32 <= x && x <= math.MaxInt32 { // x lies in the integer range
		whole, fraction := math.Modf(x)
		if fraction >= 0.5 {
			whole++
		}
		return int(whole)
	}
	panic(fmt.Sprintf("%g is out of the int32 range", x))
}

func main() {
	var aVar = 10
	fmt.Println(aVar == 5)

	// Go 中不允许不同类型之间的混合使用，但是对于常量的类型限制非常少，因此允许常量之间的混合使用
	//var a int
	var b int32
	//a = 15
	//b = a + a	 // 编译错误
	b = b + 5 // 因为 5 是常量，所以可以通过编译

	fmt.Println(math.MaxUint8) // 255

	Uint8FromInt(20)

	// 复数形式
	var c1 complex64 = 10 + 5i
	fmt.Println(c1)

	var (
		re float32 = 10
		im float32 = 5
	)
	// re 和 im 的类型均为 float32，那么类型为 complex64 的复数 c 可以通过以下方式来获得
	var c complex64 = complex(re, im)
	fmt.Println(c)

	fmt.Println(1 << 10) // 1KB
	fmt.Println(1 << 20) // 1MB
	fmt.Println(1 << 30) // 1GB

	fmt.Println(100 >> 2) // 100 / 2^2
	fmt.Println(100 >> 3) // 100 / 2^3 = 12.5 -> floor -> 12

	// m^x，对于无符号 x 使用“全部位设置为 1”，对于有符号 x 时使用 m=-1
	fmt.Println(^10) //   ^10 = -01 ^ 10 = -11

	// 使用位左移与 iota 计数配合可优雅地实现存储单位的常量枚举
	type ByteSize float64
	const (
		_           = iota // 通过赋值给空白标识符来忽略值
		KB ByteSize = 1 << (10 * iota)
		MB
		GB
		TB
		PB
		EB
		ZB
		YB
	)

	// random number
	for i := 0; i < 5; i++ {
		r := rand.Intn(10)
		fmt.Printf("%d / ",r)
	}

	fmt.Println()

	times := int64(time.Now().Nanosecond())
	rand.Seed(times)
	for i := 0; i < 10; i++ {
		fmt.Printf("%2.2f / ", 100 * rand.Float32())
	}

	// 类型别名: 当前是把Int换成了 TZ
	type TZ int

	var a, a1 TZ = 3, 4
	a2 := a + a1
	fmt.Printf("c has the value: %d", a2) // 输出：c has the value: 7
}
