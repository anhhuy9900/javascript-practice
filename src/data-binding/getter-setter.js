let car = {
    brand:'Toyota',
    model:'Supra'
}

Object.defineProperty(car,'mileage',{
    value:2000,
    writable:false,
    enumerable:true,
    configurable:false
})

console.log(car);
//Output: { brand: 'Toyota', model: 'Supra', mileage: 2000 }

Object.defineProperty(car, 'access_brand',{
    get(){
        return this.brand
    },
    set(arg){
        this.brand = arg
    },
    enumerable:true,
    configurable:false
})

console.log(car)
// !Output
// {
//     brand: 'Toyota',
//     model: 'Supra',
//     mileage: 2000,
//     access_brand: [Getter/Setter]
// }
car.price = 100000
console.log('new car => ', car)
// !Output: new car =>  {
//     brand: 'Toyota',
//     model: 'Supra',
//     mileage: 2000,
//     access_brand: [Getter/Setter],
//     price: 100000
// }