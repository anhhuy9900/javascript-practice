// !https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
// * The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.
const arr = [1, 2, 3, 4, 5];
arr.unshift(0)
console.log(arr);
// Output: [ 0, 1, 2, 3, 4, 5 ]
const arr2 = arr
arr2.unshift(0, 55);
console.log(arr2);
// Output: [ 0, 55, 0, 1, 2, 3, 4, 5 ]