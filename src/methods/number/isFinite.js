// ! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite
// * The isFinite() function determines whether a value is finite, first converting the value to a number if necessary. 
// * A finite number is one that's not NaN or ±Infinity. Because coercion inside the isFinite() function can be surprising, you may prefer to use Number.isFinite().
const num = 1111;
console.log(Number.isFinite(num));
//Output: true
console.log(Number.isFinite('1111'));
//Output: false