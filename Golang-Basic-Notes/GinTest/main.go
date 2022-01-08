package main

import (
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
	"time"
)

func indexHandler(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"msg": "Hello",
	})
}

func m1(c *gin.Context) {
	log.Println("m1 in .....")

	start := time.Now()
	c.Next() // 调用后续的处理函数
	//c.Abort() // 阻止调用后续的处理函数
	cost := time.Since(start)
	log.Printf("%v\n", cost)
	log.Println("m1 out.........")
}

func main() {
	r := gin.Default()

	//r.Use(m1) // 全局注册中间件

	r.GET("/index", m1, indexHandler)

	group1 := r.Group("/group1", m1)
	{
		group1.GET("/index", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"msg": "group1",
			})
		})
	}

	r.Run(":8080")
}
