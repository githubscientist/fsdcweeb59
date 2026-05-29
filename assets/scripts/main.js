// // loop to execute for 5 times
// let count = 1;

// // the following block gets executed again and again
// // repeatedly
// while (count <= 5) {
//     console.log('hello world!');
//     count++; 
// }

/*
    hello world count = 2
    hello world count = 3
    hello world count = 4
    hello world count = 5
    hello world count = 6

    block gets executed when the condition is true

    while (true) {
        console.log('hello world!');
    }
    this will run infinite times

    so, we should not have a condition which is true
    always -> because it leads to infinite runs

    define a condition that should be true for sometimes
    and eventually (in the future) should become false

    when count becomes 6, we dont want to continue

    stopping condition: count == 6
    running condition: count != 6 or count < 6

    count < 6 -> 1, 2, 3, 4, 5
    count <= 5 -> 1, 2, 3, 4, 5
*/

// let count = 10;

// // the following block gets executed again and again
// // repeatedly
// while (count <= 19) {
//     console.log('hello world!');
//     count++; 
// }

// the following block gets executed again and again
// repeatedly

// the outer loop will run for 5 times
for (let i = 1; i <= 3; i++) {
    // for each time of the outer loop
    // the inner loop runs for 5 times
    for (let j = 1; j <= 2;  j++) {
        console.log('hello', i, j);
    }
}

/*
    i = 1
        j = 1 hello 1 1
        j = 2 hello 1 2
        j = 3 hello 1 3
        j = 4 hello 1 4
        j = 5 hello 1 5
    i = 2
        j = 1 hello 2 1
        j = 2 hello 2 2
        j = 3 hello 2 3
        j = 4 hello 2 4
        j = 5 hello 2 5
    i = 3
        j = 1
        j = 2
        j = 3
        j = 4
        j = 5
    i = 4
        j = 1
        j = 2
        j = 3
        j = 4
        j = 5
    i = 5
        j = 1
        j = 2
        j = 3
        j = 4
        j = 5
*/