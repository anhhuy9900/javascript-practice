// !https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
// The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

const first = { name: 'test', age: 20 };
const second = { name: 'peter', age: 40 };
const third = Object.assign(first, second);
console.log('third => ', third);
//output =>  { name: 'peter', age: 40 }

const four = Object.assign({ email: 'test@email'}, second);
console.log('four => ', four);
// Output { email: 'test@email', name: 'peter', age: 40 }