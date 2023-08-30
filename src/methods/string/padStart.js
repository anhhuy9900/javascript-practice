// ! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// * The padStart() method of String values pads this string with another string (multiple times, if needed) until the resulting string reaches the given length. 
// * The padding is applied from the start of this string.
const str = 'Hello world!';
console.log(str.padStart(15, '...'));
//Output: ...Hello world!
console.log(str.padStart(str.length + 1, '...'));
//Output: .Hello world!