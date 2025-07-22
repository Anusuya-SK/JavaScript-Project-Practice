// Flatten a nested array
// Input: [1, [2, [3, 4]], 5] -> Output: [1,2,3,4,5]

const flattenArr = arr => arr.flat(Infinity);

console.log(flattenArr([1, [2, [3, 4]], 5]));

// array.flat(depth)
// depth: How deep you want to flatten the array.
// If you pass Infinity, it will flatten all levels of nesting.
// console.log(arr.flat());        // [1, 2, [3, [4, 5]]]
// console.log(arr.flat(2));       // [1, 2, 3, [4, 5]]
// console.log(arr.flat(Infinity)); // [1, 2, 3, 4, 5]

/****** Alternate version ******/
// Flatten a nested array without flat()
const flatten = arr => {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item)); // recursive step
    } else {
      result.push(item);
    }
  }

  return result;
};

console.log(flatten([1, [2, [3, 4]], 5])); // [1, 2, 3, 4, 5]

// Start with [1, [2, [3, 4]], 5]
// 1 is not an array → push it
// [2, [3, 4]] is an array → recurse!
// 5 is not an array → push it

// Inside recursion with [2, [3, 4]]:
// 2 is not an array → push it
// [3, 4] is an array → recurse again

// Inside recursion with [3, 4]:
// 3 → push
// 4 → push

// All levels return their values and are concatenated upwards.
// [1].concat([2].concat([3, 4])).concat([5])
// → [1, 2, 3, 4, 5]


