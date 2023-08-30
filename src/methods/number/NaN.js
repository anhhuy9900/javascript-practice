// !https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
// * The Number.isNaN() static method determines whether the passed value is the number value NaN, 
// * and returns false if the input is not of the Number type. 
// * It is a more robust version of the original, global isNaN() function.
const str = NaN;

console.log(typeof str);
console.log(Number.isNaN(str));