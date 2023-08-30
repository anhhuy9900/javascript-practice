// ! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
// * The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. 
// * If no elements satisfy the testing function, -1 is returned.
const arr = [1, 2, 3, 4, 5];
console.log(arr.findIndex(item => item > 2));
//Output: 2

console.log(arr.findIndex(item => item > 20));
//Output: -1