const uuid = require('uuid');

const map = new Map();

function add(map, num = 2) {
    Array.from(Array(num)).forEach((el, key) => {
        map.set(uuid.v4(), {
            key,
            name: `name-${uuid.v4()}`
        });
    });

    return map;
}

const generate = (num = 10) => {

    Array.from(Array(num)).forEach((el, key) => {

        map.set(uuid.v4(), {
            key,
            name: `name-${uuid.v4()}`
        });
    });

    return map;
}

function remove(map) {
    Array.from(map).slice(0, 2).forEach((el, key) => {
        // console.log('el[0]: ', el[0])
        // console.log('el[1]: ', el[1])
        // console.log('key: ', key)

        map.delete(el[0]);
    })

    return map;
}

let newMap = generate();
const newMapCache = new Map(newMap);
console.log('--------------------------------------')
console.log('newMap: ', newMapCache);

newMap = remove(newMap);
const newMapRemoveCache = new Map(newMap);
console.log('--------------------------------------')
console.log('newMapRemove - Remove first 2 elements: ', newMapRemoveCache);

newMap = add(newMap, 2);
const newMapAddCache = new Map(newMap);
console.log('--------------------------------------')
console.log('newMapAddLog - Add new 2 elements: ', newMapAddCache);

newMap = remove(newMap);
const mapAddRemoveCache = new Map(newMap);
console.log('--------------------------------------')
console.log('newMapAddRemove - after remove frist 2 elements: ', newMap);


