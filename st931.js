// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    // create an empty string
    let str = '';

    let arr = userInput[0].split('');

    // iterate the array arr
    for (let index = 0; index < arr.length; index++) {
        // if its the last character, do not space
        if (index == arr.length - 1) {
            str = str + arr[index];
        } else {
            // for all the other characters, add space
            str = str + arr[index] + ' ';
        }
    }

    console.log(str);
});