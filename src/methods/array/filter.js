// !https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// * The filter() method of Array instances creates a shallow copy of a portion of a given array,
// * filtered down to just the elements from the given array that pass the test implemented by the provided function.
const arr = [1, 2, 3, 4, 5];
console.log(arr.filter(item => item > 2));
//Output: [ 3, 4, 5 ]