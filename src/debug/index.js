function exeA() {
    const a = 100;
    const b = 200;
    const c = a + b / 2
    return c
}

function exeB(total = 0) {
    let count= 0;
    for (let i = 0; i < total; i++) {
        count++;
    }

    return count;
}

function execute() {
    const eA = exeA();
    const eB = exeB(eA);
    setTimeout(() => {
        console.log('execute : ', eB);
    }, 1000)
}
execute();