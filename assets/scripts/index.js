// select the usersContainer
const usersContainer = document.getElementById('usersContainer');

async function fetchUsers() {
    // we are making a http request using fetch function
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    
    if (data.length !== 0) {
        // clear the existing div block
        usersContainer.innerHTML = '';

        // we have users
        // create elements
        // create an unordered list
        const ul = document.createElement('ul');

        data
            .forEach(user => {
                const li = document.createElement('li');
                li.textContent = user.name;
                ul.append(li);
            })
            
        // ul to be appended to usersContainer
        usersContainer.append(ul);
    }
}

fetchUsers();

