// Deep clone an object without using JSON methods

/****** Explanation ******/
// Cloning an object means creating a copy of it.
// A deep clone means copying not just the top-level properties, but also nested objects/arrays,
// recursively — so that changes to the clone do not affect the original.

// | Feature        | `for...of`                        | `for...in`                                      |
// | -------------- | --------------------------------- | ----------------------------------------------- |
// | Iterates over  | **Values**                        | **Keys / Property names**                       |
// | Use with       | Arrays, Strings, Sets, Maps, etc. | Objects and Arrays (not recommended for arrays) |
// | Best for       | Reading values                    | Looping through object keys                     |
// | Can be used on | **Iterable** objects              | **All** enumerable object properties            |
// | Example use    | Loop through array values         | Loop through object properties                  |


function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;

  const clone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (typeof obj[key] === "object") {
      clone[key] = deepClone(obj[key]); // recursive call
    } else {
      clone[key] = obj[key];
    }
  }

  return clone;
}

const original = {
  name: "Anusuya",
  age: 25,
  address: {
    city: "Bangalore",
    pin: 560001
  },
  hobbies: ["reading", "coding"],
  created: new Date()
};

const copy = deepClone(original);

// Test mutation
copy.address.city = "Chennai";
copy.hobbies.push("gaming");

console.log(original.address.city); // "Bangalore"
console.log(copy.address.city);     // "Chennai"
console.log(original.hobbies); // [ 'reading', 'coding' ]
console.log(copy.hobbies);  // [ 'reading', 'coding', 'gaming' ]
 