// Find the first non-repeating character in a string
// Input: "aabbcdde" -> Output: "c"

const nonRepeat = str => {
    //const strToArr = str.split("");
    return [...str].find(item => {
        return [...str].filter(x => x === item).length == 1;
    })
}
console.log(nonRepeat("aabbcdde"));

// Second NonRepeat
const secondNonRepeat = str => {
  const nonRepeats = [...str].filter(item => {
    return [...str].filter(x => x === item).length === 1;
  });

  return nonRepeats[1] || null; // Return second unique or null if not found
};
console.log(secondNonRepeat("aabbcdde")); // Output: "e"

// .find() looks for the first character that appears only once in the string.
// .filter() helps count how many times each character appears.
// When it finds one with count 1, it returns it immediately.

/****** Alternate version ******/
// Find the first non-repeating character in a string - without find(), filter()

const nonRepeat = str => {
    for(let i=0; i<str.length; i++){
        if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
            return str[i];
        }
    }
    return null;
}
console.log(nonRepeat("aabbcdde"));

// Second NonRepeat
const secondNonRepeat = str => {
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            count++;
            if (count === 2) {
                return str[i];
            }
        }
    }

    return null; // Less than two non-repeating characters
};

console.log(secondNonRepeat("aabbcdde")); // Output: "e"

// indexOf(str[i]) gives the first occurrence of the character.
// lastIndexOf(str[i]) gives the last occurrence.
// If both are equal, the character appears only once in the string

/****** Alternate version ******/
// Find the first non-repeating character in a string without using
// .indexOf()
// .lastIndexOf()
// .split()
// or even [...str]

const nonRepeat = str => {
  for (let i = 0; i < str.length; i++) {
    let unique = true;

    for (let j = 0; j < str.length; j++) {
      if (i !== j && str[i] === str[j]) {
        unique = false;
        break;
      }
    }

    if (unique) return str[i];
  }

  return null; // No non-repeating character found
};
console.log(nonRepeat("aabbcdde")); // Output: "c"

// Second NonRepeat
const secondNonRepeat = str => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let unique = true;

    for (let j = 0; j < str.length; j++) {
      if (i !== j && str[i] === str[j]) {
        unique = false;
        break;
      }
    }

    if (unique) {
      count++;
      if (count === 2) {
        return str[i];
      }
    }
  }

  return null; // Less than 2 non-repeating characters
};
console.log(secondNonRepeat("aabbcdde")); // Output: "e"