#include <iostream>

// Function to calculate factorial using recursion
int factorial(int n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

int main() {
    int num;
    
    std::cout << "Enter a positive integer: ";
    std::cin >> num;
    
    if (num < 0) {
        std::cout << "Factorial is not defined for negative numbers." << std::endl;
    } else {
        int result = factorial(num);
        std::cout << "Factorial of " << num << " is " << result << std::endl;
    }
    
    return 0;
}
