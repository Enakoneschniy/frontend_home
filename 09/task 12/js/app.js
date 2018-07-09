//HOMEWORK

'use strict';

let divisors =  (n) => {
    let arr = [];
    for (let i = 0; i<= n/2; i++){
        if (n%i===0) arr.push(i);
    }
    arr.push(n);
    return arr;
};

console.log(divisors(24));
