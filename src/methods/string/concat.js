// ! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat
// * The concat() method of String values concatenates the string arguments to this string and returns a new string.
const str1 = 'hello ';
const str2 = 'world ';
const str3 = 'Example string ';
const arr1 = ['hello ', 'world ', 'Example string '];
const arr2 = ['meeting ', 'communicate ', 'so nice '];

console.log(str1.concat(str2));
// Output: hello world 
console.log(str3.concat(str1, str2));
// Output: Example string hello world
console.log('Concat 2 array => ', arr1.concat(arr2));
// Output: 
// Concat 2 array =>  [
//     'hello ',
//     'world ',
//     'Example string ',
//     'meeting ',
//     'communicate ',
//     'so nice '
// ]