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
let iterations = enterIntNumber();

let arr = [];
for (let i = 1; i<=iterations; i++ ){
    arr.push(String(i).repeat(i))
}

console.log(arr);


