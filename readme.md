# DOM Manipulation

## Topics

[ ] DOM Selection
[ ] Dynamic Content Manipulation
[ ] Event Handling

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