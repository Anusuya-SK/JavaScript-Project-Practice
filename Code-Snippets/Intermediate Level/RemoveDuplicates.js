// Remove duplicates from array without using Set
const removeDuplicates = (num) => {
  return num.filter((item, index) => {
    return num.indexOf(item) === index;
  })
}

const nums = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(nums)); // [1, 2, 3, 4, 5]

// const arr = [1, 2, 2, 3];
// Step-by-step for filter:
// - index 0 → value 1 → indexOf(1) === 0 ✅ keep
// - index 1 → value 2 → indexOf(2) === 1 ✅ keep
// - index 2 → value 2 → indexOf(2) === 1 ❌ skip
// - index 3 → value 3 → indexOf(3) === 3 ✅ keep
// num.indexOf(item) -> Returns the index of the first occurrence of value in the array.

/****** Alternate version ******/
function removeDuplicates(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }

  return result;
}
