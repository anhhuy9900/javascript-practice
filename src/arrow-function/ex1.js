
function testF() {
    // console.log(this) -> global object or window object
    console.log('testF: ', this);
    // !Output
    // <ref *1> Object [global] {
    //     global: [Circular *1],
    //     clearInterval: [Function: clearInterval],
    //     clearTimeout: [Function: clearTimeout],
    //     setInterval: [Function: setInterval],
    //     setTimeout: [Function: setTimeout] {
    //       [Symbol(nodejs.util.promisify.custom)]: [Getter]
    //     },
    //     queueMicrotask: [Function: queueMicrotask],
    //     clearImmediate: [Function: clearImmediate],
    //     setImmediate: [Function: setImmediate] {
    //       [Symbol(nodejs.util.promisify.custom)]: [Getter]
    //     }
    //   }
}
testF();

console.log('=================================================================');

const test = () => {
    // console.log(this) -> {}
    console.log('test: ', this);
    // !Output: {}
}
test();

console.log('=================================================================');

const person = {
    name: 'John',
    age: 30,

    profile: function() {
        return () => {
            console.log('person - profile: ', this);
        }
    },
    nextProfile: () => {
        console.log('person - nextProfile: ', this)
    }
}
console.log(person.profile()());
// !Output
// person - profile:  {
//     name: 'John',
//     age: 30,
//     profile: [Function: profile],
//     nextProfile: [Function: nextProfile]
// }
console.log(person.nextProfile());
// !Output
// person - nextProfile:  {}
console.log('=================================================================');

const info = {
    name: 'John',
    age: 30,
    showInfo: function() {
        console.log('showInfo => ', this.name, this.age);
        //Output -> showInfo =>  John 30
        console.log('arrow function showInfo2 => ', this.showInfo2());
        //output: arrow function showInfo2 =>  the function showInfo2
        return 'the function showInfo'
    },
    // this case the arrow function showInfo2 as scope function
    // it don't have access to the property of the object by it self
    showInfo2: () => {
        console.log('showInfo2 => ', this.name, this.age);
        // !Output: showInfo2 =>  undefined undefined
        //console.log('arrow function showInfo => ', this.showInfo());
        return 'the function showInfo2'
    }
}
console.log('info.showInfo: ', info.showInfo());
//Output: info.showInfo:  the function showInfo

console.log('info.showInfo2: ', info.showInfo2());
//Output: info.showInfo2:  the function showInfo2

console.log('=================================================================');
const car = {
    name: 'BMW',
    year: 2018,
    speed: '200km/h',
    price: '100000',
    showInfo: function() {
        return this;
    },
    showInfoSelf: function() {
        const name = this.name;
        console.log('showInfoSelf => ', name);
        return function() {
            return name;
        }
    },
    showInfoDetail: () => {
        return this;
    },
    getSpeed: function() {
        return this.speed
    },
    getSatisfy: function() {
        return 'This car very satisfy for older people'
    },
    getPrice: function(price = 0) {
        return this.price + price;
    },
    getSpecification: () => {
        return {
            name: car.name,
            year: car.year,
            speed: car.getSpeed(),
            satisfy: car.getSatisfy(),
            price: car.getPrice(2000)
        };
    }
}
console.log('car.showInfo => ', car.showInfo());
// !Output
// car.showInfo =>  {
//     name: 'BMW',
//     year: 2018,
//     speed: '200km/h',
//     price: '100000',
//     showInfo: [Function: showInfo],
//     showInfoSelf: [Function: showInfoSelf],
//     showInfoDetail: [Function: showInfoDetail],
//     getSpeed: [Function: getSpeed],
//     getSatisfy: [Function: getSatisfy],
//     getPrice: [Function: getPrice],
//     getSpecification: [Function: getSpecification]
// }

console.log('car.showInfoSelf => ', car.showInfoSelf()());
//!Output: showInfoSelf =>  BMW

console.log('car.showInfoSelf => ', car.showInfoSelf()());
//!Output: showInfoSelf =>  BMW
//!Output: car.showInfoSelf =>  BMW

console.log('car.showInfoDetail => ', car.showInfoDetail());
//!Output: car.showInfoDetail =>  {}

console.log('car.getSpecification => ', car.getSpecification());
//!Output
// car.getSpecification =>  {
//     name: 'BMW',
//     year: 2018,
//     speed: '200km/h',
//     satisfy: 'This car very satisfy for older people',
//     price: '1000002000'
// }