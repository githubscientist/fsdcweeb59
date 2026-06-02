async function fetchUsers() {
    // we are making a http request using fetch function
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
}

fetchUsers();