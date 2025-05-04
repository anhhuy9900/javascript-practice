const myGenFunc = function* () {
    yield 1;
    yield 2;
    yield 3;
};

const genObj = myGenFunc();
console.log(": --------------");
console.log("genObj 1 ---> ", genObj.next());
console.log("genObj 2 ---> ", genObj.next());
console.log("genObj 3 ---> ", genObj.next());
console.log(": --------------");


let str = '';
for (const val of myGenFunc()) {
  str = str + val;
}

console.log(": --------------");
console.log("str ---> ", str);
console.log(": --------------");