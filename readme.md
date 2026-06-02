### Asynchronous vs Synchronous

- Synchronous code is executed sequentially, blocking the execution of subsequent code until the current operation is complete.

- Asynchronous code allows other operations to continue while waiting for a task to complete, preventing blocking and improving performance.

- By default, JavaScript is synchronous, meaning that it executes code in a single thread, blocking the execution of subsequent code until the current operation is complete.


### Promises

- A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

- A Promise can be in one of three states: pending, fulfilled, or rejected.

- Promises provide a cleaner and more manageable way to handle asynchronous operations compared to callbacks, avoiding callback hell and improving code readability.

### Callbacks

- A callback is a function that is passed as an argument to another function and is executed after the completion of a certain task.

- Callbacks can lead to callback hell, where multiple nested callbacks make the code difficult to read and maintain.

- Answer to callback hell is to use Promises or Async/Await, which provide a more structured and readable way to handle asynchronous operations.

### Async/Await

- Async/Await is a syntactic sugar built on top of Promises that allows you to write asynchronous code in a more synchronous and readable manner.

await keyword helps to wait for a Promise to resolve or reject before proceeding with the next line of code, making it easier to handle asynchronous operations without blocking the main thread.

await keywords are allowed only inside an async function, which is a function declared with the async keyword. This allows you to use await to pause the execution of the function until the Promise is resolved or rejected, making it easier to write and read asynchronous code.