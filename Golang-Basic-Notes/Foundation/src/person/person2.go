package person

type Person struct {
	firstname string
	lastname string
}

// 对于 getter 方法只使用成员名
func (p *Person) FirstName() string {
	return p.firstname
}

// 对于 setter 方法使用 Set 前缀
func (p *Person) SetFirstName(newName string) {
	p.firstname = newName
}