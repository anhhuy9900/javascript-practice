function calStep1(val1, val2) {
    return val1 + val2;
}
function calTotal(num) {
    return calStep1(num, 100);
}
console.log(": ------------------------------");
console.log("calTotal -> calTotal", calTotal(1));
console.log(": ------------------------------");



function User(type, fn) {
    const name  = fn(type);
    return `you come form ${name}`;
}

function UserType(type) {
    const name = type;
    return name;
}

console.log(": ------------------------------");
console.log("calTotal -> calTotal", User('Apple', UserType));
console.log(": ------------------------------");

