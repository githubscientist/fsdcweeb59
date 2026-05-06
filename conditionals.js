/*
    Problem: Print the greatest number, given two numbers.
*/

// let num1 = 50;
// let num2 = 600;

// // print num1 only if the num1 is greater than num2
// // check if num1 is greater than num2
// if (num1 > num2) {
//     // if yes, then console that num1 is the greatest number
//     console.log(num1, 'is the greatest number among', num1, 'and', num2);
// } else {
//     // this tells that num1 is not greater than num2
//     // which means, num2 is greater than num1
//     console.log(num2, 'is the greatest number among', num1, 'and', num2);
// }

// nested if...else statement
// if you have if...else within another if...else block
// let num1 = 400;
// let num2 = 725;
// let num3 = 50;

// // check if num1 is greater than num2 and num1 is also greater than num3
// if (num1 > num2 && num1 > num3) {
//     // num1 is the greatest number among all the three numbers
//     console.log(num1, 'is greater than ', num1, ',', num2, ',', num3);
// } else {
//     // num1 is definitely not the greatest
//     // we now have num2 and num3
//     // given two numbers num2, num3, how do you print the greatest?
//     if (num2 > num3) {
//         // num2 is the greatest
//         console.log(num2, 'is greater than ', num1, ',', num2, ',', num3);
//     } else {
//         // num2 is not the greatest
//         // num3 is definitely the greatest
//         console.log(num3, 'is greater than ', num1, ',', num2, ',', num3);
//     }
// }

// multiple if...else if...else statement
// let num1 = 4;
// let num2 = 7;
// let num3 = 5;

// // check if num1 is greater than num2 and num1 is also greater than num3
// if (num1 > num2 && num1 > num3) {
//     // num1 is the greatest number among all the three numbers
//     console.log(num1, 'is greater than ', num1, ',', num2, ',', num3);
// } else if (num2 > num3) {
//     // num2 is the greatest
//     console.log(num2, 'is greater than ', num1, ',', num2, ',', num3);
// } else {
//     // num2 is not the greatest
//     // num3 is definitely the greatest
//     console.log(num3, 'is greater than ', num1, ',', num2, ',', num3);
// }