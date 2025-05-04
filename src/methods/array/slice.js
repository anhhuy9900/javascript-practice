// !https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// * The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start 
// * and end represent the index of items in that array. The original array will not be modified.
const arr = [1, 2, 3, 4, 5];

console.log(arr.slice(1, 3));
//Output: [ 2, 3 ]

console.log(arr.slice(0, 3));
//Output: [ 1, 2, 3 ]