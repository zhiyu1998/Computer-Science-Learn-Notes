package mmzztt

import (
	"fmt"
	"os"
	"path/filepath"
	"regexp"
	"strings"
	"time"
	"Spiders/utils"
)

func MztSpider() {
	var url string
	// 匹配分类 标题 图集链接数据
	re := regexp.MustCompile(`rel="category">#(.+?)#</a></div>[\s\S]+?_blank">(.+?)</a></h2>[\s\S]+?<div class="uk-inline">(.+?)\n`)
	// 匹配图集链接
	reUrl := regexp.MustCompile(`(https.+?\.jpg)`)
	page := 1
	// 路径分隔符
	pathSeparator := filepath.FromSlash("/")
	curPath, _ := filepath.Abs("./")
	path := curPath + pathSeparator + "image" + pathSeparator
	for {
		if page == 1 {
			url = "https://mmzztt.com/beauty/"
		} else {
			url = "https://mmzztt.com/beauty/page/" + fmt.Sprintf("%d", page)
		}
		resp, status := utils.GetData(url)
		if status != "200" {
			fmt.Println("下载完毕！")
			return
		}
		page++
		res := re.FindAllSubmatch(*resp, -1)
		go func() {
			urlChan := make(chan []string, 32)
			for _, v := range res {
				dir := path + string(v[1]) + pathSeparator + strings.Replace(string(v[2]), ".", "", -1) + pathSeparator
				// 创建文件夹
				if _, err := os.Stat(dir); err != nil {
					os.MkdirAll(dir, 0777)
				}
				// 获取图集链接
				resUrl := reUrl.FindAllSubmatch(v[3], -1)
				urlList := make([]string, len(resUrl))
				for i , k := range resUrl {
					urlList[i] = strings.Replace(string(k[1]), "thumb300", "mw2000", -1)
				}
				urlChan <- urlList
				go utils.SaveImage(urlChan, dir)
				// 延时3秒
				time.Sleep(3 * time.Second)
			}
		}()
	}
}

