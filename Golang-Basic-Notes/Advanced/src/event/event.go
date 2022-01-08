package event

func Even(i int) bool { // exported function
	return i%2 == 0
}

func Odd(i int) bool {		// Exported function
	return i%2 != 0
}