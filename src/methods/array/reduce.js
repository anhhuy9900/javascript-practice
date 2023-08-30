// !https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. 
// The final result of running the reducer across all elements of the array is a single value.
const arr = [1, 2, 3, 4, 5];
console.log(arr.reduce((acc, item) => acc + item, 0));
// Output: 15