// !https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
// * The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.

const arr = { name: 'test', email: 'test@email.com', age: 20 };

const entries = Object.entries(arr);
console.log('entries: ', entries);
//Output: entries:  [ [ 'name', 'test' ], [ 'email', 'test@email.com' ], [ 'age', 20 ] ]
for(const [key, value] of entries) {
    console.log(`key: ${key}, value: ${value}`);
    //key: name, value: test
    //key: email, value: test@email.com
    //key: age, value: 20
}