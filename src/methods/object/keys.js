// !https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
// * The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names
const obj = { name: 'test', email: 'test@email.com', age: 20 };
console.log(Object.keys(obj));
//Output: [ 'name', 'email', 'age' ]