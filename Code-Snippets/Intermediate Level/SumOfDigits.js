// Sum of digits in a number recursively
// Input: 123 -> Output: 6
function sumOfDigits(num) {
  if (num === 0) return 0;
  return (num % 10) + sumOfDigits(Math.floor(num / 10));
}

console.log(sumOfDigits(123)); // Output: 6

/****** Alternate version ******/
function sumOfDigits(num) {
  const number = num.toString().split("");
  let result = 0;
  number.map((num) => {
    result += parseInt(num);
  })
  return result;
}


console.log(sumOfDigits(123)); // Output: 6

/****** Alternate version ******/
function sumOfDigits(num) {
  const number = num.toString().split("");
  return number.reduce((acc, num) => {
    acc = acc + parseInt(num);
    return acc;
  },0)
}


console.log(sumOfDigits(123)); // Output: 6