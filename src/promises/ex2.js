let po1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{ resolve('po1: success') },3000)
})
let po2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{ reject('po2: FAILURE') },1000)
})
let po3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{ resolve('po3: success') },2000)
})

let arr = [po1,po2,po3]
// arr.forEach((po)=>{
//     po
//     .then((val)=>{console.log(val)})
//     .catch((err)=>{console.log(err)})
// // })


Promise.all(arr).then((val)=>{
    val.forEach((item)=>{
        console.log(item)
    })
}).catch((err)=>{
    console.log(err)
})

