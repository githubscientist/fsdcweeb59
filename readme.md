# TypeScript

[x] Introduction to TypeScript
[x] Type Annotations
[x] TypeScript Basics
[x] Functions with TypeScript
[x] Optional & Readonly Properties
[x] Classes in TypeScript
[x] Object Types
[x] Interfaces vs Type Aliases
[x] Generics Basics

## Introduction to TypeScript

- TypeScript is a superset of JavaScript that adds static typing to the language. It allows developers to catch errors at compile time, rather than at runtime, which can lead to more robust and maintainable code.

### Dynamically Typed Language

- In a dynamically typed language like JavaScript, variables can hold values of any type, and the type of a variable can change at runtime. This flexibility can lead to errors that are only discovered when the code is executed.

### Statically Typed Language

- In contrast, a statically typed language like TypeScript requires developers to specify the types of variables, function parameters, and return values. This allows the TypeScript compiler to catch type-related errors during development, before the code is executed.

### Compiler

- TypeScript code is transpiled to JavaScript, which can run in any environment that supports JavaScript. The TypeScript compiler checks for type errors and generates JavaScript code that is compatible with the target environment.

### Benefits of TypeScript

- Improved code quality and maintainability
- Better tooling and editor support
- Enhanced readability and self-documentation
- Easier refactoring and code navigation
- Compatibility with existing JavaScript code and libraries

## Dependencies and package.json

### Dev Dependencies Vs Global Dependencies

- Dev dependencies are packages that are only needed during development, such as typescript.
- Global dependencies are packages that are required for both development and production, such as express.

to install global dependencies, use the following command:

```bash
npm install <package-name>
```

to install dev dependencies, use the following command:

```bash
npm install <package-name> --save-dev
```

to uninstall a package, use the following command:

```bash
npm uninstall <package-name>
```


## Object Oriented Programming

- Object-oriented programming (OOP) is a programming paradigm that organizes code into objects, which are instances of classes. OOP allows developers to create reusable and modular code by encapsulating data and behavior within objects.

- Classes:
    - Blueprint or template for creating objects
    - Collection of Objects
    - Defines properties and methods that the objects created from the class will have

- Methods: 
    - Functions that are defined within a class and can be called on instances of that class
    - Define the behavior of the objects created from the class

- Objects:
    - Instances of a class that have their own state and behavior
    - Created using the `new` keyword followed by the class name and parentheses