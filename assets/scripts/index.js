const header = document.createElement('h2');

header.textContent = 'Welcome to DOM Manipulation!';

document.body.appendChild(header);

// create a new paragraph element
const paragraph = document.createElement('p');

// set the content of the paragraph as "Hello, World!"
paragraph.textContent = "Hello, World!";

// append or insert this element to the html document body
document.body.appendChild(paragraph);
