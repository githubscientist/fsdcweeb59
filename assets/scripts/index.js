fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET'
})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch(() => {
        console.log('api call fails');
    })