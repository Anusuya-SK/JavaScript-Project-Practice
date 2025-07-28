// Check if two strings are anagrams
// Input: "listen", "silent" -> Output: true

const isAnagram = (str1, str2) => {
    if(str1.length !== str2.length) return false;
    return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));

// .split('') converts the string into an array of characters.
// .sort() arranges them alphabetically.
// .join('') turns the sorted array back into a string.
// If both sorted strings are equal → they're anagrams.


/****** Alternate version ******/
// Check if two strings are anagrams without split(), sort(), join()
const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const count = {};
  for (let char of str1) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!count[char]) return false;
    count[char]--;
  }

  return true;
};

console.log(isAnagram("listen", "silent")); // true

// count[char] = (count[char] || 0) + 1;
// Ensures safe initialization
// If count[char] is undefined (first time we see the character), then:
// (undefined || 0) → 0
// 0 + 1 → 1
// If it's already been counted (e.g., 2), it just adds 1 → becomes 3.
// count['a']++;  // ❌ count['a'] is undefined
