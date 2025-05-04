function runAction() {
    let total = 0;
    for (let i = 0; i < 10000000000; i++) {
        total++;
    }

    console.log('--------- FINISH runAction function ---------');
    return total
}

function run() {
    console.log('------ START ------')

    new Promise((resolve, reject) => {
        // ** ###### SYNC - NOT ASYNC ########
        // ** The Promise block is synchronous - The Promise callback blocks (resolve, reject) are synchronous
        // resolve(runAction())
        // ** When check console will show like this
        // ------ START ------
        // --------- FINISH runAction function ---------
        // ------ END ------
        // ------ Resolve Promise:  10000000001  -------


        // ** ###### ASYNC - The callback call (not the block itself) can be asynchronous if the Promise block uses a setTimeout block ########
        setTimeout(() => {
            resolve(runAction())
        }, 0)
        // ** When check console will show like this
        // ------ START ------
        // ------ END ------
        // --------- FINISH runAction function ---------
        // ------ Resolve Promise:  10000000001  -------
    }).then(res => {
        console.log('------ Resolve Promise: ', res, ' -------');
    })

    console.log('------ END ------')
}

run();