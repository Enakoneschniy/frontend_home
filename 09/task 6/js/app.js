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

let columns = enterIntNumber();


let arr = [];
for (let i = 0; i < columns; i++) {
    arr[i] = [];
    for (let y = 0; y < columns - i; y++) {
        arr[i][y] = random(1, 10);
    }
}
console.log(arr);

let sum = arr.reduce((sum, current, index) => {
    current = arr[index].reduce((sum1, current1) => {
        return sum1 + current1;
    }, 0);
    return sum + current;
}, 0);

console.log(sum);