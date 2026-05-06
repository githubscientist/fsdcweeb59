// looping statements -> run a block of code multiple times
// Problem: print the message "hello" for 3 times

// use it once, run it thrice
// while -> runs the code within the block for many times
// as long as the condition is true
// question: how do we come up with a condition or scenario such that
// the condition is true for some cases matching number of times we want to run the loop and then eventually, it becomes false, so that the loop stops.
/*
    condition = ??

    to be true for 3 times
    to become false 4th time

    count = 0
    1st time -> prints hello

    update count
    count = 1

    2nd time -> prints hello

    update count
    count = 2

    3rd time -> prints hello

    update count
    count = 3

    we do not want to continue when count becomes 3

    stopping condition: when count equals 3 (count == 3)
    running condition: count != 3
*/

// let count = 0; // means we have not said any hello yet.
// while (count != 3) {
//     console.log('hello');
//     // we should update the count by 1, because we have printed a hello
//     count = count + 1;
// }

/*
    Problem: Print the numbers from 1 to 10
*/

// let number = 1;
// while (number != 11) {
//     console.log(number);
//     number = number + 1; // when the number becomes 11
//     // we want to stop the loop
//     // stopping condition: number >= 11, number == 11
//     // running condition: number < 11, number != 11
// }

// while loop
// let number = 1;
// while (number < 6) {
//     console.log(number);
//     number = number + 1;
// }

// for loop
// 1. while to for keyword
// 2. add a semicolon before the condition
// 3. add a semicolon after the condition
// pros: convenience, syntax, ability to write in a single line
// all the statements

// for loop
// 1. initialization -> first and only once
// 2. condition 
// 3. and then goes inside the loop if the condition is true
// 4. increment / decrement

// for (let number = 1; number < 11; number = number + 1) {
//     console.log(number);
// }

// while loop
// execute the while block when the condition is true
// let number = 1;
// while (number < 11) {
//     console.log(number);
//     number = number + 1;
// }

// do...while loop
// do first -> execute the block first, no matter the condition
// then check the condition to see if we have to continue the loop
// let number = 10;
// do {
//     console.log(number);
//     number = number + 1; // number = 12
// } while (number < 11); // false -> loop is terminated