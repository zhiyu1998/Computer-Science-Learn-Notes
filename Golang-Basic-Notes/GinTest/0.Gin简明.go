package main

import (
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
	"time"
)

type student struct {
	Name string
	Age int8
}

func Logger() gin.HandlerFunc {
	return func(c *gin.Context) {
		t := time.Now()
		// 给Context实例设置一个值
		c.Set("geektutu", "1111")
		// 请求前
		c.Next()
		// 请求后
		latency := time.Since(t)
		log.Print(latency)
	}
}

func demo() {
	r := gin.Default()
	r.Use(gin.Logger())
	r.Use(gin.Recovery())

	r.GET("/", func(c *gin.Context) {
		c.String(200, "Hello, Geektutu")
	})

	r.GET("/user/:name", func(context *gin.Context) {
		name := context.Param("name")
		context.String(http.StatusOK, "Hello %s", name)
	})

	r.GET("/query", func(context *gin.Context) {
		name := context.Query("name")
		role := context.DefaultQuery("role", "teacher")
		context.String(http.StatusOK, "%s is a %s", name, role)
	})

	r.POST("/form", func(context *gin.Context) {
		username := context.PostForm("username")
		password := context.DefaultPostForm("password", "000000") // 可设置默认值

		context.JSON(http.StatusOK, gin.H{
			"username": username,
			"password": password,
		})
	})

	r.POST("/posts", func(c *gin.Context) {
		id := c.Query("id")
		page := c.DefaultQuery("page", "0")
		username := c.PostForm("username")
		password := c.DefaultPostForm("username", "000000")

		c.JSON(http.StatusOK, gin.H{
			"id":       id,
			"page":     page,
			"username": username,
			"password": password,
		})
	})

	r.POST("/post", func(c *gin.Context) {
		ids := c.Query("ids")
		names := c.PostFormMap("names")

		c.JSON(http.StatusOK, gin.H{
			"ids": ids,
			"names": names,
		})
	})

	r.GET("/index", func(c *gin.Context) {
		c.String(http.StatusOK, "index")
	})

	r.GET("/redirect", func(c *gin.Context) {
		c.Redirect(http.StatusMovedPermanently, "/index")
	})

	r.GET("/goindex", func(c *gin.Context) {
		c.Request.URL.Path = "/"
		r.HandleContext(c)
	})

	defaultHandler := func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"path": c.FullPath(),
		})
	}

	v1 := r.Group("/v1")
	{
		v1.GET("/posts", defaultHandler)
		v1.GET("/series", defaultHandler)
	}

	v2 := r.Group("v2")
	{
		v2.GET("/posts", defaultHandler)
		v2.GET("/series", defaultHandler)
	}

	stu1 := &student{Name: "Geektutu", Age: 20}
	stu2 := &student{Name: "Jack", Age: 22}

	r.LoadHTMLGlob("templates/*")

	r.GET("/arr", func(c *gin.Context) {
		c.HTML(http.StatusOK, "arr.html", gin.H{
			"title":  "Gin",
			"stuArr": [2]*student{stu1, stu2},
		})
	})

	r.Run() // listen and serve on 0.0.0.0:8080
}