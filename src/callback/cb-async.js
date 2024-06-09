const runTest1 = (callback) => {
    console.log('FIRST runTest1');
    callback;
    console.log('END runTest1');
}

const callback1 = (callback) => {
    console.log('callback 1');
    if(callback) callback;
}

const callback2 = (callback) => {
    console.log('callback 2');
    if(callback) callback;
}

/**
 * This is example about callback asynchronous
 * when you console.log(runTest1) you will see:
 * callback 2
 * callback 1
 * FIRST runTest1
 * END runTest1
 */
runTest1(callback1(callback2()))
