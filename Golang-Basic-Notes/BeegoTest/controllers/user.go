package controllers

import beego "github.com/beego/beego/v2/server/web"

type UserController struct {
	beego.Controller
}

func (c *UserController) Get() {
	c.Ctx.WriteString("用户中心")
}

func (c *UserController) AddUser() {
	c.TplName = "user.html"
}

func (c *UserController) DoAdduser() {
	username := c.GetString("username")
	password := c.GetString("password")
	c.Ctx.WriteString("用户中心 -- " + username + password)
}