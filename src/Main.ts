// function to add two numbers
function add(firstNumber: number, secondNumber: number): number {
    return firstNumber + secondNumber;
}

// due to type inference, automatically inherits the number type
let result: number = add(5, 6);
console.log(result);