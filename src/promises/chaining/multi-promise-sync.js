function processA() {
    return new Promise((resolve, reject) => {
        resolve('A')
    })
}

function processB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('B')
        }, 100)
    })
}

function processC() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('C')
        }, 0)
    })
}

// const all = Promise.all([processB(), processC(), processA()])
// all.then((el) => {
//     console.log("\n------------------------------------");
//     console.log('LOG: ', 'el', el);
//     console.log("------------------------------------");
// })

// The function is async, each promise will run non-sequentially by setTimeout
function processAsync(timeout) {
    console.log("------------------------------------");
    console.log('LOG: ', 'timeout', timeout);
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`has been delayed: ${timeout}`)
        }, timeout)
    }).then((res) => {
        console.log('LOG - processAsync: ', 'res', res);
    })
}
// The function is sync, each promise will run sequentially
function processSync(num) {
    console.log("------------------------------------");
    console.log('LOG - processSync: ', 'num', num);
    new Promise((resolve, reject) => {
        for(let i = 0 ; i < num * 10000; i++) {
            resolve(`Process at: ${num}`)
        }

    }).then((res) => {
        console.log('LOG - processSync: ', 'res', res);
    })
}

function getRandomArray(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * 100) + 1);
    }
    return arr;
}

function processPromiseLoop() {
    console.log("\n------------------------------------");
    getRandomArray(10).forEach(el => {
        // processAsync(el * 100)
        processSync(el)
    })
    console.log("------------------------------------");
}
processPromiseLoop();



