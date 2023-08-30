// !https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd
// * The padEnd() method of String values pads this string with a given string (repeated, if needed) so that the resulting string reaches a given length. 
// * The padding is applied from the end of this string.
const str = 'Hello world!';
console.log(str.padEnd(15, '...'));
//Output: Hello world!...
console.log(str.padEnd(str.length + 1, '...'));
// Output: Hello world!.