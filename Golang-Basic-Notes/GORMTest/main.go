package main

import (
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/schema"
	"log"
)

type T_tag struct {
	Id int `gorm:"primaryKey"`
	Name string
}

func main() {
	dsn := "root:123456@tcp(127.0.0.1:3306)/blog?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{
		NamingStrategy: schema.NamingStrategy{
			SingularTable: true, // 使用单数表明
		},
	})
	if err != nil {
		panic("failed to connect database")
	}

	// 用主键检索
	var tag T_tag
	var tags []T_tag
	db.First(&tag, 1)
	log.Println(tag)

	// 查询全部对象
	db.Find(&tags, []int{1,2,3})
	log.Println(tags)

	db.Find(&tags)
	log.Println(tags)

	// 条件查询
	db.Where("name = ?", "Java").First(&tag)
	log.Println(tag)

	// 获取全部匹配的记录
	db.Where("name <> ?", "Golang")

	// IN
	db.Where("name IN ?", []string{"Java", "Golang"}).Find(&tags)
	log.Println(tags)

	// LIKE
	db.Where("name LIKE ?", "%ola%").Find(&tags)
	log.Println(tags)

	// AND
	db.Where("name LIKE ? AND id >= ?", "%o%", "2").Find(&tags)
	log.Println(tags)

	// Between
	db.Where("id BETWEEN ? AND ?", 2, 4).Find(&tags)
	log.Println(tags)

	// Struct
	// SELECT * FROM t_tag WHERE name = "Java" ORDER BY id LIMIT 1;
	db.Where(&T_tag{Name: "Java"}).First(&tag)
	log.Println(tag)

	// Map
	// SELECT * FROM t_tag WHERE name = "Golang"
	db.Where(map[string]interface{}{"name": "Golang"}).Find(&tags)
	log.Println(tags)

	// 主键切片条件
	// SELECT * FROM t_tag WHERE id IN (4, 5);
	db.Where([]int64{4, 5}).Find(&tags)
	log.Println(tags)

	// 内联条件
	// SELECT * FROM t_tag WHERE id = 'string_primary_key';
	db.First(&tag, "name = ?", "Java")
	log.Println(tag)

	db.Find(&tags, "name = ?", "Golang")
	log.Println(tags)

	db.Find(&tags, map[string]interface{}{"name": "Golang"})
	log.Println(tags)

	// SELECT * FROM t_tag WHERE NOT name = "Java" ORDER BY id LIMIT 1;
	db.Not("name = ?", "Java").Find(&tags)
	log.Println(tags)

	// NOT IN
	// SELECT * FROM t_tag WHERE name NOT IN ("Spring", "SpringBoot");
	db.Not(map[string]interface{}{"name": []string{"Spring", "SpringBoot"}}).Find(&tags)
	log.Println(tags)

	// Struct
	db.Not(T_tag{Name: "Java"}).First(&tag)
	log.Println(tag)

}