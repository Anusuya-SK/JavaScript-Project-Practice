// Check for palindrome
// Input: "madam" -> Output: true
const input = "madam";
const isPalindrome = str => str === str.split("").reverse().join("");
console.log(isPalindrome(input)); // true

// const isPalindrome = → Defines a constant variable and assigns a function to it.
// str => → This is the arrow function syntax (shorter than function(str) {}).
// str === str.split('').reverse().join('') → Returns a boolean indicating whether the string is a palindrome.

/****** Alternate version ******/
// Handle case-insensitive or non-alphanumeric characters too'];.[]
const isPalindrome = str => {
    const cleaned = str
        .toLowerCase()
        .replace(/[^a-z0-9]/g, ""); // Remove non-alphanumeric
    return cleaned === cleaned.split("").reverse().join("");
}

console.log(isPalindrome("Madam")); // true
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("Hello")); // false

// .toLowerCase() → makes the check case-insensitive.
// .replace(/[^a-z0-9]/g, "") → removes all characters except letters and digits.
// Then we check like before using reverse.

/****** Alternate version ******/
// Check for palindrome without split(), reverse(), join()
function isPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

// We compare the first and last character, then the second and second-last, and so on.
// If any pair doesn't match, it's not a palindrome.

// i=0; 0<2.5;
// str[0] !== str[5-1-0]
// "m" !== "m" ->If not wqual return false

// i=1; 1<2.5;
// str[1] !== str[5-1-1]
// "a" !== "a" ->If not wqual return false

// i=2; 2<2.5;
// str[2] !== str[5-1-2]
// "d" !== "d" ->If not wqual return false

// i=3; 3<2.5; Execution stops