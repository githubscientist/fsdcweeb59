// we are making a http request using fetch function
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        // this executes when the api call succeeds
        return response.json();
    }) 
    .then((data) => {
        // this block executes after response.json() promise
        // is either resolved or rejected
        console.log(data);
    })
    .catch(() => {
        //    this executes when the api call fails
        console.log('failure');
   })