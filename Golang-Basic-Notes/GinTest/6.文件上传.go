package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func demo7() {
	r := gin.Default()
	r.LoadHTMLFiles("./upload.html")

	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "upload.html", nil)
	})

	r.POST("/upload", func(c *gin.Context) {
		f, err := c.FormFile("f1")
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"error": err.Error(),
			})
		} else {
			_ = c.SaveUploadedFile(f, "C:\\Users\\54271\\Documents\\go\\src\\GinTest\\files")
			c.JSON(http.StatusOK, gin.H{
				"status": "ok",
			})
		}
	})

	r.Run(":8080")
}
