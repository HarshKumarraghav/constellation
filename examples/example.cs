using System;

class FactorialCalculator
{
    // Function to calculate factorial using recursion
    static long Factorial(int n)
    {
        if (n <= 1)
        {
            return 1;
        }
        else
        {
            return n * Factorial(n - 1);
        }
    }

    static void Main(string[] args)
    {
        Console.Write("Enter a positive integer: ");
        int num = int.Parse(Console.ReadLine());

        if (num < 0)
        {
            Console.WriteLine("Factorial is not defined for negative numbers.");
        }
        else
        {
            long result = Factorial(num);
            Console.WriteLine($"Factorial of {num} is {result}");
        }
    }
}
