// These lines will output the values 5 and Hello to the console or the terminal.
// this is a single line comment
/*
    this is a multi-line comment
*/
// console.log(5);
// console.log("Hello");

// ---------------------------

/*
    Variables and Data Types

    Variables:

    Variables are the labels we use to store and manipulate data in the memory of a computer.

    Operators:

    Symbols used to perform an operation on values.

    +, -, /, =

    = assignment operator
*/

// x = 5

// console.log(x);

// we can use the keywords var, let, const
// var x = 25;

// x = 30;

// console.log(x);

// let x = 25;

// x = 30;

// console.log(x);

// const x = 25;

// x = 30; // this throws an error as it is a constant

// console.log(x);

// var age = 25;

// var age = 'twenty five';

// console.log(age);


// let age = 25;

// let age = 'twenty five';

// console.log(age);

// const age = 25;

// const age = 'twenty five';

// console.log(age);

/*
    Data Types

    - Data Types tell the type of data we store in a variable.

    1. Number:

    All the numeric values are of type number. It can be an integer or a floating-point number.

    Example: 25, 3.14, -5, 0, etc.

    2. String

    Strings are sequences of characters enclosed in single quotes (' '), double quotes (" "), or backticks (` `).

    Strings can be:

    - alphabets - lowercase (a to z) or uppercase (A to Z)
    - digits (0 to 9)
    - special characters (!, @, #, $, %, etc.)
    - spaces

    Example: 'Hello', "World", `JavaScript`, '123', 'Hello World!', etc.

    3. boolean

    Boolean type values are true or false.

    4. Object

        a. Array
        b. JSON Object or JS Object

    5. undefined

    undefined is a data type that represents the absence of a value. It is the default value of a variable that has been declared but not assigned a value.

    6. null (categorized as an object in JavaScript)

    null is a data type that represents the intentional absence of any object value. It is often used to indicate that a variable should have no value.

    7. NaN (Not a Number)

    NaN is a special value that represents a value that is not a valid number. It is the result of an invalid mathematical operation, such as dividing zero by zero or taking the square root of a negative number or doing arithmetic on undefined or null values.
*/

// let age = 25;

// // print the type of the variable
// console.log(typeof age);

// let age = `twenty five`;

// console.log(typeof age);

// let isVerified = true;

// console.log(typeof isVerified);

// let fruits = ["apple", "banana", "orange", "grapes", "mango", "watermelon", "pineapple"];

// console.log(typeof fruits);

// let person = ["krish", 25, "software engineer", "India"];

// console.log(person);

// let person = {
//     name: "krish",
//     age: 25,
//     profession: "software engineer",
//     location: "India"
// }

// console.log(typeof person);

// the following variable is not initialized with any value
// which value will it then have?
// undefined
// let x; // value of x is also undefined

// console.log(typeof x); // type of x is also undefined

// let x = null;

// console.log(x, typeof x);

// let x; // x is undefined
// let y; // y is undefined

// console.log(x + 5);

/*
    Operators

    Operators are symbols that are used to perform some type of operations on either variables or values.

    = assignment operator

    Types of Operators:

    1. Arithmetic Operators

    + addition operator
    - subtraction
    * multiplication
    / division
    % remainder division
    ** exponentiation
    ++ increment operator
    -- decrement operator

    2. Relational Operators

    < less than
    > greater than
    <= less than or equal to
    >= greater than or equal to
    == comparison operator (double equal to)
    != not equal to
    === type comparison operator (triple equal to)
    !== not double equal to

    3. Logical Operators

    && logical AND

    || logical OR

    ! logical NOT
*/

// console.log(5 + 6);

// console.log(5 - 6);

// console.log(5 * 6);

// console.log(5 / 6);

// console.log(6 % 4);

// console.log(2 ** 3);

// console.log(25 ** 0.5);

// let x = 5;

// x++; // x = x + 1;

// // console.log(x);

// x--; // x = x - 1;

// console.log(x);

// console.log(6 == '6'); // values alone matched

// console.log(6 === '6'); // types are also checked or compared

// console.log(5 !== '5');

// let age = 16;

// console.log(age >= 18);

// let age = 18;
// let hasAadhar = true;
// let hasVoterID = true;

// console.log(age >= 18 && (hasAadhar == true || hasVoterID == true));

// console.log(!(5 < 6));

/*
    conditional statements or decision making statements

    1. if statement
    2. if...else statement
    3. multiple if...else if...else statement
    4. nested if...else statement
*/

// let age = 15;

// if (age >= 18) {
//     console.log('eligible to vote');
// } 

/*
    Problem: Given a number, print the absolute value of the number.
*/

let number = -5;

// check if the number is positive
if (number > 0) {
    // if yes, print it
    console.log(number);
} else {
    // if no, convert the number into positive
    number = number * -1;
    // and then print it
    console.log(number);
}

// let number = 5;

// // check if the number is negative
// if (number < 0) {
//     // if yes, convert the number into positive
//     number = number * -1;
// }

// // print the number in both the cases
// console.log(number);