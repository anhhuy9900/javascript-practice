let a = {
    msg:'hello',
    list:['apple','oranage','banana'],
    test(){console.log('TEST FUNC')},
    empty:null
}

let b = Object.assign({},a)

b.list.push('milk')
b.msg = 'hi'
b.test = function(){
    console.log('new method')
}