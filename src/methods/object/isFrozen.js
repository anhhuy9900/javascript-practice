// !https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen
// * The Object.isFrozen() static method determines if an object is frozen.
const obj = {
    name: 'huy',
};

console.log(Object.isFrozen(obj));
// Expected output: false

Object.freeze(obj);

console.log(Object.isFrozen(obj));
// Expected output: true