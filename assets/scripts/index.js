function first() {
    return new Promise((resolve) => {
        console.log('starting first...');
        // wait for 2 seconds
        setTimeout(() => {
            // call the callback
            console.log('ending first...');
            resolve();
        }, 2000);
    })
}

function second() {
    return new Promise((resolve) => {
        console.log('starting second...');

        // wait for 3 seconds
        setTimeout(() => {
            console.log('ending second...');
            resolve();
        }, 3000);
    })
}

function third() {
    return new Promise((resolve) => {
        console.log('starting third...');

        // wait for 5 seconds
        setTimeout(() => {
            console.log('ending third...');
            resolve();
        }, 5000);
    })
}



// callback hell
// first(() => {
//     second(() => {
//         third(() => {
//             console.log('finished executing all functions...');
//         })
//     })
// });

first()
    .then(() => {
        return second();
    })
    .then(() => {
        return third();
    })
    .then(() => {
        console.log('finished executing all functions...');
    })