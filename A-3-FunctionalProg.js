// Do you have something to cache?
// Memoization ----- Caching
// memoization: Caching the return value of a function

//Closures!

// 1. Can the problem be divided into subproblem
// 2. Recursive solution
// 3. Are there repetitive subproblems?
// 4. Memoize subproblems

function memoizedAddTo80() {
  let cache = {};
  return function(n) {
    if (cache[n]) {
      //n in cache
      return cache[n]; //cache.n
    } else {
      console.log("running");
      cache[n] = 80 + n;
      return cache[n];
    }
  };
}

let myMem = memoizedAddTo80();
// console.log(myMem(5));
// console.log(myMem(5));
// console.log(myMem(5));
// console.log(myMem(5));

function SuperSpeedFib() { 
    //Time complexity: O(n)
    //Space complexity more
  let cache = {};
  return function fib(n) {
    if (cache[n]) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

let myFibHelper = SuperSpeedFib();
console.log(myFibHelper(9));
