// !https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. 
// The final result of running the reducer across all elements of the array is a single value.
const data = [1, 2, 3, 4, 5];
console.log(data.reduce((acc, item) => acc + item, 0));
// Output: 15


const arr = [ ...Array(10).keys() ].map((el, k) => ({
    name: `test-${el}`,
    price: el
}));
console.log("🚀 ---------------------------------------🚀");
console.log("🚀 ~ file: index.js:2 ~ arr ~ arr:", arr);
console.log("🚀 ---------------------------------------🚀");

const total = arr.reduce((acc, cur) => acc + cur.price, 0)
console.log('total: ', total);

const cal1 = arr.reduce((acc, cur) => cur.price % 2 === 0 ? acc + cur.price : acc, 0)
console.log('cal1: ', cal1);

//Concat
const concat = arr.reduce((acc, cur) => acc.concat(cur.price * 2), [])
console.log('concat: ', concat);

const friends = [
    { name: "Anna", books: ["Bible", "Harry Potter"] },
    { name: "Bob", books: ["War and peace", "Romeo and Juliet"] },
    { name: "Alice", books: ["The Lord of the Rings", "The Shining"] },
];
const allBooks = friends.reduce((acc, cur) => [...acc, ...cur.books], []);
console.log('allBooks: ', allBooks);