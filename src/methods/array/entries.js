// !https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
const array1 = [1, 2, 3, 4];
const it = array1.entries();
console.log('it => ', it);
//Output:  Object [Array Iterator] {}
console.log('it - next => ',it.next().value);
// Output: [ 0, 1 ]
console.log('it - next => ',it.next().value);
//Output: [ 1, 2 ]

// const arr = [1 => true, 2 => false, 3 => 1, 4 => 2, 5 => 3];
// console.log(arr.entries());