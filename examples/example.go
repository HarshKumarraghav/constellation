package main

import (
	"fmt"
)

// Function to calculate factorial using recursion
func factorial(n int) int {
	if n <= 1 {
		return 1
	}
	return n * factorial(n-1)
}

func main() {
	var num int

	fmt.Print("Enter a positive integer: ")
	fmt.Scan(&num)

	if num < 0 {
		fmt.Println("Factorial is not defined for negative numbers.")
	} else {
		result := factorial(num)
		fmt.Printf("Factorial of %d is %d\n", num, result)
	}
}
