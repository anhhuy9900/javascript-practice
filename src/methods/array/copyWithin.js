/**
 * ! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin
 * * The copyWithin() method of Array instances shallow copies part of this array to another location in the same array 
 * * and returns this array without modifying its length.
 */
const arr = [true, false, 1, 2, 3];
console.log(arr.copyWithin(2));
// Output: [ true, false, true, false, 1 ]
console.log(arr.copyWithin(2, 4));
// Output: [ true, false, 1, false, 1 ]

// Copy to index 1 all elements from index 3 to the end
const array1 = ['a', 'b', 'c', 'd', 'e'];
console.log(array1.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]