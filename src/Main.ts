// Arrays
/*
    In TypeScript, we can create arrays that hold values of a specific type. This is done using the array type annotation. 
*/

// let numbers: number[] = [3, 4, 5, 6, 7, true];

// console.log(numbers);

// let numbers: number[] = [3, 4, 5, 6, 7];

// console.log(numbers);

/*
    We can give the data types as mixed data types by using the union type annotation. This allows us to create an array that can hold values of multiple types.
*/
// let numbers: (number | boolean)[] = [3, 4, 5, 6, 7, true, 'hello'];

// console.log(numbers);

// let numbers: (number | boolean)[] = [3, 4, 5, 6, 7, true, 'hello'];

// console.log(numbers);

// nested arrays in typescript
// let nestedArray: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// console.log(nestedArray);

/*
    TypeScript is only used to add static typing to JavaScript. After development, TypeScript code is transpiled to JavaScript. This means that all the type annotations and checks are removed, and the resulting JavaScript code can run in any environment that supports JavaScript.
*/

// let heterogeneousArray: any[] = [4, 3, true, 'hello', 4.5, [7, 8, 5]];

// console.log(heterogeneousArray);

/*
    using the 'any' type allows us to create an array that can hold values of any type, making it a heterogeneous array. However, using 'any' defeats the purpose of TypeScript's type safety, so it's generally recommended to use specific types for arrays whenever possible.
*/