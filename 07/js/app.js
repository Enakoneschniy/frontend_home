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

function enterFloatNumber() {
    let num;
    while (true) {
        num = parseFloat(prompt(`Введите число`));
        if (isNaN(num)) {
            alert("Введено не число")
        } else {
            return num;
        }
    }
}

// //Task 1
// let a = enterIntNumber();
// let b = enterIntNumber();
// let res;
// if (a > b) {
//     res = a + b / 2 * 4
// }
// else if (a < b) {
//     res = a - b + 2 / b * 4
// }
// else {
//     res = 400;
// }
//
// alert(`Res  = ${res}`);
//
//
// //Task 2
// let x1 = enterFloatNumber();
// let y1 = enterFloatNumber();
//
// function checkFirstFigure(x,y) {
//     if ((x + 4 - y) > 0 && y > 0 && 4 - x - y > 0) {
//         return "Точка попадает в область";
//     }
//     else {
//         return "Точка НЕ попадает в область"
//     }
// }
// alert(checkFirstFigure(x1,y1));
//
// function checkSecondFigure(x, y) {
//     if (y > 0) {
//         if ((-x - y) < 0 && y < 1 && y > x) {
//             return "Точка попадает в область";
//         }
//         else {
//             return "Точка НЕ попадает в область";
//         }
//     }
//     else if (y < 0) {
//         if ((-x - y) > 0 && y > -1 && y < x) {
//             return "Точка попадает в область";
//         }
//         else {
//             return "Точка НЕ попадает в область";
//         }
//     }
//     else {
//         return "Точка НЕ попадает в область";
//     }
// }
// alert(checkSecondFigure(x1, y1));
//
// function checkThirdFigue(x, y) {
//     if ((Math.pow(x, 2) + Math.pow(y, 2) < 1) || (x < 0 && y < 0 && -2 - x - y < 0)) {
//         return "Точка попадает в область";
//     }
//     else {
//         return "Точка НЕ попадает в область";
//     }
// }
// alert(checkThirdFigue(x1,y1));
//
//
// //Task 3
// let c = enterIntNumber();
//
// switch (c) {
//     case 1:
//         alert("понедельник");
//         break;
//     case 2:
//         alert("вторник");
//         break;
//     case 3:
//         alert("среда");
//         break;
//     case 4:
//         alert("четверг");
//         break;
//     case 5:
//         alert("пятница");
//         break;
//     case 6:
//         alert("суббота");
//         break;
//     case 7:
//         alert("воскресенье");
//         break;
//     default:
//         alert("Число должно быть от 1 до 7")
// }

//Task 4

let m = enterIntNumber();
let n = enterIntNumber();
alert (m%2 ===0 ? `нечетное число ${n}` : `нечетное число ${m}`);

