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
    let n = userInput[0];
    for (let i = 0; i < n; i++) {
        let stars = [];
        // to print n stars
        for (let j = 0; j < i + 1; j++) {
            stars.push('*');
        }

        console.log(stars.join(' '));
    }
});