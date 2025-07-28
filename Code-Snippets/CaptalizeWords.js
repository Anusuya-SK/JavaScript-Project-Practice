// Capitalize the first letter of each word 
// Input: "hello world" -> Output: "Hello World"

const capitalizeWords = (str) => {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeWords("hello world")); // Output: "Hello World"

/****** Alternate version ******/
// Capitalize the first letter of each word without .split(), .map(), .join()
function capitalizeWords(str) {
  let result = "";
  let capitalizeNext = true;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === " ") {
      result += char;
      capitalizeNext = true;
    } else if (capitalizeNext) {
      result += char.toUpperCase();
      capitalizeNext = false;
    } else {
      result += char;
    }
  }

  return result;
}

console.log(capitalizeWords("hello world")); // Output: "Hello World"

