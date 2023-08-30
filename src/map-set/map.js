// ! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
// * The Map object holds key-value pairs and remembers the original insertion order of the keys. 
// * Any value (both objects and primitive values) may be used as either a key or a value.
// const test = new Map([['fruit','apple'],['vegan','celery']]);
// console.log(test);
// console.log(test.get('fruit'));
// test.set('vegan', 'carrot');
// test.set('diary', 'milk');
// test.set('meat', 'bear');
// test.set(false,'false as val')
// .set(null,'null as val')
// .set(undefined,'undefined as val')
// .set(NaN,'NaN as val')
// .set([1, 2, 3],'arr as val')
// console.log(test);

// test.forEach(function(value,key,obj){
//     console.log('forEach => ', key)
// })
// for(let [key,value] of test){
//     console.log('for let [key,value] => ', value)
// }
// for(let key of test.keys()){
//     console.log('for let key => ', key)
// }
// for(let value of test.values()){
//     console.log('for let value => ', value)
// }
// for(entry of test.entries()){
//     console.log('for entry => ', entry)
// }

const a = new Map([['a',1],['b',2],['c',3]]);
console.log(a.get('a'));
//Output: 1

a.set('d',4);
console.log(a);
//Output: Map(4) { 'a' => 1, 'b' => 2, 'c' => 3, 'd' => 4 }

// assert(a.size, 4)
// console.log(a);
a.set('e', [1,2,3]);
// console.log(a);
// a.forEach((value, key, object) => {
//     console.log('forEach => key: ', key, ' value: ', value, ' object: ', object);
// });
console.log('a.keys() => ', a.keys())
//!Output: a.keys() =>  [Map Iterator] { 'a', 'b', 'c', 'd', 'e' }

console.log('a.values() => ', a.values())
//!Output: a.values() =>  [Map Iterator] { 1, 2, 3, 4, [ 1, 2, 3 ] }

console.log('a.entries() => ', a.entries())
// *Output:
// a.entries() =>  [Map Entries] {
//     [ 'a', 1 ],
//     [ 'b', 2 ],
//     [ 'c', 3 ],
//     [ 'd', 4 ],
//     [ 'e', [ 1, 2, 3 ] ]
// }

// a.values().forEach(value => {
//     console.log('forEach => value: ', value);
// });

for(const val of a.keys()) {
    console.log('for in => ', val);
    // for in =>  a
    // for in =>  b
    // for in =>  c
    // for in =>  d
    // for in =>  e
}
for(const [key,val] of a) {
    console.log('for of [key,val] => key: ', key, ' val: ', val);
    //!Output: for of [key,val] => key:  a  val:  1
}