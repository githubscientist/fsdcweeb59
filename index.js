// in Javascript, we can store different types of data in an array -> heterogeneous array
// let numbers = [4, 3, true, 'hello', 4.5, [7, 8, 5]];

// console.log(numbers);

// 1d array: array of elements
// let A = [1, 2, 3, 4, 5];

// console.log(A[0]); // 1

// 2d array: array of 1d arrays
// let B = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// console.log(B[0]); // [1, 2, 3]
// console.log(B[0][2]); // 3

// 3d array: array of 2d arrays -> array of array of 1d arrays -> array of array of array of elements
let C = [
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ],
    [
        [10, 11, 12],
        [13, 14, 15],
        [16, 17, 18]
    ]
];

console.log(C[0]); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(C[0][1]); // [4, 5, 6]
console.log(C[0][1][2]); // 6