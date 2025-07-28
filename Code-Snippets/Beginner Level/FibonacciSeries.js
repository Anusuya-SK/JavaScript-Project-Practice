// Fibonacci series (recursive & iterative)
// Input: 5 -> Output: 0,1,1,2,3

function fibonacciIterative(n) {
  const result = [];
  let a = 0, b = 1;

  for (let i = 0; i < n; i++) {
    result.push(a);
    [a, b] = [b, a + b]; // update a and b
  }
  return result;
}
console.log(fibonacciIterative(5)); // [0, 1, 1, 2, 3]

// result.push(a) → result = [0]
// Update: [a, b] = [b, a + b] → a = 1, b = 1
// ✅ Iteration 2 (i = 1)
// result.push(a) → result = [0, 1]
// Update: a = 1, b = 2
// ✅ Iteration 3 (i = 2)
// result.push(a) → result = [0, 1, 1]
// Update: a = 2, b = 3

// Explanation of [a, b] = [b, a + b]
// This line simultaneously updates both a and b:
// a becomes the previous b
// b becomes the sum of old a + old b
// It avoids temporary variables like:

// let temp = a;
// a = b;
// b = temp + b;

/****** Alternate version ******/
// Recursive Method
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

function fibonacciRecursive(n) {
  return Array.from({ length: n }, (_, i) => fib(i));
}

console.log(fibonacciRecursive(5)); // [0, 1, 1, 2, 3]

// This uses Array.from() with a mapping function, which acts like a loop.
// { length: n } // creates a dummy object with a length, but no values yet
// If n = 5, it will create:
// [undefined, undefined, undefined, undefined, undefined]

// (_, i) => fib(i)
// Ignores the first param (_) because the array is empty.
// Uses the index i to call fib(i).

// So it's like doing:
// let result = [];
// for (let i = 0; i < n; i++) {
//   result.push(fib(i));
// }

