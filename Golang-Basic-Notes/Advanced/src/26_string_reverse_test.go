package main

import "testing"

/** Go 中的单元测试和基准测试
文件名满足这种形式 *_test.go
测试文件中必须导入 "testing" 包

测试理应包括：
正常的用例
反面的用例（错误的输入，如用负数或字母代替数字，没有输入等）
边界检查用例（如果参数的取值范围是 0 到 1000，检查 0 和 1000 的情况）

可以用命令：go test（或 make test）来测试 even 包。
 */

type ReverseTest struct {
	in, out string
}

var ReverseTests = []ReverseTest{
	{"ABCD", "DCBA"},
	{"CVO-AZ", "ZA-OVC"},
	{"Hello 世界", "界世 olleH"},
}

func Reverse(s string) string {
	runes := []rune(s)
	n, h := len(runes), len(runes)/2
	for i := 0; i < h; i++ {
		runes[i], runes[n-1-i] = runes[n-1-i], runes[i]
	}
	return string(runes)
}

// T is a type passed to Test functions to manage test state and support formatted test logs.
func TestReverse(t *testing.T) {
	for _, r := range ReverseTests {
		exp := Reverse(r.in)
		if r.out != exp {
			t.Errorf("Reverse of %s expects %s, but got %s", r.in, exp, r.out)
		}
	}
}

// B is a type passed to Benchmark functions to manage benchmark timing and to specify the number of iterations to run.
func BenchmarkReverse(b *testing.B) {
	s := "ABCD"
	for i := 0; i < b.N; i++ {
		Reverse(s)
	}
}