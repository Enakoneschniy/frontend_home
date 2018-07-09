//HOMEWORK

'use strict';


function arrayFill(value, iterations) {
    let arr = [];
    for (let i = 1; i <= iterations; i++) {
        arr.push(value);
    }
    return arr;
}

console.log(arrayFill(5, 3));


