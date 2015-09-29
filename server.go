package main

import (
	"flag"

	"github.com/go-martini/martini"
)

func main() {
	bind := flag.String("bind", "0.0.0.0:3000", "--bind 0.0.0.0:5000")

	flag.Parse()

	runServer(*bind)
}

func runServer(bind string) {
	m := martini.Classic()

	m.Get("/", func() string {
		return "Haldo"
	})

	m.RunOnAddr(bind)
}
