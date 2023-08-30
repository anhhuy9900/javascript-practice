let a = {
    msg: 'Hello',
    showMsg() {
        console.log('showMsg - this.msg: ', this.msg);
    }
}

function test(arg1, arg2) {
    console.log('test args => ', arg1, arg2);
    console.log('this: ', this);
    console.log('this.msg: ',  this.msg);
}

const testFunc = test.bind(a, 'Hello');
console.log('test => ', test.msg);
//Output: test =>  undefined

testFunc('World');
// !Output
// test args =>  Hello World
// this:  { msg: 'Hello', showMsg: [Function: showMsg] }
// this.msg:  Hello

console.log('=================================================================');

test.apply(a, ['Hello', 'World']);
// !Output
// test args =>  Hello World
// this:  { msg: 'Hello', showMsg: [Function: showMsg] }
// this.msg:  Hello

console.log('=================================================================');

test.call(a, 'Hello', 'World');
// !Output
// test args =>  Hello World
// this:  { msg: 'Hello', showMsg: [Function: showMsg] }
// this.msg:  Hello

console.log('test: ', test);
// !Output: test:  [Function: test]

console.log('=================================================================');

const userInfo = {
    name: 'John',
    age: 30,
    dob: '01/01/1990',
    showInfo() {
        return {
            name: this.name,
            age: this.age,
            dob: this.dob
        }
    }
}

const addMoreUserInfo = (phone, address) => {
    console.log('addMoreUserInfo THIS => ', this)
    const info = userInfo.showInfo();
    info.phone = phone;
    info.address = address;
    return this;
}
const info = addMoreUserInfo('123456789', 'USA');
console.log('info - addMoreUserInfo => ', info);
// !Output
// addMoreUserInfo THIS =>  {}
// info - addMoreUserInfo =>  {}

console.log('=================================================================');

const infoCall = addMoreUserInfo.call(userInfo, '123456789', 'USA');
console.log('infoCall => ', infoCall);
console.log('infoCall - name => ', infoCall.name);
console.log('infoCall - phone => ', infoCall.phone);
// !Output
// addMoreUserInfo THIS =>  {}
// infoCall =>  {}
// infoCall - name =>  undefined
// infoCall - phone =>  undefined

console.log('=================================================================');

const infoApply = addMoreUserInfo.apply(userInfo, ['123456789', 'USA']);
console.log('infoApply => ', infoApply);
console.log('infoApply - name => ', infoApply.name);
console.log('infoApply - phone => ', infoApply.phone);
// !Output
// addMoreUserInfo THIS =>  {}
// infoApply =>  {}
// infoApply - name =>  undefined
// infoApply - phone =>  undefined

console.log('=================================================================');

/**
 * ! This case bind object not work in ES6
 * ! We have to using normal function in ES5
 */
// NOT WORK
const addMoreUserInfo2 = (phone, address) => {
    console.log('addMoreUserInfo2 THIS => ', this)
    console.log('addMoreUserInfo2 this.name=> ', this.name);
    this.phone = phone;
    this.address = address;
    return this.showInfo();
}
const infoBind = addMoreUserInfo2.bind(userInfo, '123456789', 'USA');
// console.log('infoBind => ', infoBind());
// !Output
// this.showInfo is not a function

console.log('=================================================================');

function addMoreUserInfo3(phone, address) {
    console.log('addMoreUserInfo2 THIS => ', this)
    // !Output
    // addMoreUserInfo2 THIS =>  {
    //     name: 'John',
    //     age: 30,
    //     dob: '01/01/1990',
    //     showInfo: [Function: showInfo]
    // }
    console.log('addMoreUserInfo2 this.name => ', this.name);
    // !Output ->  addMoreUserInfo2 this.name =>  John
    this.phone = phone;
    this.address = address;
    return this;
}
const infoBind3 = addMoreUserInfo3.bind(userInfo, '123456789', 'USA');
const instanceInfo3 = infoBind3()
console.log('infoBind3 => ', instanceInfo3);
// !Output
// infoBind3 =>  {
//     name: 'John',
//     age: 30,
//     dob: '01/01/1990',
//     showInfo: [Function: showInfo],
//     phone: '123456789',
//     address: 'USA'
// }
