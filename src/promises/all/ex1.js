const po1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('po1: SUCCESS')
        // reject('po1: FAILURE')
    }, 3000)
}).catch(err => {
    console.log('po1 catch error: ', err);
})

const po2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('po2: FAILURE')
    }, 1000)
}).catch(err => {
    console.log('po2 catch error: ', err);
})
const po3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('po3: FAILURE')
    }, 2000)
}).catch(err => {
    console.log('po3 catch error: ', err);
})

const arrPromises = [po1, po2, po3]
// arr.forEach((po)=>{
//     po
//     .then((val)=>{console.log(val)})
//     .catch((err)=>{console.log(err)})
// // })


Promise.all(arrPromises).then(promise => {
    console.log("\n------------------------------------");
    console.log('LOG: ', 'Promises: ', promise);
    console.log("------------------------------------");

    promise.forEach((item) => {
        console.log('Promise item:', item)
    })
}).catch((err) => {
    // if one of promises have been failed, then just show a catch warning error, not show all catch errors
   console.log('catch: ', err)
})

