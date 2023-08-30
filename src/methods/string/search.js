// ! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
// * The search() method of String values executes a search for a match between a regular expression and this string, returning the index of the first match in the string.
const str = 'Hello world!';
console.log(str.search(/world/gi));
//Output: 6