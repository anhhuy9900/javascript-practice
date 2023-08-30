// ! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// *The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
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

console.log(arr.map(item => item.name));
console.log(arr.map(item => ({
    ...item,
    dob: new Date()
})));