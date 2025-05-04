// !HOC
/**
 * Accept the function as argument
 * Return a function like, setInterval, setTimeout, setImmediate
 */

// example HOC function
const HOC = (a) => {
    console.log('HOC -> ', a);
    return (b) => {
        console.log('HOC - inner func -> ', a + b);
    }
};
const test = HOC(1);
test(2);
// *Output
// HOC ->  1
// HOC - inner func ->  3

console.log('=================================================================');

const HOC_getPriceForMember = (member) => {
    console.log('member -> ', member);
    return (price) => {
        const price_member = price * member;
        console.log('price_member -> ', price_member);
        return price_member;
    }
}
console.log('HOC_getPriceForMember -> ', HOC_getPriceForMember(100)(200))
// *Output
// member ->  100
// price_member ->  20000
// HOC_getPriceForMember -> 20000000

console.log('=================================================================');

const HOC_func = (func) => func;
const HOC_func_test = HOC_func(() => {
    console.log('HOC_func -> ', 1);
})
HOC_func_test();
// *Output
// HOC_func ->  1

console.log('=================================================================');

const HOC_callback_ags = (callback) => {
    console.log('HOC_callback_ags -> ', callback);
    return (...args) => {
        console.log('HOC_callback_ags - inner func -> ', args);
        return callback(...args);
    }
}
const HOC_callback_test = HOC_callback_ags((...args) => {
    return args;
})(1, 2, 3);
console.log('HOC_callback_test => ', HOC_callback_test);
// *Output
// HOC_callback_ags ->  [Function (anonymous)]
// HOC_callback_ags - inner func ->  [ 1, 2, 3 ]
// HOC_callback_test =>  [ 1, 2, 3 ]