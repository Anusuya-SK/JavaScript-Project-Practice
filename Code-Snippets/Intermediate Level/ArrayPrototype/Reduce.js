// Custom reduce Implementation - prototype-based method

Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue;
    let startIndex = 0;

    if(accumulator === undefined){
        accumulator = this[0];
        startIndex = 1;
    }

    for(let i=startIndex; i<this.length; i++) {
        if(this.hasOwnProperty(i)) {
            accumulator = callback(accumulator, this[i], i, this);
        }
    }
    return accumulator;
}

const numbers = [1, 2, 3];
const sumOfNumbers = numbers.myReduce((a, b) => a + b, 0);
console.log(sumOfNumbers); // 6

// | Code                         | Meaning                                                  |
// | ---------------------------- | -------------------------------------------------------- |
// | `reduce((a, b) => a + b, 0)` | Start with 0 as the accumulator                          |
// | `reduce((a, b) => a + b)`    | Start with first element as accumulator                  |
// | Why `0`?                     | Common starting point for **sum**, safe for empty arrays |

// [].reduce((a, b) => a + b, 0);  // ✅ returns 0
// [].reduce((a, b) => a + b);     // ❌ TypeError: Reduce of empty array with no initial value