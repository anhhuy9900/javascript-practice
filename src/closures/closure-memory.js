function heavyDuty(item) {
    const bigArray = new Array(7000).fill('😄')
    console.log('heavyDuty created!');
    return bigArray[item]
}

heavyDuty(699);
heavyDuty(699);
heavyDuty(699);
// !Output:
// heavyDuty created!
// heavyDuty created!
// heavyDuty created!

function heavyDutyClosure() {
    const bigArray = new Array(7000).fill('😄');
    console.log('heavyDutyClosure Created Again!')
    //Output: heavyDutyClosure Created Again!
    return function(item) {
        console.log('heavyDutyClosure item : !', bigArray[item])
        // !Output
        // heavyDutyClosure item : ! 😄
        // heavyDutyClosure item : ! 😄
        // heavyDutyClosure item : ! 😄
        return bigArray[item];
    }
}

const getHeavyDutyClosure = heavyDutyClosure();
getHeavyDutyClosure(699);
getHeavyDutyClosure(699);
getHeavyDutyClosure(699);
  