
function calculateSquare(number, callback) {
    setTimeout(() => {
        if (typeof number !== 'number') {
            callback(new Error('argument must be a number'));
            return
        }
        callback(null, number * number);
    }, 1000);
}


calculateSquare('bad argument', (err, result) => {
    if (err !== null) {
        console.log('Caught error: ' + String(err));
        return;
    }
    console.log('Result: ' + String(result));
});
 // !Output: 
 // Caught error: Error: argument must be a number

calculateSquare(2, (err, result) => {
    if (err !== null) {
        console.log('Caught error: ' + String(err));
        return;
    }
    console.log('Result: ' + String(result));
});
// *Output: 
// Result: 4
