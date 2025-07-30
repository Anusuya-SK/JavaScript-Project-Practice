// 🔹 function(callback) { ... }
// Regular function
// Inside the body, this refers to the array calling myFilter
// ✅ Works perfectly for Array.prototype

// 🔹 (callback) => { ... }
// Arrow function
// Arrow functions do not have their own this — they inherit this from the outer scope
// ❌ So this is not the array, it may be undefined or window, and it won’t work

Array.prototype.myFilter = function(callback) {
    let result = [];
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