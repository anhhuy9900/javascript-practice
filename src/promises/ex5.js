function runPromise(value) {
    const promise = new Promise((resolve, reject) => {

        if (value === 2) {
            for(let i = 0; i <= 10000; i++) {

            }
            resolve(value)
        } else {
            resolve(value)
        }

    })

    return promise;
}

const run = async() => {
    return await Promise.all([1,2,3,4].map(el => runPromise(el).then((res) => console.log(res))))
}

const result = run();
console.log('result: ', result);