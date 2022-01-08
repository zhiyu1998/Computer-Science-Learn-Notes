package event

import "testing"

/**
测试
 */

func TestEven(t *testing.T) {
	if !Even(10) {
		t.Log("10 must be even")
		t.Fail()
	}
	if Even(7) {
		t.Log("7 is not even!")
		t.Fail()
	}
	// 为了看到错误结果
	if Even(10) {
		t.Log("Everything OK: 10 is even, just a test to see failed output!")
		t.Fail()
	}
}

func TestOdd(t *testing.T) {
	if !Odd(11) {
		t.Log(" 11 must be odd!")
		t.Fail()
	}
	if Odd(10) {
		t.Log(" 10 is not odd!")
		t.Fail()
	}
}
/*
var tests = []struct{ 	// Test table
	in  string
	out string

}{
	{"in1", "exp1"},
	{"in2", "exp2"},
	{"in3", "exp3"},
}

func TestFunction(t *testing.T) {
	for i, tt := range tests {
		s := FuncToBeTested(tt.in)
		if s != tt.out {
			t.Errorf("%d. %q => %q, wanted: %q", i, tt.in, s, tt.out)
		}
	}
}*/

func verify(t *testing.T, testnum int, testcase, input, output, expected string) {
	if expected != output {
		t.Errorf("%d. %s with input = %s: output %s != %s", testnum, testcase, input, output, expected)
	}
}

//func TestFunction(t *testing.T) {
//	for i, tt := range tests {
//		s := FuncToBeTested(tt.in)
//		verify(t, i, "FuncToBeTested: ", tt.in, s, tt.out)
//	}
//}