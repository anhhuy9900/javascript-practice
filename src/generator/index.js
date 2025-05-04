function* operate_db() {
    try{
        let i = 1
        console.log(i++ +': verify user ID')
        yield 'ID checked'
        console.log(i++ +': connect to db')
        yield 'db connected'
        console.log(i++ +': send request to db')
        yield 'request sent'
        console.log(i++ +': receive db response')
        yield 'response received'
        console.log(i++ +': disconnect from db')
        yield 'db disconnected'
    }catch(e){
        console.log('ERR: '+e.message)
    }
}
let db = operate_db()
// for(let i=0; i<5; i++){
//     console.log(db.next().value)
// }

function* customize_car(obj) {
    let brand = yield 'customize my car'
    obj.brand = brand
    console.log(obj)
    let model = yield 'brand added'
    obj.model = model
    console.log(obj)
    let engine = yield 'model added'
    obj.engine = engine
    console.log(obj)
    let gearbox = yield 'engine added'
    obj.gearbox = gearbox
    console.log(obj)
    yield 'gearbox added'
}
let my_car = {owner:"me"}
let go = customize_car(my_car)
const a = go.next()
console.log(a.value)
console.log(go.next())
console.log(go.next())
console.log(go.next())
console.log(go.next())