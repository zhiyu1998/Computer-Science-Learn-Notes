package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
)

type UserInfo struct {
	Username string `form:"username"`
	Password string	`form:"password"`
}

func demo6() {
	r := gin.Default()

	r.GET("/user", func(c *gin.Context) {
		username := c.Query("username")
		password := c.Query("password")
		u := UserInfo{
			Username: username,
			Password: password,
		}
		fmt.Println(u)
		c.JSON(http.StatusOK, gin.H{
			"message": "ok",
		})
	})

	// 参数绑定
	r.GET("/user2", func(c *gin.Context) {
		var u UserInfo
		// 如果只是u，那么是值传递，只是拷贝
		// 其次结构体中的命名要首字母大写
		err := c.ShouldBind(&u)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"error": err.Error(),
			})
		} else {
			fmt.Println(u)
			c.JSON(http.StatusOK, gin.H{
				"message": "ok",
			})
		}
	})

	r.Run(":8080")
}
