// | Type of Copy     | What it does                                                                                                      |
// | ---------------- | ----------------------------------------------------------------------------------------------------------------- |
// | **Shallow Copy** | Copies only the top-level structure (array or object), but not the nested data (like inner objects or arrays).    |
// | **Deep Copy**    | Copies everything — both the outer structure and all nested levels, making **completely independent duplicates**. |

// Example: Shallow vs Deep Copy
// const original = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 }
// ];

// 🔸 Shallow Copy (e.g., using spread [...]):
// const shallow = [...original];
// shallow[0].name = 'Alicia';
// Now original[0].name is also 'Alicia' ❗
// Why? Because the objects inside are still shared references.

// 🔹 Deep Copy (create new inner objects too):
// const deep = original.map(person => ({ ...person }));
// deep[0].name = 'Alicia';
// original[0].name remains 'Alice' – because both outer and inner structures are separate copies.

// Best Practice:
// Use shallow copy when you're dealing with primitive values like string, number, boolean.
// Use deep copy when you're dealing with objects inside arrays, or nested structures.