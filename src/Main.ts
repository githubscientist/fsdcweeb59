// function to add two numbers
// default parameter
function add(firstNumber: number, secondNumber: number = 0): number {
    if (secondNumber) {
        return firstNumber + secondNumber;
    }

    return firstNumber;
}

// due to type inference, automatically inherits the number type
let result: number = add(5, 6);
console.log(result);