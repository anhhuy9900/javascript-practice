function calculateCash(cash = 0) {
    console.log("========== calculateCash ==========");
    let initCash = [100, 200, 300];
    const randomIdz =  Math.floor(Math.random() * initCash.length);
    initCash = initCash[randomIdz];
    console.log('calculateCash - initCash: ', initCash);
    return () => {
        return {
            firstRecipe: () => {
                const price = (initCash + cash) / 2
                console.log('firstRecipe - price: ', price);
            },
            secondRecipe: () => {
                const price = (initCash + cash) / 3;
                console.log('secondRecipe - price: ', price);
            }
        }
    }
}

// const call = calculateCash();
// call();
// call();
// call().firstRecipe();
// call().secondRecipe();

