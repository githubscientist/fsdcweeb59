// function to add two numbers
// optional parameter
function add(firstNumber: number, secondNumber?: number): number {
    if (secondNumber) {
        return firstNumber + secondNumber;
    }

    return firstNumber;
}

// due to type inference, automatically inherits the number type
let result: number = add(5, 6);
console.log(result);