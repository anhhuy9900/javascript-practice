let a = {
    msg:'hello',
    list:['apple','oranage','banana',{
        car:{
            city:['London','Newcastle']
        }
    }],// []
    test(){console.log('TEST FUNC')},
    empty:null
}

function deep_copy(source){
    if(typeof source != 'object' || source == null) throw 'illegal value'
    let copy = Array.isArray(source)?[]:{}
    for(let key in source){
        if(typeof source[key] =='object' && source[key]!= null){
            // reference type
            copy[key] = deep_copy(source[key])
        }else{
            // primitive
            copy[key] = source[key]
        }
    }
    return copy
}
let b = deep_copy(a) 