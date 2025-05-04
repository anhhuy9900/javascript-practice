// !https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// * The forEach() method of Array instances executes a provided function once for each array element.

const arr = [{
    name: 'John',
    age: 30
}, {
    name: 'Mike',
    age: 23
}, {
    name: 'Jane',
    age: 18
}];

console.log(arr.forEach(item => console.log(item.name)));