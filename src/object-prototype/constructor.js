let a = {title:'obj. literal a'}

function myConstructor(){
    this.title = 'my constructor...'
}
let c = new myConstructor;


function test(){
    this.title = 'test constructor'
}

test.prototype.msg= ' hello from prototype msg...'
console.log("🚀 ~ file: constructor.js ~ line 14 ~ test", test);

let b = new test;
console.log("🚀 ~ file: constructor.js ~ line 16 ~ b", b);
