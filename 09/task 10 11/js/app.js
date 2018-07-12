//HOMEWORK

'use strict';
let random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);


let arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push(random(1, 20));
}
console.log(arr);

let arr1 = arr.filter((number) => isEven(number));

console.log(arr1);

function isEven(num) {
    return num%2===0;
}



