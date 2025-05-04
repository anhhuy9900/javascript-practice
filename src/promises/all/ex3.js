"use strict";

function test() {
    console.log("test -> ", 1);
    return true;
}

function test2() {
    console.log("test2 -> ", 2);
    return true;
}

const run = async() => {
    const promises = await Promise.all([
        test(),
        Promise.all([
            test2(),
        ])
    ]);
    console.log(": -------------------------");
    console.log("run -> promises", promises);
    console.log(": -------------------------");
    return promises;
}

run().then(res => console.log("test promises : ", res));