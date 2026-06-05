// inline object type annotation
// let student: {
//     name: string;
//     age: number;
// } = {
//     name: "Sathish",
//     age: 25
// }

// console.log(student.name);

// type alias for object type annotation
// type Student = {
//     name: string;
//     age: number;
// } 

// let student: Student = {
//     name: "Sathish",
//     age: 25
// }

// console.log(student.name);

// interface for object type annotation

interface Student {
    name: string;
    age: number;
} 

let student: Student = {
    name: "Sathish",
    age: 25
}

console.log(student.name);

/*
    Inine Object Vs Type Alias Vs Interface

    1. Inline Object Type Annotation:
        - Used for simple, one-off object types.
        - Not reusable, can lead to code duplication if used multiple times.

    2. Type Alias:
        - Used to create a new name for a type, including object types. 
        - Can be used for complex types, unions, etc.
        - Reusable across the codebase.

    3. Interface:
        - Specifically designed for defining object shapes.
        - Supports declaration merging, allowing multiple declarations to be combined.
        - Reusable and can be extended or implemented by classes.
*/