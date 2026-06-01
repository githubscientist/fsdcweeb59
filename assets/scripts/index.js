// setTimeout
// execute the function after 3 seconds, only once.
// setTimeout(() => {
//     console.log('after 5 seconds');
// }, 3000);

// setInterval -> asynchronous function
// execute the function every 3 seconds
// setInterval(() => {
//     console.log('after 5 seconds');
// }, 3000);

let timer = 10;

const countDownHandler = setInterval(() => {
    console.log('countdown:', timer);
    timer--;
}, 1000);

setTimeout(() => {
    clearInterval(countDownHandler);
    console.log('Happy New Year!');
}, 11000);