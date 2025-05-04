const request1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve('Run request 1');
    }, 1000)
})

const request2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve('Run request 2');
    }, 500)
})


// The Promise.race() static method takes an iterable of promises as input and returns a single Promise. 
// This returned promise settles with the eventual state of the first promise that settles. 
// the result is RACE =>  Run request 2 => because request 2 will response the result faster
const race = Promise.race([request1, request2]).then(value => {
    console.log('RACE => ', value);
})