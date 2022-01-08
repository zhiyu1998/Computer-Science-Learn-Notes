package main

import (
	"fmt"
	"math"
)

type Engine interface {
	Start()
	Stop()
}

type Car struct {
	Engine
}

func (c *Car) GoToWorkIn() {
	c.Start()

	c.Stop()
}

type Point struct {
	x, y float64
}

func (p *Point) Abs() float64 {
	return math.Sqrt(p.x * p.x + p.y * p.y)
}

type NamedPoint struct {
	Point
	name string
}

// 可以覆写方法（像字段一样）：和内嵌类型方法具有同样名字的外层类型的方法会覆写内嵌类型对应的方法
func (n *NamedPoint) Abs() float64 {
	return n.Point.Abs() * 100.
}

type Log struct {
	msg string
}

type Customer struct {
	Name string
	log  *Log
}

func main() {
	n := &NamedPoint{Point{3, 4}, "Pythagoras"}
	fmt.Println(n.Abs())

	c := new(Customer)
	c.Name = "Barak Obama"
	c.log = new(Log)
	c.log.msg = "1 - Yes we can!"

	c = &Customer{"Barak Obama", &Log{"1 - Yes we can!"}}

	c.Log().Add("2 - After me the world will be a better place!")

	fmt.Println(c.Log())
}

func (l *Log) Add(s string) {
	l.msg += "\n" + s
}

func(l *Log) String() string {
	return l.msg
}

func (c *Customer) Log() *Log {
	return c.log
}