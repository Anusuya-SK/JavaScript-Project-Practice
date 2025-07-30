// Count frequency of characters in a string
// Input: "apple" -> Output: {a:1, p:2, l:1, e:1}

function countFrequency(str) {
  const count = {};
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  return count;
}

console.log(countFrequency("apple")); // { a: 1, p: 2, l: 1, e: 1 }

// count[char] || 0 → If char already exists, get its value. If not, use 0.
// Then add 1 to it.

/****** Alternate version ******/
// with forEach()
function countFrequency(str) {
  const freq = {};
  str.split('').forEach(char => {
    freq[char] = (freq[char] || 0) + 1;
  });
  return freq;
}
console.log(countFrequency("apple"));

/****** Alternate version ******/
// with reduce()
function countFrequency(str) {
  return str.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {}); // {} defines the type of acc
}
console.log(countFrequency("apple")); // { a: 1, p: 2, l: 1, e: 1 }

// Method	    Description	               Suitable?
// for..of	    Most basic, clear loop	   Best for beginners
// reduce()	    Concise and expressive	   Preferred in modern JS
// forEach()	Alternative to for..of	   Clear and clean


