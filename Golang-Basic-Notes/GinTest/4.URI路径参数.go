package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func demo5() {
	r := gin.Default()

	r.GET("/:name/:age", func(c *gin.Context) {
		// 获取路径参数
		name := c.Param("name")
		age := c.Param("age")
		c.JSON(http.StatusOK, gin.H{
			"name": name,
			"age": age,
		})
	})

	r.Run(":8080")
}
