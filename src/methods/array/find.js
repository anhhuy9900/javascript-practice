// ! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// * The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. 
// * If no values satisfy the testing function, undefined is returned.
const arr = [1, 2, 3, 4, 5];
console.log(arr.find(item => item > 2));
//Output: 3
console.log(arr.find(item => item > 10));
//Output: undefined