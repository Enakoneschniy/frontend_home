
    let x = prompt('Введите Х');
    let y = prompt('Введите Y');
    let i = (Math.pow(x, 2) + Math.pow(y, 2));
    if (x <= 0 && y <= 0 && y >= -x - 2 || i <= Math.pow(1, 2)) {
        alert("Точка попадает в область")
    }
    else {
        alert("Точка НЕ попадает в область")
    }





let a = 10;
let b = 2;
let z;
if (a > b) {
    z = a + b / 2 * 4;
}
else if (a < b) {
    z = a - b + 2 / b * 4
} else if (a = b) {
    z = 400;
}
console.log(z);
let day = prompt('Введите номер деня недели от 1 до 7');
let n = day-1;
let h = ['понедельник','вторник','среда','четверг','пятница','суббота','воскресенье'];

if (0<day && day<8) {alert( "Вы ввели" + " " + h[n])}
else alert( "нет такого дня" + " " + day + " " + "нет");


