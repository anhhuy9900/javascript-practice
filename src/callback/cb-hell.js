"use strict";

const async1 = (val, callback) => {
    console.log('async1');
    return callback(val+1)
};
const async2 = (val, callback) => {
    console.log('async2');
    return callback(val+1)
};
const async3 = (val, callback) => {
    console.log('async3');
    return callback(val+1)
};
const callbackHell = () => {
    console.log('callbackHell');
    return async1(1, (res) => {
        return async2(res, (res2) => {
            return async3(res2, (res3) => {
                return res3
            });
        });
    });
}

console.log("Call callbackHell -> ", callbackHell());