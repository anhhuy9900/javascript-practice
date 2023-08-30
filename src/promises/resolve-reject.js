function make_promise(arg){
    //return new Promise((resolve,reject)=>{
        if(arg){
            return Promise.resolve('success value')
        }else{
            return Promise.reject('failure reason')
        }
    //})
}

let po = make_promise(true)

po
.then((val)=>{
    console.log(val)
    return Promise.resolve('2nd fulfilled promise')
})
.then((val)=>{
    console.log(val)
})
.catch((err)=>{
    console.log(err)
})
.finally(()=>{
    console.log('finally...')
})
