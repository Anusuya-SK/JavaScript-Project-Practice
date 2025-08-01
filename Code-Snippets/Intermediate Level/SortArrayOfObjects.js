// Sort an array of objects by a property (e.g., age or name)
const people = [
  { name: 'Alice', age: 32 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 29 }
];

people.sort((a, b) => a.age - b.age);  // ascending
people.sort((a, b) => a.name.localCompare(b.age));  // ascending
console.log(people);
// Output:
// [
//   { name: 'Bob', age: 25 },
//   { name: 'Charlie', age: 29 },
//   { name: 'Alice', age: 32 }
// ]

// a = { age: 25 }
// b = { age: 30 }
// a.age - b.age  →  25 - 30  →  -5 // ascending

// Logic Behind It:
// If the result is negative (< 0), a comes before b.
// If the result is positive (> 0), b comes before a.
// If the result is 0, they are considered equal (no change in order).

// a.name.localeCompare(b.name)
// It compares two strings (a.name and b.name) and returns:
// -1 if a.name comes before b.name
// 1 if b.name comes before a.name
// 0 if both are equal

// b.age - a.age  →  25 - 30  →  -5 // decending
// b.name.localeCompare(a.name) // decending