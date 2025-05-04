const a = {
    name:'obj. A',
    msg:'hello',
    info: {
        age:20,
        job:'student',
        address: {
            city:'New York',
            street:'Wall Street',
            district:'Manhattan'
        }
    }
}
const b = a;
// b.name = 'obj. B';
console.log('a => ', a);
console.log('b => ', b);
console.log('a == b => ', a == b);
console.log('a === b => ', a === b);

const c = Object.assign({},a);
console.log('c => ', c);
console.log('a == c => ', a == c);
console.log('a === c => ', a === c);
console.log('Using JSON.stringify to compare a === c => ', JSON.stringify(a) === JSON.stringify(c));

//If compare elements in one level, it will return false.
const d = {
    name:'obj. A',
    msg:'hello',
}
const e = Object.assign({}, d); 
console.log('e == d => ', e == d);
console.log('e === d => ', e === d);