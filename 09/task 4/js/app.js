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
    arr.push(random(2, 4));
}
console.log(arr);

let answer = 0;

for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
    if (answer > 10) {
        console.log(i);
        break;
    }

}
