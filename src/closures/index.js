
const calFunc = () => {
    console.log('========== calPrice FUNC ==========');
    return function () {
        console.log('========== INSIDE FUNC ==========');
    }
}

// const vCalFunc = calFunc();
// vCalFunc();
// vCalFunc();
// vCalFunc();


const Test = () => {
    let value = 1;
    console.log('========== Test FUNC ==========> ', value);
    return function () {
        value++;
        console.log('========== INSIDE Test FUNC ==========> ', value);
    }
}

const cTest = Test();
cTest();
cTest();
cTest();