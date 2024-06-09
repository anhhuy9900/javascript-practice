const XMLHttpRequest = require('xhr2');
let url_1 = 'https://jsonplaceholder.typicode.com/todos/1'

function my_ajax(url){
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest()
        xhr.open("GET", url, true)
        xhr.onreadystatechange = function(){
            if(this.readyState == 4){
                if(this.status == 200){
                    resolve(JSON.parse(this.responseText))
                }else{
                    reject('ERR: '+this.status)
                }
            }
        }
        xhr.send()
    })
}
let po = my_ajax(url_1)
po.then((val)=>{console.log(val)})
.catch((err)=>{console.log(err)})


async function outer(){
    console.log('program starts...')

    let sv = my_ajax(url_1)
    console.log(sv)

    console.log('program ends...')
}
// outer()


// async function outer2(){
//     let num = 1
//     await new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             num++
//             resolve('whatever...')
//         },1000)
//     })
//
//     console.log(num)
// }

async function outer3(){
    console.log('program starts...')

    let sv = my_ajax(url_1)
    console.log(sv)

    console.log('program ends...')
}
outer3();