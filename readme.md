## Web Applications

- If we use browser to access an application, it is called a web application. Web applications are accessed through a web browser and can be hosted on a server. They can be built using various technologies such as HTML, CSS, JavaScript, and backend frameworks.

## Architectures

- There are different architectures for building web applications:

    - Monolithic Architecture: In this architecture, the entire application is built as a single unit. It can be easier to develop and deploy but can become difficult to maintain as the application grows.
    - Microservices Architecture: In this architecture, the application is broken down into smaller, independent services that communicate with each other. This allows for better scalability and maintainability but can be more complex to develop and deploy.
    - Serverless Architecture: In this architecture, the application is built using serverless computing services
    - Client-Server Architecture: In this architecture, the application is divided into two main components: the client (frontend) and the server (backend). The client is responsible for the user interface and user experience, while the server handles the business logic and data storage.

## REST 

- REST stands for Representational State Transfer. It is an architectural style for designing networked applications. RESTful APIs are based on the principles of REST and use HTTP methods to perform operations on resources.

## HTTP Requests

When the user clicks/interacts with the frontend, it sends an HTTP request to the backend. The backend processes the request and sends back an HTTP response. The response contains the data that the frontend needs to update the user interface.

## HTTP Methods

- GET: Used to retrieve data from the server.
- POST: Used to send data to the server to create a new resource.
- PUT: Used to update an existing resource on the server.
- DELETE: Used to delete a resource from the server.
- PATCH: Used to partially update an existing resource on the server.

### Libraries to make HTTP requests

- XMLHttpRequest: A built-in JavaScript object that allows you to make HTTP requests.
- Fetch API: A modern JavaScript API for making HTTP requests. It is built on top of Promises and provides a more flexible and powerful way to make HTTP requests.
- Axios: A popular JavaScript library for making HTTP requests. It is built on top of the Fetch API and provides additional features such as interceptors and automatic JSON parsing.
