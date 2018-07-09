//HOMEWORK

'use strict';

function enterIntNumber() {
    let num;
    while (true) {
        num = parseInt(prompt(`Введите число`), 10);
        if (isNaN(num)) {
            alert("Введено не число")
        } else {
            return num;
        }
    }
}

let random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

let iterations = enterIntNumber();

let arr = [];
for (let i = 1; i <= iterations; i++) {
    arr.push(random(1, 10));
}
console.log(arr);


for (let i = 0; i < Math.floor(arr.length/2); i++) {
    let c;
    let y = Math.floor(arr.length-1)-i;
    console.log(y);
    c =arr[i];
    console.log(c);
    arr[i] = arr[y];
    arr[y] = c;
}

console.log(arr);