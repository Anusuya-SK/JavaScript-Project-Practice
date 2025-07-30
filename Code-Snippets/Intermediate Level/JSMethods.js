// Pro Tip: Method Chooser
// | If you want to...               | Use                      |
// | ------------------------------- | ------------------------ |
// | Create a new array with changes | `map()`                  |
// | Filter out unwanted items       | `filter()`               |
// | Combine values into one         | `reduce()`               |
// | Log or perform actions          | `forEach()`              |
// | Check if value exists           | `includes()`             |
// | Find specific value or index    | `find()` / `findIndex()` |
// | Check if all or some match      | `every()` / `some()`     |
// | Loop over keys or values        | `for...in` / `for...of`  |


// | Method / Syntax | Purpose                            | Works On       | Returns       | Use Case Example               |
// | --------------- | ---------------------------------- | -------------- | ------------- | ------------------------------ |
// | `...` (spread)  | Expands or clones data             | Arrays/Objects | Expanded copy | Clone/merge arrays or objects  |
// | `map()`         | Transforms each item               | Arrays         | New array     | Double values, add keys        |
// | `filter()`      | Filters items based on condition   | Arrays         | New array     | Get even numbers, remove nulls |
// | `reduce()`      | Reduces array to one value         | Arrays         | Any value     | Sum, total, flatten, count     |
// | `includes()`    | Checks if a value exists           | Arrays/Strings | Boolean       | Check if array has a value     |
// | `some()`        | Checks if **any** item passes test | Arrays         | Boolean       | "Is any age > 18?"             |
// | `every()`       | Checks if **all** items pass test  | Arrays         | Boolean       | "Are all items positive?"      |
// | `forEach()`     | Runs a function on each item       | Arrays         | `undefined`   | `console.log`, UI rendering    |
// | `for...of`      | Loop over **values**               | Iterables      | N/A           | Loop over array values         |
// | `for...in`      | Loop over **keys / indexes**       | Objects/Arrays | N/A           | Loop through object keys       |

// When to Use What?
// | Situation                           | Use            |
// | ----------------------------------- | -------------- |
// | Want a **copy** of object or array  | `...` (spread) |
// | Change **each item** in an array    | `map()`        |
// | Keep **some items** only            | `filter()`     |
// | Need **one result** from an array   | `reduce()`     |
// | Check if a **value exists**         | `includes()`   |
// | Check if **any** item passes a test | `some()`       |
// | Check if **all** items pass a test  | `every()`      |
// | Loop through and **do something**   | `forEach()`    |
// | Loop over **array values**          | `for...of`     |
// | Loop over **object keys**           | `for...in`     |

// 1. Array Utility Methods
// | Method        | Description                                         | Example                                      |
// | ------------- | --------------------------------------------------- | -------------------------------------------- |
// | `map()`       | Returns a **new array** with each item transformed  | `[1, 2, 3].map(x => x * 2)` → `[2, 4, 6]`    |
// | `filter()`    | Returns a **new array** with items that pass a test | `[1, 2, 3].filter(x => x > 1)` → `[2, 3]`    |
// | `reduce()`    | Returns **one value** by reducing the array. 
//                   If add dependncy type, return result based on type  | `[1, 2, 3].reduce((a, b) => a + b, 0)` → `6` |
// | `forEach()`   | Loops through each item (no return)                 | `arr.forEach(x => console.log(x))`           |
// | `find()`      | Returns the **first** matching item                 | `[2, 4, 6].find(x => x > 3)` → `4`           |
// | `findIndex()` | Returns the **index** of the match                  | `[1, 2, 3].findIndex(x => x === 2)` → `1`    |
// | `includes()`  | Checks if a value exists                            | `[1, 2, 3].includes(2)` → `true`             |
// | `some()`      | True if **any** item passes the test                | `[1, 2].some(x => x > 1)` → `true`           |
// | `every()`     | True if **all** items pass the test                 | `[1, 2].every(x => x > 0)` → `true`          |
// | `slice()`     | Returns a part of the array                         | `[1, 2, 3].slice(1)` → `[2, 3]`              |
// | `splice()`    | Adds/removes items (changes original)               | `arr.splice(1, 1)`                           |
// | `concat()`    | Joins arrays                                        | `[1].concat([2])` → `[1, 2]`                 |
// | `flat()`      | Flattens nested arrays                              | `[1, [2, 3]].flat()` → `[1, 2, 3]`           |
// | `reverse()`   | Reverses array in-place                             | `[1, 2].reverse()` → `[2, 1]`                |
// | `sort()`      | Sorts array in-place                                | `[2, 1].sort()` → `[1, 2]`                   |
// | `fill()`	    | Fills all or part with a value	                  | `[1,2,3].fill(0) → [0,0,0]`                  |
// | `copyWithin()`| Copies part of array to another position	          | `[1,2,3,4].copyWithin(1, 2) → [1,3,4,4]`     |
// | `indexOf()`	| Finds index of a value	                          | `['a','b'].indexOf('b') → 1`                 |
// | `lastIndexOf()`| Like indexOf, but searches from end	              |                                              |


// 2. Object Methods
// | Method                 | Description                             | Example                                |
// | ---------------------- | --------------------------------------- | -------------------------------------- |
// | `Object.keys(obj)`     | Gets array of keys                      | `['name', 'age']`                      |
// | `Object.values(obj)`   | Gets array of values                    | `['Anu', 25]`                          |
// | `Object.entries(obj)`  | Gets array of `[key, value]` pairs      | `[['name', 'Anu']]`                    |
// | `Object.assign()`      | Copies properties to another object     | `Object.assign({}, obj1, obj2)`        |
// | `Object.fromEntries()` | Converts `[key, value]` pairs to object | `Object.fromEntries([['name','Anu']])` |


// 3. String Methods (Briefly)
// | Method          | Purpose                             |
// | --------------- | ----------------------------------- |
// | `split()`       | Splits string into array            |
// | `join()`        | Joins array into string             |
// | `toUpperCase()` | Converts to upper case              |
// | `toLowerCase()` | Converts to lower case              |
// | `trim()`        | Removes whitespace                  |
// | `includes()`    | Checks if string contains something |
// | `replace()`     | Replaces part of string             |
// | `startsWith()`  | Checks beginning                    |
// | `endsWith()`    | Checks ending                       |

// 4. Newer/Advanced Array Methods (Optional)
// | Method            | Description                          |
// | ----------------- | ------------------------------------ |
// | `Array.from()`    | Converts things into arrays          |
// | `Array.of()`      | Creates array from arguments         |
// | `at()`            | Gets item by position, supports `-1` |
// | `findLast()`      | Like `find`, but from end            |
// | `findLastIndex()` | Like `findIndex`, but from end       |
// | `toSorted()`      | Like `sort()` but returns new array  |
// | `toReversed()`    | Like `reverse()` but returns new     |

// Looping
// | Loop        | Description                  | Use On          |
// | ----------- | ---------------------------- | --------------- |
// | `for...of`  | Loop over values             | Arrays, Strings |
// | `for...in`  | Loop over keys               | Objects, Arrays |
// | `forEach()` | Loop over values (no return) | Arrays          |

// Extra Handy Tricks
// | Task            | Example               |
// | --------------- | --------------------- |
// | Clone an array  | `[...arr]`            |
// | Clone an object | `{...obj}`            |
// | Merge arrays    | `[...arr1, ...arr2]`  |
// | Merge objects   | `{...obj1, ...obj2}`  |
// | Flatten array   | `arr.flat()`          |
// | Check existence | `arr.includes(value)` |



