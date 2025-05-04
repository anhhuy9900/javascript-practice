/** 
 * This is example about callback synchronous
 * when you runTest2() you will see:
 * FIRST runTest2
 * callback inside runTest2
 * END runTest2
*/
const runTest = (callback) => {
    console.log('FIRST runTest');
    callback();
    console.log('END runTest');
}

runTest(() => {
    console.log('callback inside runTest');
});

// *Output
// FIRST runTest
// callback inside runTest
// END runTest
