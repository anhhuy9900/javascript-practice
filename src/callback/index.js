"use strict";

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing
// An event handler is a particular type of callback. 
// A callback is just a function that's passed into another function, with the expectation that the callback will be called at the appropriate time. 
// As we just saw, callbacks used to be the main way asynchronous functions were implemented in JavaScript.

function getTotal() {
    return 100;
}

function getPayment() {
    return 1000;
}

const getAssume = ((val) => {
    return val;
});


const promise = new Promise((resolve, reject) => {
    const res = getAssume(1);
    if (res === 1) resolve(res);
    reject(new Error('Bad result'))
})

setTimeout(() => console.log("Call SetTimeout getAssume -> ", getAssume(3)),0);

console.log("Call getAssume PROMISE -> ", promise.then(res => {
    console.log("Call getAssume PROMISE THEN -> ", res);
    return res;
}));

console.log("Call getAssume -> ", getAssume(1));
console.log("Call getTotal -> ", getTotal());
console.log("Call getPayment -> ", getPayment());


// *Output
// Call getAssume PROMISE ->  Promise { <pending> }
// Call getAssume ->  1
// Call getTotal ->  100
// Call getPayment ->  1000
// Call getAssume PROMISE THEN ->  1
// Call SetTimeout getAssume ->  3
