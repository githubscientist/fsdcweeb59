// asynchronous functions
// two args: function to execute, timeout after which the function
// needs to be executed
// 3000 ms -> 3 seconds
// setTimeout(() => {
//     console.log('happy new year!');
// }, 5000);

// setTimeout(() => {
//     console.log('hello world!');
// }, 3000);

function sayHello() {
    console.log('inside sayHello function');

    // let's make sayHello to delay its execution
    // initialize a sum variable to 0 to keep track of the sum of natural numbers
    let sum = 0;

    // initialize the first natural number
    let number = 1;
    
    // create a loop that runs for multiple times
    while (number <= 5000000000) {
        // add the current natural number to the sum variable
        sum = sum + number;

        // change/update the number to point to the next natural number
        number++;
    }

    console.log('sum:', sum);
}

// executing the function sayHello
sayHello();

console.log('finished executing function sayHello');