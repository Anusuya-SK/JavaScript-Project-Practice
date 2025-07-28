// Reverse a string
// Input: "hello" -> Output: "olleh" use JS and react
const input = "hello";
const reversed = input.split("").reverse().join("");
console.log(reversed); // Output: "olleh"

// split(""): Turns the string into an array → ["h", "e", "l", "l", "o"]
// reverse(): Reverses the array → ["o", "l", "l", "e", "h"]
// join(""): Combines the array back into a string → "olleh"

/****** Alternate version ******/
// Reverse a string without split(), reverse(), join()
const input = "hello";
let reversed = ""; //New String
for(let i=input.length-1; i>=0; i--) {
    reversed += input[i];
}
console.log(reversed);

// Start from the last character of the string.
// Append each character to a new string (reversed) going backward
// reversed += input[i]; => reversed = revresed+input[i]

/****** Alternate version ******/
const input = "hello";
let reversed = ""; //New String
for(let char of input) {
    reversed = char + reversed;
}
console.log(reversed);

// char is already a character from str, not an index. So doing str[char] tries to access a property like str["h"], str["e"], etc., which is undefined.