function outer() {
    var a = 'this is scope variable';
    return function() {
        return a
    }
}

console.log(outer()());