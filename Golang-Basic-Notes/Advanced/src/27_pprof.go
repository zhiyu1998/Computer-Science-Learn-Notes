package main

import (
	"flag"
	"log"
	"os"
	"runtime/pprof"
)

var cpuprofile = flag.String("cpuprofile", "", "write cpu profile to file")

var memprofile = flag.String("memprofile", "", "write memory profile to this file")

// 运行命令时要加入：-cpuprofile=xxx.prof
// 1. 可以通过命令：go tool pprof progexec.prof 启动pprof
// 2. (pprof) web
// 3. (pprof) top10  [topN 命令可以查出程序最耗 CPU 的调用]
func main() {
	flag.Parse()
	//if *cpuprofile != "" {
	//	f, err := os.Create(*cpuprofile)
	//	if err != nil {
	//		log.Fatal(err)
	//	}
	//	pprof.StartCPUProfile(f)
	//	defer pprof.StopCPUProfile()
	//}
	CallToFunctionWhichAllocatesLotsOfMemory()
}

func CallToFunctionWhichAllocatesLotsOfMemory() {
	if *memprofile != "" {
		f, err := os.Create(*memprofile)
		if err != nil {
			log.Fatal(err)
		}
		pprof.WriteHeapProfile(f)
		f.Close()

	}
}