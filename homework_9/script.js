'use strict';

function makeFibonacciFunction(n) {
    let a = 0;
    let b = 1;
    for (let i = 0; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
        console.log(c);
    };
    return b;
};

const fibonacci = makeFibonacciFunction(25);

console.log(fibonacci);




