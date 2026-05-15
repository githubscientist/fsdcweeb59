// In Javascript, Array and JSON Object -> object
// array - []
// object - {}

// let product101_labels = ["id", "name", "price", "quantity"];
// let product101_values = [101, 'mobile', 70000, 10];

// console.log(product101_labels[2], product101_values[2]);


// let product101 = [
//     ["id", 101],
//     ["name", 'mobile'],
//     ["price", 70000],
//     ["quantity", 10]
// ];

// console.log(product101[3][0], product101[3][1]);

// let product101 = {
//     "id": 101,
//     "name": "mobile",
//     "price": 70000,
//     "quantity": 10
// }

// console.log(product101["name"]);

// console.log(product101.price);

// let product101 = {
//     "id": 101,
//     "name": "mobile",
//     "price": 70000,
//     "quantity": 10
// }

// product101.branch = "chennai";

// delete product101.quantity;

// product101.price = 125000;

// console.log(product101);

let product101 = {
    "id": 101,
    "name": "mobile",
    "price": 70000,
    "quantity": 10
}

// the object supports for...in loop by default.
for (let key in product101) {
    console.log(key, product101[key]);
}