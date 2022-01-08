package controllers

import (
	beego "github.com/beego/beego/v2/server/web"
	"log"
)

type ArticleController struct {
	beego.Controller
}

func (c *ArticleController) Get() {
	c.Ctx.WriteString("新闻列表")
}

func (c *ArticleController) AddArticle() {
	c.Ctx.WriteString("增加新闻")
}

func (c *ArticleController) EditArticle() {
	id := c.GetStrings("id")
	log.Println(id)
	c.Ctx.WriteString("修改新闻")
}