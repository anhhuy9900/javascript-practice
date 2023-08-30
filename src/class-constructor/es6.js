class Car_class{
    constructor(engine,gearbox){
        this.engine = engine
        this.gearbox = gearbox
        let _vin = 1984
        this.access_vin = function(){return _vin}
    }
    plate = "NE19 HAO"
    #id= 100
    get access_id(){return this.#id }
    set access_id(arg){this.#id  = arg}
    retrieve_id(){ // proto mtd
        return this.#id
    }
    get_id = function(){ // ins. mtd
        return this.#id
    }
}

let car = new Car_class('Electric','CVT')