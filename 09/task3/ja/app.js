'use strict';

let array = [];

function arrayFill(x, n) {
    for (let i = 0; i < n; i++) {
        array [i] = x;
    }
    console.log(array);
}

arrayFill('x', 14);