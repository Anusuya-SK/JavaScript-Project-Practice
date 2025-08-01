// Write a custom bind() function
Function.prototype.myBind = function(context, ...bindArgs) {
  const fn = this; // `this` refers to the function being bound

  return function(...callArgs) {
    return fn.apply(context, [...bindArgs, ...callArgs]);
  };
};

function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

const person = { name: 'Anusuya' };

const greetAnu = greet.myBind(person, 'Hello');
console.log(greetAnu('!')); // 👉 "Hello, Anusuya!"

// Step-by-Step Execution Flow
// ✅ Step 1: Define myBind
// Function.prototype.myBind = function(context, ...bindArgs) { ... }
// Adds myBind() to all functions.
// Not executed yet — just defines it.

// ✅ Step 2: Define greet()
// function greet(greeting, punctuation) { ... }
// greet is a function stored in memory.
// Not called yet.

// ✅ Step 3: Create greetAnu (Call myBind)
// const greetAnu = greet.myBind(person, 'Hello');
// greet.myBind(...) is called.

// Inside myBind:
// this is the original greet function.
// context is { name: 'Anusuya' }
// bindArgs is ['Hello']

// This returns a new function:
// function(...callArgs) {
//   return fn.apply(context, [...bindArgs, ...callArgs]);
// }

// So now:
// greetAnu = function(...callArgs) {
//   return greet.apply(person, ['Hello', ...callArgs]);
// }

// ✅ Step 4: Call greetAnu
// console.log(greetAnu('!'));
// greetAnu('!') runs the returned function

// Inside it:
// fn is greet
// context is person (i.e., { name: 'Anusuya' })
// bindArgs is ['Hello']
// callArgs is ['!']
// Combined: ['Hello', '!']

// So this runs:
// greet.apply(person, ['Hello', '!']);

// ➡️ Inside greet():
// this = person = { name: 'Anusuya' }
// greeting = 'Hello'
// punctuation = '!'

// Returns:
// "Hello, Anusuya!"

// 🧩 Final Order of Execution
// Line	Code	            What Happens
// 1	Define myBind	    Registers it on Function.prototype
// 2	Define greet	    Stores function
// 3	greet.myBind(...)   Creates bound function greetAnu
// 4	greetAnu('!')	    Executes bound function
// 5	greet.apply(...)	Executes original greet with correct this and args
// 6	console.log(...)	Outputs the final result

// ✅ Output:
// Hello, Anusuya!
