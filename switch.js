let num1 = 5;
let num2 = 6;

// switch...case statement
// possible results of num1 > num2: true or false
switch (num1 > num2) {
    case true:
        console.log(num1, 'is greater than', num2);
        break;
    case false:
        console.log(num2, 'is greater than', num1);
        break;
}