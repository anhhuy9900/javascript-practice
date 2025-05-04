// function runAction() {
//     let total = 0;
//     for (let i = 0; i < 10000000000; i++) {
//         total++;
//     }

//     console.log('--------- FINISH runAction function ---------');
//     return total
// }

async function run(value) {
    return new Promise((resolve, reject) => {
        resolve(value);
    }).then(res => {
        console.log('------ Resolve Promise: ', res, ' -------');
        return res * 10;
    }).then(res => {
        console.log('------ Resolve Promise: ', res, ' -------');
        return res * 10;
    }).then(res => {
        console.log('------ Resolve Promise: ', res, ' -------');
        return res * 10;
    })
}

(() => {
    console.log('############ Run Promise like asynchronous ############');
    run(1).then(res => {
        console.log('------ result -> res: ', res);
    });

    // const resultNext = result.then();
    // console.log('------ result: ', result.then().then());
    // run(1);
    // run(2);
})()

// (async () => {
//     console.log('------ Run Promise like synchronous -------');
//     await run(1);
//     await run(2);
// })()