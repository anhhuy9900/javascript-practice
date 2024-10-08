function debounce(func, wait) {
    let timeoutId
    return function(...arg) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, arg), wait);
    }
}

const search = debounce((query) => {
    console.log(`Searching for ${query}`);
    // Imagine an API call here
}, 300);


for (let i = 1; i < 10; i++) {
    search(`Number ${i}`)
}