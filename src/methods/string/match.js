// ! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
// * The match() method of String values retrieves the result of matching this string against a regular expression.
const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const regex = /[A-F]/gi;
console.log(str.match(regex));
// Output:
// [
//     'A', 'B', 'C', 'D',
//     'E', 'F', 'a', 'b',
//     'c', 'd', 'e', 'f'
// ]