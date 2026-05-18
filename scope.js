/*
    Scope - refers to the visibility and accessibility of variables in different parts of the code.

    There are three types of scope in JavaScript:
    1. Global Scope: Variables declared outside of any function or block are in the global scope and can be accessed from anywhere in the code.
    2. Function Scope: Variables declared within a function are in the function scope and can only be accessed within that function.
    3. Block Scope: Variables declared with let or const within a block (e.g., inside an if statement or a loop) are in the block scope and can only be accessed within that block.
*/

// We have created a variable x outside the block, so it is in the global scope and can be accessed anywhere in the code.
// When we use let keyword to declare a variable, it is block-scoped, meaning it is only accessible within the block it is declared in.
// let x = 5; // global scope
// let x = 15; // this will cause an error because we cannot redeclare a variable in the same scope and because the variable x is said to have a block scope.

// {
//     // this is a block
//     // this will work, because the variable x is in the global scope.
//     // console.log(x);
//     let x = 10; // this declaration is in a different block, so having a variable x in the global scope outside the block does not cause an error.
//     console.log(x);
// }

// // accessing the variable x outside the block -> meaning global block
// console.log(x);

// what we have just seen for let keyword applies to const keyword as well, because it is also block-scoped. However, const keyword variable cannot be reassigned within the same scope.

// -------------------------

/*
    having var keyword tells that the variable is function-scoped, meaning it is accessible within the function it is declared in, but not outside of it. However, if var is declared outside of any function, it becomes a global variable and can be accessed from anywhere in the code.
*/
// var x = 5; // global scope
// main block
// within the same block, we can create another variable with 
// same name and it will not cause an error.
// redeclared variable x with the value 15
// let x = 15;

// {
//     // console.log(x);
//     let x = 10;
//     console.log(x);
// }

// console.log(x);

/*
    Temporal Dead Zone (TDZ) - refers to the period of time during which a variable is in scope but cannot be accessed because it has not been declared yet. This occurs with variables declared using let and const keywords. If you try to access a variable before it is declared, you will get a ReferenceError.
*/

// var x = 15;

// {
//     // console.log(x);
// var x = 10; // overrides the global variable x because var is function-scoped and not block-scoped.
//     console.log(x);
// }

// console.log(x);

// for (var i = 1; i <= 5; i++) {
//     console.log(i);
// }

// console.log(i);

// let x = 5; // global scope

// function test() {
//     var x = 10;
//     // console.log(x);
// }

// test();

// console.log(x);

/*
    hoisting: is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code.
*/
// var x;
// x = 10;
// console.log(x);

// var x;

// test(); // this works because of hoisting.

// function test() {
//     console.log('hello world!');
// }