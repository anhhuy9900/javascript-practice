const a = 'Hi! you';

setTimeout(() => {
    let end = 0;
    for (let i = 0; i < 10000; i++) {
        end++
    }

    console.log('Event 1');
}, 2000);

console.log(a);

function callback(callBack) {
    return callBack();
}
callback(() => {
    console.log('callback');
});
setTimeout(() => {
    console.log('Event 2');
}, 2000);

setTimeout(() => {
    console.log('Event 3');
}, 0);

console.log('The end');