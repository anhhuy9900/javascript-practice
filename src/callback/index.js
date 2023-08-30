"use strict";

function getTotal() {
    return 100;
}

function getPayment() {
    return 1000;
}

const getAssume = ((val) => {
    return val;
});

const async1 = (val, callback) => {
    return callback(val+1)
};
const async2 = (val, callback) => {
    return callback(val+1)
};
const async3 = (val, callback) => {
    return callback(val+1)
};
const callbackHell = () => {
    return async1(1, (res) => {
        return async2(res, (res2) => {
            return async3(res2, (res3) => {
                return res3
            });
        });
    });
}
    

const promise = new Promise((resolve, reject) => {
    const res = getAssume(1);
    if (res === 1) resolve(res);
    reject(new Error('Bad result'))
})
console.log("Call callbackHell -> ", callbackHell());

setTimeout(() => console.log("Call SetTimeout getAssume -> ", getAssume(3)),0);

console.log("Call getAssume PROMISE -> ", promise.then(res => {
    console.log("Call getAssume PROMISE THEN -> ", res);
    return res;
}));

console.log("Call getAssume -> ", getAssume(1));
console.log("Call getTotal -> ", getTotal());
console.log("Call getPayment -> ", getPayment());


// *Output
// Call callbackHell ->  4
// Call getAssume PROMISE ->  Promise { <pending> }
// Call getAssume ->  1
// Call getTotal ->  100
// Call getPayment ->  1000
// Call getAssume PROMISE THEN ->  1
// Call SetTimeout getAssume ->  3
