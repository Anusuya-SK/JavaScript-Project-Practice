// FizzBuzz from 1-100 with Fizz/Buzz/FizzBuzz replacements

function fizzBuzz(n) {
  if (n % 15 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n;
}

for (let i = 1; i <= 100; i++) {
  console.log(fizzBuzz(i));
}

/****** Alternate version ******/
for (let i = 1; i <= 100; i++) {
  let output = "";

  if (i % 3 === 0) output += "Fizz";
  if (i % 5 === 0) output += "Buzz";

  console.log(output || i);
}

// If a number is divisible by 3, print "Fizz" instead.
// If it's divisible by 5, print "Buzz" instead.
// If it's divisible by both 3 and 5, print "FizzBuzz".
// Otherwise, print the number itself.
