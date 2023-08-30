function Car_constructor(engine,gearbox){
    let vin = 1984
    this.engine = engine.toUpperCase();
    this.gearbox = gearbox.toUpperCase();
    this.get_vin = function(){
        console.log(vin)
    }
    Object.defineProperty(this,'access_vin',{
        // do not set writable, value
        enumerable:true,configurable:true,
        set:function(arg){ vin = arg},
        get:function(){return vin}
    })
}

Object.defineProperty(Car_constructor.prototype,'mileage',{
    value:1000,
    writable:false,
    enumerable:true,
    configurable:false
})

Car_constructor.location = 'Newcastle'

let car_obj = new Car_constructor('Hybrid','Automatic')