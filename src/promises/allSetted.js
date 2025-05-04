let po1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{ resolve('po1: SUCCESS') },3000)
})
let po2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{ reject('po2: FAILURE') },1000)
})
let po3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{ resolve('po3: SUCCESS') },2000)
})


/**
 * Well, promise all settled doesn't care about resolve and reject, unlike promised that all which short circuits when any of the promises are rejected or settled.
 * The promise all settled runs. All promises, regardless of whether they reject or not. So the promise only comes back when all promises that have been added to it are complete.
 * So, for example, if I change this to six seconds here and I copy this even though one of the promises rejects.
 * Even though the first promise that returns is rejected, it doesn't care. All settle just checks for six seconds until all the promises are returned.
 * So it's a nice new extra feature for those customizations on your promises.
 */
Promise.allSettled([po1, po2, po3])
.then((val)=>{
    val.forEach((item)=>{
        console.log(item.value || item.reason)
    })
})
.catch(err => {
    console.error('Error: ', err);
});
