function calculateSquare(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof number !== 'number') {
                return reject(new Error('argument must be a number'));
            }
            return resolve(number * number);
        }, 1000);
    })
}

calculateSquare(1)
.then(res => {
    console.log('Result 1: ' + res);
    return res;
})
.then(res => {
    console.log('Result 2: ' + res);
})

// Test error handling
calculateSquare(1)
.then(res => {
    console.log('Result 1: ' + res);
    return calculateSquare('string');
})
.then(res => {
    console.log('Result 2: ' + res);
}, reason => {
    console.log('Caught error: ' + reason.message);
})