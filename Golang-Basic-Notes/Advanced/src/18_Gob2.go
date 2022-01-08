package main

import (
	"encoding/gob"
	"fmt"
	"log"
	"os"
)

type Address struct {
	Type string
	City string
	Country string
}

type VCard struct {
	FirstName string
	LastName string
	Address []*Address
	Remark string
}

var content string

func main() {
	pa := &Address{"private", "Aartselaar","Belgium"}
	wa := &Address{"work", "Boom", "Belgium"}
	vc := VCard{"Jan", "Kersschot", []*Address{pa,wa}, "none"}

	file, _ := os.OpenFile("vcard.gob", os.O_WRONLY|os.O_CREATE, 0666)
	defer file.Close()
	enc := gob.NewEncoder(file)
	err := enc.Encode(vc)
	if err != nil {
		log.Println("Error in encoding gob")
	}

	var vc_read VCard
	file2, _ := os.Open("vcard.gob")
	defer file2.Close()
	dec := gob.NewDecoder(file2)
	err2 := dec.Decode(&vc_read)
	if err2 != nil {
		log.Fatal("decode error: ", err)
	}
	fmt.Printf("%q %q: ", vc_read.LastName, vc_read.LastName)
	for index := range vc_read.Address {
		fmt.Printf("%q ", vc_read.Address[index])
	}
	fmt.Println("remark: ", vc_read.Remark)
}