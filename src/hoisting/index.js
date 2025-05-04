/**
 * ! console.log(a) -> a is not defined
 * ! because this is hoisting
 */
// console.log(a);
// var a = 'This is hoisting';

/**
 * console.log(test) -> Test func
 * because don's like variable declaration
 * console.log(test()) -> It's also working
 */
// console.log(test());
// function test() {
//     console.log('function test');
// }

function outer(test_func) {
    console.log(test_func);
    // var test_func = 'test_func';
    // if delete let test_func, it will be show an error Identifier 'test_func' has already been declared
    // let test_func = 'test_func';
    function test_func() {
        console.log('test_func');
    }
    console.log(test_func);
}
// outer();

/**
 * Fix hoisting by add use strict
 */
// function fixHoisting() {
//     'use strict';
//     console.log(test1);
//     var test1 = 'test';
// }
// fixHoisting();