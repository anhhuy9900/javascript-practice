function cbMap() {
    return [1,2,3].map(el => {
        console.log('LOG: ', 'cbMap - el: ', el);
    });
}

function runCb() {
    for (let i = 1; i < 5; i++) {
        console.log('START: ', 'runCb: ', i);
        cbMap();
        console.log('END: ', 'runCb: ', i);
    }
}
// runCb();

/**
 * A callback is asynchronous if it is executed later, typically as part of an asynchronous operation.
 * Examples include callbacks used with setTimeout, setInterval, promises, or event listeners
 */
function runAsyncCb() {
    console.log('Before');

    setTimeout(() => {
        console.log('Async callback'); // Executes after the specified delay
    }, 1000);

    console.log('After');
}
// runAsyncCb();

function runAsyncCbPromise() {
    console.log('Before');
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Promise Resolved');
        }, 1000);
    });

    promise.then((message) => {
        console.log(message); // Executes asynchronously after the promise resolves
    });
    console.log('After');
}
runAsyncCbPromise();