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

/**
 * The reason you see callback 2 logged first instead of FIRST runTest1 is due to the order of function execution
 * and the way the argument callback1(callback2()) is passed into runTest1.
 * runTest1(callback1(callback2()))
 * When this line is executed, JavaScript evaluates the arguments being passed to the function runTest1.
 * Arguments are resolved before the function runTest1 is called.
 */
runTest1(callback1(callback2()))

/**
 * If you want FIRST runTest1 to log before anything else, you need to ensure that the callback functions are executed inside runTest1 rather than in the argument list. For example:
 * FIRST runTest1
 * callback 1
 * callback 2
 * END runTest1
 */

const runTest2 = (callback) => {
    console.log('FIRST runTest1');
    callback();
    console.log('END runTest1');
}

const callbackTest2 = (callback) => {
    console.log('callback 1');
    if(callback) callback();
}

const callbackTest3 = () => {
    console.log('callback 2');
}
console.log("\n------------------------------------");
runTest2(() => callbackTest2(() => callbackTest3()));
