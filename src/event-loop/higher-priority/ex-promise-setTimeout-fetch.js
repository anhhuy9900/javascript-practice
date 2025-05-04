const fetch = require('node-fetch');

console.log('Hi ! guys');

setTimeout(() => { console.log('SetTimeout', 'Task 1') }, 0)
setTimeout(() => { console.log('SetTimeout', 'Task 2') }, 500)

Promise.resolve(1).then((data)=> console.log('Run Promise', data))

Promise.resolve(2).then((data)=> {
    setTimeout(() => {
        console.log('Run Promise with SetTimeout', data)
    }, 500)
})

const loop = [...Array(10).keys()].forEach((i) => {
    console.log('loop i: ', i);
})

const fetching = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log('Fetching Data => ', json))

console.log('Let do it');