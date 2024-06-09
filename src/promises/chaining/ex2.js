const asyncOperation = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num > 1) {
                //throw Error('Has Error');
                reject('Has Error');
            } else {
                resolve(`The operation will completed wih number: ${num}`);
            }
        }, 1000)
    })
}

asyncOperation(1).then((value) => {
    console.log('asyncOperation 1 => ', value);

    return asyncOperation(2);
}).then((value) => {
    console.log('asyncOperation 2 => ', value);
}).catch(err => {
    console.log('asyncOperation Error => ', err);
})