package engine

import (
	"Advance/src/fetcher"
	"log"
)

func Run(seeds ...Request) {
	var requests []Request
	for _, r := range seeds {
		requests = append(requests, r)
	}
	for len(requests) > 0 {
		r := requests[0]
		requests = requests[1:]

		log.Printf("Fetching: %s", r.Url)

		body, err := fetcher.Fetch(r.Url)
		if err != nil {
			log.Printf("Fetcher: error" + "getching url %s: %v", r.Url, err)
			continue
		}

		parseResult := r.ParseFunc(body)
		requests = append(requests, parseResult.Requests...) // ...相当于Request[0], Requests[1]

		for _, item := range parseResult.Items {
			log.Printf("Got item %v", item)
		}
	}
}