package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

// json:"name" 使用这种方式，前端返回的Json格式就是name而不是Name
type msg2 struct {
	Name string `json:"name"`
	Message string `json:"message"`
	Age int `json:"age"`
}

func demo2() {
	r := gin.Default()

	// 使用一般方式传递JSON数据
	r.GET("/json", func(c *gin.Context) {
		data := map[string]interface{}{
			"name":    "小王子",
			"message": "hello world!",
			"age":     18,
		}
		c.JSON(http.StatusOK, data)
	})

	// 使用gin自带的H传递JSON数据
	r.GET("/json2", func(c *gin.Context) {
		data := gin.H{
			"name":    "小王子",
			"message": "hello world22222!",
			"age":     20,
		}
		c.JSON(http.StatusOK, data)
	})

	// 使用结构体方式传递JSON数据
	r.GET("/json3", func(c *gin.Context) {
		data := msg2 {
			Name:    "小王子",
			Message: "hello world3333!",
			Age:     30,
		}
		c.JSON(http.StatusOK, data)
	})

	r.Run(":8080")
}
