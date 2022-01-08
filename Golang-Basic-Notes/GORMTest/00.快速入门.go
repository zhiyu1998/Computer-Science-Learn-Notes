package main

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"log"
)

type Product struct {
	gorm.Model
	Code string
	Price uint
}

func Create(db *gorm.DB) {
	// 迁移 schema
	db.AutoMigrate(&Product{})

	// Create
	db.Create(&Product{Code: "D42", Price: 100})
}

func demo1() {
	db, err := gorm.Open(sqlite.Open("test.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	var product Product
	db.First(&product, 1) // 根据整形主键查找
	log.Println(product)
	db.First(&product, "code = ?", "D42") // 查找code字段值为D42的记录
	log.Println(product)

	println()

	db.Model(&product).Update("Price", 200)
	log.Println(product)
	db.Model(&product).Updates(Product{Price: 200, Code: "F42"}) // 仅更新非零值字段
	log.Println(product)
	db.Model(&product).Updates(map[string]interface{}{"Price": 200, "Code": "F42"})
	log.Println(product)

	// 删除 product
	db.Delete(&product, 1)
	log.Println(product)
}