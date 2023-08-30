// ! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
// * The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.
const str = ' Hello world! ';
console.log(str.trim());
//Output: Hello world!

console.log(str.trimLeft());
//Output: Hello world! 

console.log(str.trimRight());
//Output:  Hello world!