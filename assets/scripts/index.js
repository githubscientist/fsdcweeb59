function fetchProducts() {
    // 1. Initialize or assume the list of products data
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
        { name: "Peach", price: 1.30, quantity: 14 },
    ];

    // 3. insert or append this table to the container div block from the html
    // 3.1 get the reference of the div block --container
    // select the div block using its class name
    const container = document.getElementsByClassName('container')[0];

    // 2. dynamically create html elements with the data from this table
    // 2.1 create a table container
    const table = document.createElement('table');

    // test and see if we have selected the container correctly
    // console.log(container);

    // style the table to have a border
    table.setAttribute('border', '1');
    table.setAttribute('cellpadding', '10');
    // table.setAttribute('style', 'border-collapse: collapse');
    table.style.borderCollapse = 'collapse';

    // create the table rows with the data
    const headers = document.createElement('tr');

    // get the column headers from the data
    Object
        .keys(products[0])
        .forEach(header => {
            const tableHeader = document.createElement('th');
            tableHeader.textContent = header.slice(0, 1).toUpperCase() + header.slice(1,);
            headers.append(tableHeader);
        });

    // insert or append the table rows to the table
    table.append(headers, );

    products
        .forEach(product => {
            // create a table row
            const tr = document.createElement('tr');

            Object.keys(product).forEach(prod => {
                // create a td element
                const td = document.createElement('td');
                td.textContent = product[prod];
                tr.append(td);
            });

            table.append(tr);
        });
    
    // clear everything inside the container first
    container.innerHTML = '';

    // append the table to the container
    container.append(table);
}

// get the reference of the button
const buttonFetchProducts = document.getElementById('buttonFetchProducts');

// add an event listener (click event) to this button
buttonFetchProducts
    .addEventListener('click', () => {
        fetchProducts();
    });