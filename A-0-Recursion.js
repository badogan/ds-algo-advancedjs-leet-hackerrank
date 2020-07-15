//151 Recursion
// 1. identify the base case
// 2. Identify the recursive case
// 3. Get closer and closer and return when needed (usually 2 returns!)

// PROS: DRY, Readability
// CONS: Large Stack - stackoverflow

//Recursion is good to make the code readable
//Anything that can be done with recursion can be done with loops

function findFactorialRecursive(number) {
  if (number === 1) {
    return number;
  }
  answer = number * findFactorialRecursive(number - 1);
  return answer;
}

function findFactorialIterative(number) {
  if (number === 1) {
    return number;
  }
  let answer = number;
  for (let i = number - 1; i > 0; i -= 1) {
    answer *= i;
  }
  return answer;
}
// console.log(findFactorialRecursive(5))
// console.log(findFactorialIterative(5))

// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
  //O(n)
  if (n == 0 || n === 1) {
    return n;
  }
  let fibFirst = 0;
  let fibSecond = 1;
  let currentValue;
  for (let i = 2; i <= n; i++) {
    currentValue = fibFirst + fibSecond;
    fibFirst = fibSecond;
    fibSecond = currentValue;
  }
  return currentValue;
}
// console.log(fibonacciIterative(6));
// console.log(fibonacciIterative(0));
// console.log(fibonacciIterative(1));

function fibonacciRecursive(n) {
  //O(2^n)
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// console.log(fibonacciRecursive(3))
// console.log(fibonacciRecursive(4))
// console.log(fibonacciRecursive(6))

function reverseStringWithRecursion(str) {
  if (str.length === 1) {
    return str;
  }
  
  return `${str[str.length - 1]}${reverseStringWithRecursion(str.slice(0, -1))}`;
}

let testArr=[0,1,2,3,4,5,6,7]
console.log(testArr.splice(testArr.length-1,1))
console.log(testArr)

console.log(reverseStringWithRecursion("Basri1234567890"));
