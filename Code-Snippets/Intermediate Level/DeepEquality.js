// Check for deep equality of two objects

function deepEqual(a, b) {
  // Check for strict equality first
  if (a === b) return true;

  // If types are different or either is null, not equal
  if (typeof a !== 'object' || a === null || typeof b !== 'object' || b === null) {
    return false;
  }

  // Get keys of both objects
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  // Different number of keys? Not equal
  if (keysA.length !== keysB.length) return false;

  // Check each key recursively
  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
}

// Example Usage:
const obj1 = {
  name: "Anu",
  details: { age: 25, hobbies: ["reading", "coding"] }
};

const obj2 = {
  name: "Anu",
  details: { age: 25, hobbies: ["reading", "coding"] }
};

console.log(deepEqual(obj1, obj2)); // true

const a = 5;
const b = 5;
console.log(a === b); // true ✅

const x = { name: "Anu" };
const y = { name: "Anu" };
console.log(x === y); // false ❌ (different references)

// | Value Type                            | Compared by      |
// | ------------------------------------- | ---------------- |
// | Primitives (`string`, `number`, etc.) | **By value**     |
// | Objects (`{}`, `[]`, etc.)            | **By memory reference** |

