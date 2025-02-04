/*
Description: Method to find the Factorial of Number using Recursion
Parameter: number
return: number
*/
function findFactorialofMyNumber(number) {
    if (number < 2) {
        return number;
    }
    return (number * findFactorialofMyNumber(number - 1));
}
/*
Description: Method to find the Factorial of Number without using Recursion
Parameter: number
return: number
*/
function findFactorialofMyNumberWithoutRecursion(number) {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact = fact * i;
    }
    return fact;
}
console.log("Factorial using Recursion : " + findFactorialofMyNumber(5));
console.log("Factorial without using Recursion : " + findFactorialofMyNumberWithoutRecursion(5));