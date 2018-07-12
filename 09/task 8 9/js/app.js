//HOMEWORK

'use strict';
let random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);


let arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push(random(1, 20));
}
console.log(arr);

let arr1 = arr.filter((number) => isNumberInRange(number));

console.log(arr1)

function isNumberInRange(num) {
    return num > 0 && num < 10
}



