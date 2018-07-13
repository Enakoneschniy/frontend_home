//Пользователь вводит два числа. Найти и вывести максимальное из двух чисел.
"use strict";
function numberOne() {
    while (true) {
        let a1 = parseFloat(prompt('enter value A', ''));
        if (!isNaN(a1)) {
            return a1;
        } else {
            alert('not a digit, try again !');

        }

    }
}
function numberTwo() {
    while (true) {
        let b1 = parseFloat(prompt('enter value B', ''));
        if (!isNaN(b1)) {
            return b1;
        } else {
            alert('not a digit, try again !');

        }

    }
}
let a=numberOne();
let b=numberTwo();

switch (true) {
    case a > b:
        alert(`MAX A = ${a}`);
        break;
    default:
        alert(`MAX B = ${b}`);
}