const applyDiscount = (discount) => (price) => price - (price * discount / 100);
const tenPercentOff = applyDiscount(10);
const twentyPercentOff = applyDiscount(20);

console.log(tenPercentOff(100)); // 90
console.log(twentyPercentOff(100)); // 80

const applyTax = (taxRate) => (price) => price + (price * taxRate / 100);
const applyTenPercentTax = applyTax(10);

console.log(applyTenPercentTax(100)); // 110
console.log(applyTenPercentTax(twentyPercentOff(100))); // 88

const calculateA = (valA) => (valB) => valA + (valB + valB);
console.log('calculateA: ', calculateA(100)(200)); // 500
