# Function to calculate factorial using recursion
def factorial(n)
    if n <= 1
      1
    else
      n * factorial(n - 1)
    end
  end
  
  puts "Enter a positive integer: "
  num = gets.chomp.to_i
  
  if num < 0
    puts "Factorial is not defined for negative numbers."
  else
    result = factorial(num)
    puts "Factorial of #{num} is #{result}"
  end
  