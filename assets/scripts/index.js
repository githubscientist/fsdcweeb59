function first(callback) {
    console.log('starting first...');
    // wait for 2 seconds
    setTimeout(() => {
        // call the callback
        console.log('ending first...');
        callback();
    }, 2000);
}

function second(callback) {
    console.log('starting second...');

    // wait for 3 seconds
    setTimeout(() => {
        console.log('ending second...');
        callback();
    }, 3000);
}

function third(callback) {
    console.log('starting third...');

    // wait for 5 seconds
    setTimeout(() => {
        console.log('ending third...');
        callback();
    }, 5000);
}

// callback hell
first(() => {
    second(() => {
        third(() => {
            console.log('finished executing all functions...');
        })
    })
});