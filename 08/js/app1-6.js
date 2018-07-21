'use strict';
let x = prompt('введите число 1');
let y = prompt('введите число 2');
if (x > y) alert('число 1 больше');
else if (x < y) alert('число 2 больше');
else if (x === y) alert('они равны');

let b = prompt('введите номер квартиры');
if (b <= 0 || b > 90) alert('нет такой квартиры');
else if (b > 0 && b < 20) alert('1 подьезд');
else if (b >= 20 && b <= 48) alert('2 подьезд');
else alert('3 подьезд');

let log = prompt(" Введите Логин");
let pass = prompt('Введите Пароль');
if (log == 'ivan' && pass == 334455) {
    alert("Доступ разрешен");
}
else if (log == 'alex' && pass == 777) {
    alert("Доступ разрешен");
}
else if (log == 'petr' && pass == 'd5678') {
    alert("Доступ разрешен");
}
else alert('Доступ запрещен');



let m = prompt('какого вы года рождения?');
const year = 2018;
let age = year - m;
if (age > 16) alert("добро пожаловать");
if (age < 16) alert("вход воспрещен");

let staj = prompt('Введите сколько у вас стажа лет');
if (staj > 0 && staj <= 3) alert('прибавка  0%');
else if (staj > 3 && staj <= 10) alert('прибавка 10%');
else if (staj > 10 && staj <= 20) alert('прибавка  20%');
else alert('прибавка 25%');