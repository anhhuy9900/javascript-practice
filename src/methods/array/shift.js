// ! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
// * The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.
const arr = [1, 2, 3, 4, 5];
const arr2 = arr.shift();
console.log(arr); // gets rid of the first element
// Output: [ 2, 3, 4, 5 ]
console.log(arr2); // returns the first element
//Output: 1