//this var is global variable
var a = 'var a in global scope';

function func() {
    // this is function scope
    var a = 'var a in function scope';
    console.log(a);
    var b = 'var b in function scope';
}

func();

if(true) {
    //this is block scope
    var a = 'var a in block scope';
    console.log(a);
    var b = 'var b in block scope';
    console.log(b);
}

console.log(a);