// let ages = [25, 30, 15, 12, 50];

// console.log(ages); // prints the entire array

// print the first value of the array
// console.log(ages[0]);
// console.log(ages[4]);

// let ages = [25, 30, 15, 12, 50];

// library methods: functions specific to the particular object 
// the functions which works only with the arrays are called as array methods

// let ages = [25, 30, 15, 12, 50, 100];

// print the size of the array
// console.log(ages.length);

// add a new value to the list
// push: inserts an element to the end of the array
// ages.push(121);

// console.log(ages);

// create, insert, update, delete

// let numbers = [4, 1, 2, 5, 3];

// push: inserts an element to the end of the array
// numbers.push(8);

// insert an element to the beginning of the array -> unshift

// numbers.unshift(7);

// delete an element from the end of the array
// numbers.pop();

// delete an element from the beginning of the array
// numbers.shift();
// numbers.shift();

// how to insert or delete an element
// anywhere in the array?
// numbers.splice(3, 3, 10);

// console.log(numbers);

let numbers = [4, 1, 2, 5, 3];

// numbers.splice(1, 0, 6); // [4, 6, 1, 2, 5, 3]

// numbers.splice(1, 1, 6); // [4, 6, 2, 5, 3]

// numbers.splice(3, 1, 12); // [4, 1, 2, 12, 3]

numbers.splice(2, 1);
numbers.splice(3, 1);
numbers.splice(2, 1);
numbers.splice(0, 1);
numbers.splice(0, 1);

console.log(numbers);