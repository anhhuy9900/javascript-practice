function test(a, b, c) {
    console.log('test: ', a, b, c);
    // !Output: test:  1 2 3
    console.log('test - arguments: ',  arguments);
    // !Output: test - arguments:  [Arguments] { '0': 1, '1': 2, '2': 3 }
    console.log('test: arguments[0], [1], [2]',  arguments[0], arguments[1], arguments[2]);
    // !Output: test: arguments[0], [1], [2] 1 2 3
}
test(1, 2, 3);


function test2(...args) {
    console.log('test2 -> ', args);
    // !Output: test2 ->  [ 1, 2, 3 ]
}
test2(1, 2, 3);

function outer() {
    test();
    // !Output test:  undefined undefined undefined
}
outer();

/**
 * This function run on browser it will be show an error
 * Uncaught ReferenceError: arguments is not defined
 */
const arrow = (a, b, c) => {
    console.log('arrow function : ', arguments);
    // !Output
    // arrow function :  [Arguments] {
    //     '0': {},
    //     '1': [Function: require] {
}
arrow(1, 2, 3);

const testArr = (arg1, arg2, ...args) => {
    console.log('testArr ...arguments => ', arguments);
    // !Output
    // testArr ...arguments =>  [Arguments] {
    //    ...

    console.log('testArr ...args => ', args);
    // !Output: testArr ...args =>  [ 3, 4, 5 ]
    
}
testArr(1, 2, 3, 4, 5);

function testArrFunc (arg1, arg2, ...args) {
    console.log('testArrFunc arguments => ', arguments);
    // !Output -> testArrFunc arguments =>  [Arguments] { '0': 'a', '1': 'b', '2': 'c', '3': 'd', '4': 'e' }
    console.log('...args => ', args);
    // !Output: ...args =>  [ 'c', 'd', 'e' ]
}
testArrFunc('a', 'b', 'c', 'd', 'e');
