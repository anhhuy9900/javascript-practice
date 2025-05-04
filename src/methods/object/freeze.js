// !https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
// The Object.freeze() static method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. 
// A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed,

const obj = {
    name: 'test',
};

Object.freeze(obj);

obj.name = 'new Name';
// Throws an error in strict mode

console.log(obj.name);
// Expected output: test

// !but when you use freeze for nested object it can no longer be changed properties in the object
const nestedObj = {
    name: 'test',
    profile: {
        address: {
            city: 'HCM'
        }
    }
};
Object.freeze(nestedObj);
console.log('nestedObj.profile.address.city: ', nestedObj.profile.address.city);
// output: HCM

nestedObj.profile.address.city = 'New York';
console.log('nestedObj.profile.address.city - CHANGED: ', nestedObj.profile.address.city);
//Output: New York