// Custom filter Implementation - prototype-based method

// 🔹 function(callback) { ... }
// Regular function
// Inside the body, this refers to the array calling myFilter
// ✅ Works perfectly for Array.prototype

// 🔹 (callback) => { ... }
// Arrow function
// Arrow functions do not have their own this — they inherit this from the outer scope
// ❌ So this is not the array, it may be undefined or window, and it won’t work

Array.prototype.myFilter = function(callback) {
    const result = [];
    for(let i=0; i<this.length; i++){
        if(this.hasOwnProperty(i) && callback(this[i], i, this)) { // Callback return true/false not the value
            result.push(this[i]);
        }
    }
    return result;
}

const numbers = [1, 2, 3];
const filtered = numbers.myFilter(num => num > 1);
console.log(filtered); // [2, 3]

// | Action               | Allowed? | Why                                 |
// | -------------------- | -------- | ----------------------------------- |
// | `const arr = [1, 2]` | ✅        | Declares a constant array reference |
// | `arr.push(3)`        | ✅        | Modifies array contents             |
// | `arr = [4, 5]`       | ❌        | Tries to reassign the `const`       |

/****** Alternate version ******/
// ✅ 1. Using forEach()
Array.prototype.myFilter = function(callback) {
  const result = [];

  this.forEach((value, index, array) => {
    if (callback(value, index, array)) {
      result.push(value);
    }
  });

  return result;
};
