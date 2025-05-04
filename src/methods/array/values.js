// !https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values
// * The values() method of Array instances returns a new array iterator object that iterates the value of each item in the array.
const arr = ['Bill', 'Peter', 'John']
const nValues = arr.values();
console.log('nValues: ', nValues);
for (const val of nValues) {
    console.log(val);
    //Bill
    //Peter
    // John
}