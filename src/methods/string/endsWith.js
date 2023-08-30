// ! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
// * The endsWith() method of String values determines whether a string ends with the characters of this string,
// *  returning true or false as appropriate.
const str = 'Hello world!';
console.log(str.endsWith('Hello'));
//Output: false
console.log(str.endsWith('wor', 9));
//Output: true