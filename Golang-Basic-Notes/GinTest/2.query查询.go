package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)



func demo3() {
	r := gin.Default()

	r.GET("/web", func(c *gin.Context) {
		query := c.Query("query")

		c.JSON(http.StatusOK, gin.H{
			"name": query,
		})
	})

	r.GET("/web2", func(c *gin.Context) {
		query := c.DefaultQuery("query", "nothing")

		c.JSON(http.StatusOK, gin.H{
			"name": query,
		})
	})

	// getquery 取不到就给有一个false
	r.GET("/web3", func(c *gin.Context) {
		name, ok := c.GetQuery("query")
		if !ok {
			name = "some else"
		}
		c.JSON(http.StatusOK, gin.H{
			"name": name,
		})
	})

	r.Run(":8080")
}
