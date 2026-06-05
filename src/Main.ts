/*
    Generics lets us write reusable code that can work with a variety of types rather than a single one. This is especially useful when we want to create data structures or functions that can operate on different types without sacrificing type safety.

    In TypeScript, we can define a generic type by using angle brackets <>. We can use a placeholder type parameter (like T) to represent the type that will be specified when the generic is used.
*/

// function identity(value: any): any {
//     return value;
// }

// console.log(identity(42)); // Output: 42
// console.log(identity("Hello")); // Output: Hello
// console.log(identity(true)); // Output: true

// generic function which takes a value of type T and returns a value of the same type T
// function identity<T>(value: T): T {
//     return value;
// }

// console.log(identity(42)); // Output: 42
// console.log(identity("Hello")); // Output: Hello
// console.log(identity(true)); // Output: true

// function identity<T>(value: T): number {
//     if (value) return 1;
//     else return 0;
// }

// console.log(identity(true)); // Output: 1
// console.log(identity(false)); // Output: 0

function identity<T>(value: T): number {
    if (value) return 1;
    else return 0;
}

console.log(identity(true)); // Output: 1
console.log(identity(false)); // Output: 0
console.log(identity(42)); // Output: 1
console.log(identity(-42)); // Output: 1
console.log(identity(0)); // Output: 0
