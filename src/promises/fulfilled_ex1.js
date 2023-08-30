let po = new Promise(function(resolve,reject){
    //resolve('fulfilled promise...')
    reject('rejected promise...')
})

po
.then((val)=>{ // onFulfilled
    console.log(val)
},(err)=>{
    console.log(err)
})
// .catch((err)=>{ // onRejected
//     console.log(err)
// })
.finally(()=>{ // onFinally
    console.log('finally...')
})
