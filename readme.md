# DOM Manipulation

## Topics

[x] DOM Selection
[x] Dynamic Content Manipulation
[x] Event Handling

### DOM

Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects, allowing developers to manipulate the content, structure, and style of a webpage dynamically using JavaScript.

### Exercises

1. 
    - Create a new h2 element and set its text content to "Welcome to DOM Manipulation!".
    - Append the newly created h2 element to the body of the document.

    - Create a new `<p>` element and set its text content to "Hello, World!".
    - Append the newly created `<p>` element to the body of the document.   

### Exercises

Exercise 1: Select by ID

Task: Select the h1 using document.getElementById().

Do these changes:
// Expected changes:
// Text: "Welcome to JavaScript DOM"
// Color: blue
// Background color: lightyellow
// Padding: 15px

Exercise 2: Select by Tag Name

Task: Select all <p> tags using:
document.getElementsByTagName("p")

Apply these styles to all paragraphs using a loop:
// color: green
// fontSize: 20px
// border: 1px solid black
// padding: 10px

Exercise 3: Select by Class Name

Task: Select all elements with class name fruit.
// backgroundColor: lightblue
// margin: 5px
// padding: 8px
// fontWeight: bold

### DOM Selection

It means selecting elements from the DOM to manipulate them. You can select elements by their ID, class name, tag name, or using CSS selectors.

### Example Table for Dynamic Content Manipulation

| S.No. | Product Name | Price | Quantity |
|------|--------------|-------|----------|
| 1    | Apple        | $1.00 | 10       |  
| 2    | Banana       | $0.50 | 20       |
| 3    | Orange       | $0.75 | 15       |
| 4    | Grapes       | $2.00 | 8        |
| 5    | Mango        | $1.50 | 12       |
| 6    | Pineapple    | $3.00 | 5        |
| 7    | Strawberry   | $0.80 | 25       |
| 8    | Blueberry    | $1.20 | 18       |
| 9    | Watermelon   | $4.00 | 3        |
| 10   | Peach         | $1.30 | 14       |

Array of objects for the above table:

```javascript
const products = [
  { name: "Apple", price: 1.00, quantity: 10 },
  { name: "Banana", price: 0.50, quantity: 20 },
  { name: "Orange", price: 0.75, quantity: 15 },
  { name: "Grapes", price: 2.00, quantity: 8 },
  { name: "Mango", price: 1.50, quantity: 12 },
  { name: "Pineapple", price: 3.00, quantity: 5 },
  { name: "Strawberry", price: 0.80, quantity: 25 },
  { name: "Blueberry", price: 1.20, quantity: 18 },
  { name: "Watermelon", price: 4.00, quantity: 3 },
  { name: "Peach", price: 1.30, quantity: 14 }
];
```

#### Difference between git fetch and git pull

- `git fetch`: This command retrieves the latest changes from the remote repository but does not merge them into your local branch. 

- `git pull`: This command retrieves the latest changes from the remote repository and automatically merges them into your local branch. It is essentially a combination of `git fetch` followed by `git merge`.

#### What is the purpose of fork in GitHub?

- A fork is a copy of a repository that allows you to freely experiment with changes without affecting the original project. It is commonly used for contributing to open-source projects, as it enables you to make changes in your own copy of the repository and then submit a pull request to the original repository for review and potential inclusion.