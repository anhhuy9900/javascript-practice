// ! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
// * The lastIndexOf() method of String values searches this string and returns the index of the last occurrence of the specified substring. 
// * It takes an optional starting position and returns the last occurrence of the specified substring at an index less than or equal to the specified number.

const str = 'Hello world!';
console.log(str.lastIndexOf('l'));
// Output: 9
console.log(str.lastIndexOf('l', 5));
// Output: 3