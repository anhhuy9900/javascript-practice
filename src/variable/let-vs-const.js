let a = 'let a is global scope';
/*
characters of LET:
1. no repeated declaration
2. will not be added into window obj
3. won't be hoisted
4. works in block scope
*/
const b = 'const b is global scope';
console.log(a);
console.log(b);
let c = 'let c in block scope';

function func() {
    let a = 'let a in function scope';
    const b = 'const b in function scope';
    c = 'let c in function scope';
    console.log(a);
    console.log(b);
    console.log(c);
    /**
     * !This is reference error
     * !Cannot access 'c' before initialization 
     */
    let c = 'set c in function scope';
}
func();

if(true) {
    a = 'a is block scope';
    const b = 'b is block scope';
}

console.log(a);
console.log(b);
