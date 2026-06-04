/*
    enums: Enumerations or Enumeration Constants are a feature that allows us to define a set of named constants.
*/

// ratings 1-5
// let ratings = {
//     Terrible: 1,
//     Bad: 2,
//     Average: 3,
//     Good: 4,
//     Excellent: 5
// }

enum Ratings {
    Terrible = 1,
    Bad,
    Average,
    Good,
    Excellent
}

let myRating: Ratings = Ratings.Excellent;

console.log(myRating); // Output: 0
