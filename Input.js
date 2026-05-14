const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const userInput = [];

rl.on('line', (data) => {
    console.log('you have typed:', data);
});