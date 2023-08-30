const arr = [1,2,3,4];

for (var i = 0; i < arr.length; i++) {
    setTimeout(() => {
        console.log("I'm index at ", i);
    }, 0);
}

// * Output
// I'm index at  4
// I'm index at  4
// I'm index at  4
// I'm index at  4