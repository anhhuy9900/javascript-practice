const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/todos/1')
.then(function (response) {
    console.log(response.data)
    return axios.get('https://jsonplaceholder.typicode.com/todos/2')
})
.then(function (response) {
    console.log(response.data)
    return axios.get('https://jsonplaceholder.typicode.com/todos/3')
})
.then(function (response) {
    console.log(response.data)
    //return axios.get('https://jsonplaceholder.typicode.com/todos/3')
})
.then((val)=>{console.log(val)})
.catch(function (error) {
    console.log(error);
})