// Custom map Implementation - prototype-based method
// arrayUtils.js
Array.prototype.myMap = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    // Skip holes in sparse arrays [1, , 3] => empty element called holes. .map, .forEach removes automatically
    if (this.hasOwnProperty(i)) {
      result.push(callback(this[i], i, this)); // Callback returns the value
    }
  }
  return result;
};

// Now, in main.js:
import './arrayUtils.js';

const numbers = [1, 2, 3];
const doubled = numbers.myMap(num => num * 2);
console.log(doubled); // [2, 4, 6]

/****** Alternate version ******/
// If you really wanted myMap() to be a standalone function (not tied to .myMap() on arrays), you could write:
// Pure utility version (not attached to Array.prototype) - pure function
export const myMap = (arr, callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.hasOwnProperty(i)) {
      result.push(callback(arr[i], i, arr));
    }
  }
  return result;
};

// Example Usage:
import { myMap } from './arrayUtils.js';

const nums = [10, 20, 30];
const doubled = myMap(nums, n => n * 2); // ✅ works

/****** Alternate version ******/
// ✅ 1. Using forEach()
// (built-in .forEach() skips holes automatically like .map())
Array.prototype.myMap = function(callback) {
  const result = [];
  this.forEach((value, index, array) => {
    result.push(callback(value, index, array));
  });
  return result;
};

/****** Alternate version ******/
// ✅ 2. Using for...in loop
// (but need hasOwnProperty to avoid prototype keys)

Array.prototype.myMap = function(callback) {
  const result = [];
  for (let i in this) {
    if (this.hasOwnProperty(i)) {
      result[i] = callback(this[i], Number(i), this);
    }
  }
  return result;
};