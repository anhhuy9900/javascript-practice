// !https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
// * The Object.values() static method returns an array of a given object's own enumerable string-keyed property values.
const obj = { name: 'test', email: 'test@email.com', age: 20 };
console.log(Object.values(obj));
//Output: [ 'test', 'test@email.com', 20 ]