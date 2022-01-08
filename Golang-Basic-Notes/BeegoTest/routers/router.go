package routers

import (
	beego "github.com/beego/beego/v2/server/web"
	"web/controllers"
)

func init() {
    beego.Router("/", &controllers.MainController{})
    beego.Router("/goods", &controllers.GoodsController{})
	beego.Router("/article", &controllers.ArticleController{})

	beego.Router("/article/add", &controllers.ArticleController{}, "get:AddArticle")
	beego.Router("/article/edit", &controllers.ArticleController{}, "get:EditArticle")

	beego.Router("/user", &controllers.UserController{})
	beego.Router("/user/add", &controllers.UserController{}, "get:AddUser")
	beego.Router("/user/doAdd", &controllers.UserController{}, "post:DoAdduser")

	beego.Router("/api", &controllers.ApiController{})
	beego.Router("/api/:id", &controllers.ApiController{}, "get:GetId")
}
