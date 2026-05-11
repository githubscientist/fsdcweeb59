/*
    A function is a block of code used to accomplish a task that gets executed when we call it.

    There are two types of functions.

    1. Library function: A pre-written code/function available in the library.
    2. User-defined function: A function which we developers/users create.
*/

// 1. No Arguments and No Return Values
// function sayHello() {
//     // function body
//     console.log('hello');
// }

// sayHello();

// 2. With Arguments and No Return Values
// function sayHello(name) {
//     // function body
//     console.log('hello', name);
// }

// sayHello('sathish');

// 3. With Arguments and With Return values
// function sayHello(name) {
//     // function body
//     return 'hello' + ' ' + name;
// }

// let message = sayHello('krish');
// console.log(message);

// 4. Without Arguments and With Return Values
// function sayHello() {
//     // function body
//     return 'hello' + ' ' + 'krish';
// }

// let message = sayHello();
// console.log(message);

// a function to add two numbers
// 1. No arguments, No return values
// function add() {
//     let x = 5, y = 6;
//     console.log(x + y);
// }

// add();

// 2. With arguments, No return values
// function add(x, y) {
//     console.log(x + y);
// }

// let x = 5, y = 6;
// add(x, y);

// 3. With arguments, With return values
// function add(x, y) {
//     return x + y;
// }

// let x = 5, y = 6;
// let result = add(x, y);
// console.log(result);

// 4. No arguments, With return values
// function add() {
//     let x = 5, y = 6;
//     return x + y;
// }

// let result = add();
// console.log(result);

/*
    Exercise:

    Write a function that gets a number and
        prints
            - "Positive" if the number is positive.
            - "Negative" if the number is negative.
            - "Zero" if the number is zero.
*/

// function isPositiveOrNegative(number) {
//     if (number > 0) {
//         console.log(number, "is a positive number");
//     } else if (number < 0) {
//         console.log(number, "is a negative number");
//     } else {
//         console.log(number, "is a zero");
//     }
// }

// // unit tests
// isPositiveOrNegative(0);
// isPositiveOrNegative(5);
// isPositiveOrNegative(-6);

/*
    Function Types:

    1. Library Functions
    2. User-Defined Functions

    Function Types:

    1. No Arguments, No Return Values
    2. No Arguments, With Return Values
    3. With Arguments, No Return Values
    4. With Arguments, With Return Values

    Function Types:

    1. Named Functions
    2. Nameless Functions or function expression or anonymous function
    3. Arrow functions
    4. IIFE (Immediately Invoked Function Expression)
*/

// named functions
// function sayHello() {
//     console.log('hello');
// }

// sayHello();

// nameless function or function expression or anonymous function
// let sayHello = function () {
//     console.log('hello');
// }

// sayHello();

// arrow function (ES6 2015)
// let sayHello = () => {
//     console.log('hello');
// }

// sayHello();

// one - liner functions
// let sayHello = () => console.log('hello');

// sayHello();

// IIFE: Immediately Invoked Function Expression
// (() => {
//     console.log('hello');
// })();

// (function () {
//     console.log('hello');
// })();

// 1. named function
// function isPositiveOrNegative(number) {
//     if (number > 0) {
//         console.log(number, "is a positive number");
//     } else if (number < 0) {
//         console.log(number, "is a negative number");
//     } else {
//         console.log(number, "is a zero");
//     }
// }

// isPositiveOrNegative(-6);

// 2. nameless function
// let isPositiveOrNegative = function (number) {
//     if (number > 0) {
//         console.log(number, "is a positive number");
//     } else if (number < 0) {
//         console.log(number, "is a negative number");
//     } else {
//         console.log(number, "is a zero");
//     }
// }

// isPositiveOrNegative(-6);

// 3. arrow function
// let isPositiveOrNegative = (number) => {
//     if (number > 0) {
//         console.log(number, "is a positive number");
//     } else if (number < 0) {
//         console.log(number, "is a negative number");
//     } else {
//         console.log(number, "is a zero");
//     }
// }

// isPositiveOrNegative(-6);

// 4. IIFE
((number) => {
    if (number > 0) {
        console.log(number, "is a positive number");
    } else if (number < 0) {
        console.log(number, "is a negative number");
    } else {
        console.log(number, "is a zero");
    }
})(-6);