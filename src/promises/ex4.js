const promise = new Promise((resolve, reject) => {
    resolve(1);
});

const exe = promise
// console.log("\n------------------------------------");
// console.log('LOG: ', 'exe: ', exe);
// console.log('LOG: ', 'exe with then: ', exe.then(res=> {
//     // it's not show result because the promise not execute function with resolve
//     console.log("exe - res: ", res);
// }));
// console.log("------------------------------------");

// ------------------------
function executionFunc(data) {
    return new Promise((resolve) => {
        console.log("executionFunc - Promise");
        resolve(5)
    })
}

function runExeFunc() {
    console.log("runExeFunc -> START");
    const exeFunc = executionFunc(1);
    console.log("runExeFunc -> END");
    exeFunc.then(res => console.log("exeFunc -> then: ", res));
}
runExeFunc();