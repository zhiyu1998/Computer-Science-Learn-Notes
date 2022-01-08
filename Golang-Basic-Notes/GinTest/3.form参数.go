package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)



func demo4() {
	r := gin.Default()
	r.LoadHTMLFiles("./login.html")

	r.GET("/login", func(c *gin.Context) {
		c.HTML(http.StatusOK, "login.html", nil)
	})

	r.POST("/login", func(c *gin.Context) {
		username := c.PostForm("username")
		password := c.PostForm("password")
		c.JSON(http.StatusOK, gin.H{
			"username": username,
			"password": password,
		})
	})

	r.Run(":8080")
}
