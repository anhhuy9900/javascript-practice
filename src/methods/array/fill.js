// !https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
// * The fill() method of Array instances changes all elements within a range of indices in an array to a static value. It returns the modified array.
const arr = [1, 2, 3, 4, 5];
console.log(arr.fill(0));
//Output: [ 0, 0, 0, 0, 0 ]
console.log(arr.fill(1, 3, 4));
//Output: [ 0, 0, 0, 1, 0 ]