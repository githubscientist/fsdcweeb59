### Asynchronous vs Synchronous

- Synchronous code is executed sequentially, blocking the execution of subsequent code until the current operation is complete.

- Asynchronous code allows other operations to continue while waiting for a task to complete, preventing blocking and improving performance.

- By default, JavaScript is synchronous, meaning that it executes code in a single thread, blocking the execution of subsequent code until the current operation is complete.


### Promises

- A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

- A Promise can be in one of three states: pending, fulfilled, or rejected.

- Promises provide a cleaner and more manageable way to handle asynchronous operations compared to callbacks, avoiding callback hell and improving code readability.