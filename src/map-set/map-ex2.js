// const map = new Map();
// console.log('map: ', map);
// map.set('name', 'test')
// map.set('age', 20)
// map.set('status', true)
// console.log('map: ', map);
// console.log("map.get('name'): ", map.get('name'));
// console.log(' map.keys: ', map.keys());
// console.log(' map.values: ', map.values());
// console.log(' map.entries: ', map.entries());


// const map = new Map([['fullName', 'hahaha']]);
// console.log('map: ', map);
// map.set('name', 'test')
// map.set('age', 20)
// map.set('status', true)
// console.log('map: ', map);
// console.log("map.get('name'): ", map.get('name'));
// console.log(' map.keys: ', map.keys());
// console.log(' map.values: ', map.values());
// console.log(' map.entries: ', map.entries());

const generateFields = () => {
    const map = new Map();
    for (let i = 0; i <= 10; i++) {
        map.set(i, `field-${i}`)
    }

    return map;
}

const fields = generateFields();
console.log('fields: ', fields);
console.log('fields.get(10): ', fields.get(10));