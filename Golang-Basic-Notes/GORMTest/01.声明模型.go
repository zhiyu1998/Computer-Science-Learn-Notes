package main

import (
	"gorm.io/gorm"
	"time"
)

// 标签详见：https://gorm.io/zh_CN/docs/models.html#%E5%AD%97%E6%AE%B5%E6%A0%87%E7%AD%BE

type Model01 struct {
	ID       uint `gorm:"primaryKey"`
	CreateAt time.Time
	UpdateAt time.Time
	DeleteAt gorm.DeletedAt `gorm:"index"`
}

// 字段权限控制
//type User struct {
//	Name string `gorm:"<-:create"` // 允许读和创建
//	Name string `gorm:"<-:update"` // 允许读和更新
//	Name string `gorm:"<-"`        // 允许读和写（创建和更新）
//	Name string `gorm:"<-:false"`  // 允许读，禁止写
//	Name string `gorm:"->"`        // 只读（除非有自定义配置，否则禁止写）
//	Name string `gorm:"->;<-:create"` // 允许读和写
//	Name string `gorm:"->:false;<-:create"` // 仅创建（禁止从 db 读）
//	Name string `gorm:"-"`  // 通过 struct 读写会忽略该字段
//}

// 创建/更新时间追踪
/*type User struct {
	CreateAt time.Time
	UpdateAt int
	Updated int64 `gorm:"autoUpdateTime:nano"` // 纳秒
	Updated int64 `gorm:"autoUpdateTime:milli"` //毫秒
	Created int64 `gorm:"autoCreateTime"` // 秒
}	*/

// 嵌入结构
/*type User struct {
	gorm.Model
	Name string
}
// ↓ 等效于
type User struct {
	Id uint `gorm:"primaryKey"`
	CreatedAt time.Time
	UpdatedAt time.Time
	DeleteAt gorm.DeletedAt `gorm:"index"`
	Name string
}*/
// ==================================================

/*type Author struct {
	Name  string
	Email string
}

type Blog struct {
	ID      int
	Author  Author `gorm:"embedded"`
	Upvotes int32
}
// 等效于
type Blog struct {
	ID    int64
	Name  string
	Email string
	Upvotes  int32
}*/

// ================================================

// 标签 embeddedPrefix 来为 db 中的字段名添加前缀，例如：
/*type Blog struct {
	ID      int
	Author  Author `gorm:"embedded;embeddedPrefix:author_"`
	Upvotes int32
}
// 等效于
type Blog struct {
	ID          int64
	AuthorName  string
	AuthorEmail string
	Upvotes     int32
}*/