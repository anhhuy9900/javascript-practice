/**
 * How do you find min and max value in an array
 */

const arr = [50, 20, 70, 60, 45, 30];
const findMaxValInArr = Math.max.apply(null, arr);
console.log(": ----------------");
console.log("findMax : ", findMaxValInArr);
console.log(": ----------------");