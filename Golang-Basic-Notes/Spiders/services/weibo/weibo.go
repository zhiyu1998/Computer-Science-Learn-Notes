package weibo

import (
	"fmt"
	"github.com/PuerkitoBio/goquery"
	"log"
	"net/http"
)

func WeiboSpider() {
	// 爬取微博热搜网页
	req, err := http.NewRequest("GET", "https://s.weibo.com/top/summary", nil)
	req.Header.Set("user-agent", "")
	req.Header.Set("Cookie", "")
	if err != nil {
		log.Fatal(err)
	}
	client := &http.Client{}
	res, err := client.Do(req)

	defer res.Body.Close()
	if res.StatusCode != 200 {
		log.Fatalf("status code error: %d %s", res.StatusCode, res.Status)
	}

	// Load the HTML document
	doc, err := goquery.NewDocumentFromReader(res.Body)
	if err != nil {
		log.Fatal(err)
	}

	// Find the review items
	doc.Find(".list_a li a span").Each(func(i int, s *goquery.Selection) {
		var title string
		if s.HasClass("font") {
			title = s.Find("font").Text()
		} else {
			title = s.Text()
		}
		fmt.Printf("Review %d: %s\n", i, title)
	})
}