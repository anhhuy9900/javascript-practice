
function runAction() {
    let total = 0;
    for (let i = 0; i < 10000000000; i++) {
        total++;
    }

    console.log('--------- FINISH runAction function ---------');
    return total
}

const asyncOperation = () => {
    return new Promise((resolve, reject) => {
        resolve(runAction())
    })
}

(async() => {
    // Promise chain
    // asyncOperation().then(el => {
    //     console.log("\n------------------------------------");
    //     console.log('LOG: ', 'el 1:', el);`
    //     return asyncOperation()
    // }).then(el => {
    //     console.log('LOG: ', 'el 2: ', el);
    //     asyncOperation().then(el => {
    //         console.log('LOG: ', 'el 3: ', el);
    //     })
    // })

    // promise chain by await
    console.log("\n------------------------------------");
    const ac1 = await asyncOperation();
    console.log('LOG: ', 'ac1:', ac1);
    const ac2 = await asyncOperation();
    console.log('LOG: ', 'ac2:', ac2);
    const ac3 = await asyncOperation();
    console.log('LOG: ', 'ac3:', ac3);
})()