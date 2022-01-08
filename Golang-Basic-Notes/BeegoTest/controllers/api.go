package controllers

import beego "github.com/beego/beego/v2/server/web"

type ApiController struct {
	beego.Controller
}

func (c *ApiController) Get() {
	c.Ctx.WriteString("API")
}

func (c *ApiController) GetId() {
	id := c.Ctx.Input.Param("id")
	c.Ctx.WriteString(id)
}