// let numbers = [3, 5, 1, 4, 2];

// push - to insert an element to the end of the array
// numbers.push(6);

// pop - to delete an element from the end of the array
// numbers.pop();

// unshift - to insert an element to the beginning of the array
// numbers.unshift(7);

// shift - to delete an element from the beginning of the array
// numbers.shift();

// to insert an element 8 at index 4
// numbers.splice(4, 0, 8);

// to delete an element 8 at index 4
// numbers.splice(4, 1);

// console.log(numbers);

// iterate the array
// let index = 0;
// while (index < numbers.length) {
//     console.log(numbers[index]);
//     index++;
// }

// let index = 0;
// let totalPrice = 0;
// while (index < numbers.length) {
//     totalPrice = totalPrice + numbers[index];
//     index++;
// }

// console.log(totalPrice);

// while loop
// let index = 0;
// while (index < numbers.length) {
//     console.log(numbers[index]);
//     index++;
// }

// for loop
// let index = 0;
// for (; index < numbers.length;) {
//     console.log(numbers[index]);
//     index++;
// }

// let index = 0;
// do {
//     console.log(numbers[index]);
//     index++;
// } while (index < numbers.length);

// for loop
// for (let index = 0; index < numbers.length; index = index + 2) {
//     console.log(numbers[index]);
// }

// for...in loop
// for (let index in numbers) {
//     console.log(numbers[index]);
// }

// // for...of loop
// for (let number of numbers) {
//     console.log(number);
// }

// let numbers = [3, 5, 1, 4, 2];

// numbers.forEach()

// let numbers = [3, 5, 1, 4, 2];

// console.log('hello');
// console.log()
// console.log('world');

// let numbers = [3, 5, 1, 4, 2];

// let ages = [25, 30, 45, 50, 64]

// for (let index in ages) {
//     console.log(ages[index]);
// }

// higher order function
// let calc = (x, y, operation) => {
//     operation(x, y);
// }

// // callback function
// let add = (x, y) => {
//     console.log(x + y);
// }

// calc(5, 6, add);

// let ages = [25, 30, 45, 50, 64]

// ages.forEach((value, index, array) => {
//     console.log(value, index, array);
// });

// map method
// let numbers = [3, 5, 1, 4, 2];

// console.log(numbers.map((value) => {
//     return value ** 2;
// }));

// let numbers = [3, 5, 1, 4, 2];

// console.log(numbers.filter((value) => {
//     if (value >= 3) {
//         return true;
//     } else {
//         return false;
//     }
// }));

// let numbers = [3, 5, 1, 4, 2];

// console.log(numbers.filter(value => value >= 3));

// console.log(numbers.filter(value => value % 2 == 0));

// let numbers = [3, 5, 1, 4, 2];

// console.log(numbers.reduce((p, c) => {
//     return p + c;
// }));

