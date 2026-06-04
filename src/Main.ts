// Primitive Data Types in TypeScript

// // 1. Number
// let age: number = 30;
// console.log('Age:', age);

// // 2. String
// let name: string = 'Alice';
// console.log('Name:', name);

// // 3. Boolean
// let isStudent: boolean = true;
// console.log('Is Student:', isStudent);

// // 4. Null
// let nullValue: null = null;
// console.log('Null Value:', nullValue);

// // 5. Undefined
// let undefinedValue: undefined = undefined;
// console.log('Undefined Value:', undefinedValue);

// // 6. NaN (Not a Number)
// let notANumber: number = NaN;
// console.log('Not a Number:', notANumber);

// 7. Symbol
// let uniqueId: symbol = Symbol('unique');
// console.log('Unique ID:', uniqueId);

/* 
    the main reason for creating symbols is to create unique identifiers for object properties.
*/
// let name: symbol = Symbol('name');

// let person = {
//     name: 'Alice',
//     name: 'Bob' // This will cause an error in TypeScript but not in JavaScript
// }

// console.log(person);

// -----------------------------------------------------------

// the symbols can have same description but they are unique
let name: symbol = Symbol('name');
let name2: symbol = Symbol('name');

let person = {
    [name]: 'Alice',
    [name2]: 'Bob'
}

console.log(person[name2]);