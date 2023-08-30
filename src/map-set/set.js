let list1 = ['Toyota','Nissan','Ford','GM','BMW','Mazda','Acura']
let list2 = ['Nissan','Honda','Mazda','Lexus','Ford','BMW','Man']

const test1 = new Set(list1);
test1.add('VinFast');
// console.log('test1 => ', test1);
test1.delete('VinFast');
// console.log('test1 after delete => ', test1);

let intersection = list1.filter((item)=>{
    return new Set(list2).has(item)
});
// console.log("🚀 ~ file: set.js ~ line 13 ~ intersection ", intersection);

let difference = list1.filter(el => {
    return !new Set(list2).has(el);
});
// console.log("🚀 ~ file: set.js ~ line 13 ~ difference", difference);


const arr = [1,2,3,4,5,6,7,8,9,10];
const newArr = new Set(arr);
console.log("🚀  newArr", newArr);
//!Output: newArr Set(10) { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }
newArr.add(11);
console.log("🚀  newArr el", newArr);
//!Output: newArr el Set(11) { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 }
newArr.delete(11);
console.log("🚀  newArr revert", newArr);
//!Output: newArr revert Set(10) { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }
console.log("🚀  Check value is exists in newArr", newArr.has(1));
//!Output: Check value is exists in newArr true
newArr.clear();
console.log("🚀  newArr clear", newArr);
//!Output: newArr clear Set(0) {}