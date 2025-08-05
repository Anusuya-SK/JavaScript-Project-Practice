// ✅ What is a Promise?
// A Promise is a built-in JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Think of it like a "contract" — "I promise to give you a result later."

// 🧠 Why use Promises?
// JavaScript is asynchronous — it doesn't wait for slow things (like APIs or file reads) to finish. 
// Promises help manage asynchronous code more cleanly than callbacks (which can lead to "callback hell").

// Promise Lifecycle (States)
// A promise has 3 possible states:
// | State       | Description                              |
// | ----------- | ---------------------------------------- |
// | `pending`   | Initial state, not fulfilled or rejected |
// | `fulfilled` | Operation completed successfully         |
// | `rejected`  | Operation failed                         |

// Once fulfilled or rejected, the promise is settled and cannot change state again.

// 🧱 Basic Syntax
const promise = new Promise((resolve, reject) => {
  // async operation
  const success = true;

  if (success) {
    resolve("Success!"); // goes to .then
  } else {
    reject("Failed!"); // goes to .catch
  }
});

// 🔗 Consuming a Promise
promise
  .then(result => {
    console.log("Resolved:", result);
  })
  .catch(error => {
    console.error("Rejected:", error);
  })
  .finally(() => {
    console.log("Done!");
  });


// 📦 Built-in Promise Methods

// 1. Promise.resolve(value)
// Creates a promise resolved with the given value.
Promise.resolve(10).then(console.log); // 10

// 2. Promise.reject(reason)
// Creates a promise that is rejected.
Promise.reject("Oops").catch(console.error); // Oops

// 3. Promise.all([p1, p2, ...])
// Waits for all promises to resolve (or rejects if any fail).
Promise.all([Promise.resolve(1), Promise.resolve(2)])
  .then(console.log); // [1, 2]

// 4. Promise.race([p1, p2, ...])
// Returns the first settled (fulfilled or rejected) promise.
Promise.race([
  new Promise(r => setTimeout(() => r("A"), 100)),
  new Promise(r => setTimeout(() => r("B"), 50))
])
.then(console.log); // B

// 5. Promise.allSettled([p1, p2])
// Returns results of all promises, regardless of success/failure.
Promise.allSettled([
  Promise.resolve("Done"),
  Promise.reject("Error")
]).then(console.log);
/*
[
  { status: 'fulfilled', value: 'Done' },
  { status: 'rejected', reason: 'Error' }
]
*/

// 🔁 Promise Chaining
Promise.resolve(2)
  .then(n => n * 3)
  .then(n => `Result: ${n}`)
  .then(console.log); // Result: 6
// Each .then() returns a new promise, allowing chaining.

// ⚠️ Error Handling
// You can catch any error with .catch() or inside .then() with try/catch:
Promise.reject("Oops")
  .then(() => console.log("Never runs"))
  .catch(err => console.error("Caught:", err)); // Caught: Oops

// 🧠 Async/Await (Promise wrapper)
async function getData() {
  try {
    const result = await Promise.resolve("Hello");
    console.log(result); // Hello
  } catch (err) {
    console.error(err);
  }
}

// await waits for a promise to resolve — works only inside async functions.

// | Method                      | Description                                                               |
// | --------------------------- | ------------------------------------------------------------------------- |
// | `new Promise()`             | Create a new custom promise with `resolve` and `reject`                   |
// | `Promise.resolve(val)`      | Returns a resolved promise with given value                               |
// | `Promise.reject(err)`       | Returns a rejected promise with given reason                              |
// | `.then()`                   | Runs on successful resolution (fulfilled)                                 |
// | `.catch()`                  | Runs on rejection (error)                                                 |
// | `.finally()`                | Runs after either resolution or rejection                                 |
// | `Promise.all([...])`        | Waits for **all** promises to succeed, else rejects on first failure      |
// | `Promise.race([...])`       | Resolves or rejects as soon as **one** promise settles                    |
// | `Promise.allSettled([...])` | Waits for **all** to settle (fulfilled or rejected); returns status array |
// | `Promise.any([...])`        | Resolves when any one promise fulfills. Ignores rejections unless all fail. |
// | `async/await`               | Modern syntax to handle promises with `await` inside `async` functions    |

