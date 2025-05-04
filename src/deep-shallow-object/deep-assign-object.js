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

let b = {name:'obj. B'}

function deep_assign(target,source){
    if(target == null || typeof target != 'object') throw 'illegal 1st arg. value'
    if(source == null || typeof source != 'object') throw 'illegal 2nd arg. value'
    for(let key in source){
        if(source[key]!=null && typeof source[key] == 'object'){
            if(Array.isArray(source[key])){
                target[key] = []
            }else{
                target[key] = {}
            }
            deep_assign(target[key],source[key])
        }else{
            target[key] = source[key]
        }
    }
    return target
}
deep_assign(b,a)
// let a = {
//     msg:'hello',
//     list:['apple','oranage','banana',{
//         car:{
//             city:['London','Newcastle']
//         }
//     }],// []
//     test(){console.log('TEST FUNC')},
//     empty:null
// }

// let b = {name:'obj. B'}

// function deep_assign(target,source){
//     if(target == null || typeof target != 'object') throw 'illegal 1st arg. value'
//     if(source == null || typeof source != 'object') throw 'illegal 2nd arg. value'
//     for(let key in source){
//         if(source[key]!=null && typeof source[key] == 'object'){
//             if(Array.isArray(source[key])){
//                 target[key] = []
//             }else{
//                 target[key] = {}
//             }
//             deep_assign(target[key],source[key])
//         }else{
//             target[key] = source[key]
//         }
//     }
//     return target
// }
// deep_assign(b,a)
