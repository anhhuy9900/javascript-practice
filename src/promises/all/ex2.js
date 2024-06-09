function getInfo(waitTime, funcNum = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (waitTime === 2000) {
                return reject(`The request is failed number of func is ${funcNum} in ${waitTime} ms`)
            }
            resolve(`Request data succeed with number of func is ${funcNum} in ${waitTime} ms`);
        }, waitTime);
    })
}

const processes = [1,2,3].map(el => getInfo(el * 1000, el));

// result -> Error:  The request is failed number of func is 2 in 2000 ms
// As you can see, one of the promises fails, then all the rest of promise will fail. and then the catch of Promise.all will get error form reject
// Promise.all(processes).then(val => {
//     console.log('RESOLVE => : ', val)
// }).catch(err => {
//     console.log('Error: ', err)
// })


// but I have a case 
// there is 3 requests to get information data but one of them is fails while processing
// But I also want to get data of the rest of request
// How to do that

const newCases = [1,2,3].map(el => getInfo(el * 1000, el).catch(err => console.log(`New CASE :: Error at process ${el}: `, err)));

// * result
// New CASE :: Error at process 2:  The request is failed number of func is 2 in 2000 ms
// New CASE RESOLVE => :  [
//   'Request data succeed with number of func is 1 in 1000 ms',
//   undefined,
//   'Request data succeed with number of func is 3 in 3000 ms'
// ]
// * The processes also works, and we need to use catch for every promise when call request and promise.all's not fail if one of the rest is fail
Promise.all(newCases).then(val => {
    console.log('New CASE RESOLVE => : ', val)
}).catch(err => {
    console.log('New CASE has error: ', err)
})