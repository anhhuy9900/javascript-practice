// !https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// * The some() method of Array instances tests whether at least one element in the array passes the test implemented by the provided function. 
// * It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array

const arr = [1, 2, 3, 4, 5];
console.log(arr.some(item => item > 2));
//Output: true

console.log(arr.some(item => item > 22));
//Output: false
