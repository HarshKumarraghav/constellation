use std::io;

// Function to calculate factorial using recursion
fn factorial(n: u64) -> u64 {
    if n <= 1 {
        1
    } else {
        n * factorial(n - 1)
    }
}

fn main() {
    println!("Enter a positive integer: ");
    
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read line");
    
    let num: u64 = match input.trim().parse() {
        Ok(n) if n >= 0 => n,
        _ => {
            println!("Factorial is not defined for negative numbers.");
            return;
        }
    };
    
    let result = factorial(num);
    println!("Factorial of {} is {}", num, result);
}
