package utils

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"regexp"
	"time"
)

// 检测版本
func Init() {
	const version = "v1.0.2"
	url := "https://docs.qq.com/dop-api/opendoc?id=DT3F6UmhxS3VaQXZ1&normal=1"
	resp, err := http.Get(url)
	if err != nil {
		log.Println("版本检测错误！")
		time.Sleep(5 * time.Second)
		os.Exit(1)
	}
	defer resp.Body.Close()
	body, _ := ioutil.ReadAll(resp.Body)
	re := regexp.MustCompile("loli{(.+?),(.+?),(.+?)}loli")
	res := re.FindAllSubmatch(body, -1)
	ver := string(res[0][1])
	updateContent := string(res[0][2])
	link := string(res[0][3])
	if ver != version {
		fmt.Printf("当前版本：%s\n最新版本：%s\n更新内容：%s\n%s\n", version, ver, updateContent, link)
		time.Sleep(5 * time.Second)
		os.Exit(1)
	}
}

func GetData(url string) (*[]byte, string) {
	var client = &http.Client{}
	var referer string

	req, _ := http.NewRequest("GET", url, nil)
	req.Header.Set("user-agent", "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36")
	req.Header.Set("referer", referer)
	resp, err := client.Do(req)
	if err != nil {
		log.Println("404 请求失败！")
		return nil, "404"
	}
	defer resp.Body.Close()
	body, _ := ioutil.ReadAll(resp.Body)
	return &body, resp.Status[:3]
}

func SaveImage(urlList chan []string, dir string) {
	// 下载计数
	var count int = 0
	for i, v := range <-urlList {
		path := dir + fmt.Sprintf("%03d.jpg ", i + 1)
		count++
		fmt.Printf("%d %s", count, path)
		if _, err := os.Stat(path); err == nil {
			fmt.Printf("已下载\n")
			continue
		}
		resp, _ := GetData(v)
		// 空数据就不写入
		if *resp == nil {
			continue
		}
		f, err := os.Create(path)
		if err != nil {
			fmt.Println("图片保存失败！")
			continue
		}
		defer f.Close()
		f.Write(*resp)
		fmt.Println("下载成功")
	}
}