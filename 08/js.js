'use strict';
//№1
let a = parseFloat(prompt('Введите первое число', ''));
let b = parseFloat(prompt('Введите второе число', ''));
if (a > b){
    console.log(a);
}
else console.log(b);
//№2
let c = parseFloat(prompt('Введите первое число', ''));
let d = parseFloat(prompt('Введите второе число', ''));
if (c > d){
    console.log(c);
}
else if (d > c){
    console.log(d);
}
else console.log('Numbers are equal!');
//№3
let num = parseFloat(prompt('Введите номер квартиры', ''));
if (num <= 20){
    console.log('1 подъезд');
}
else if (num >= 21 && num <= 48){
    console.log('2 подъезд');
}
else if (num >= 49 && num <= 90){
    console.log('3 подъезд');
}
else console.log('Такой квартиры нет');
//№4
let log = prompt('Введите логин', '');
let password = prompt('Введите пароль', '');
if ((log === 'ivan' && password === '334455') || (log === 'alex' && password === '777') || (log === 'petr' && password === 'b5678')){
    console.log('Добро пожаловать');
}
else console.log('Ошибка входа');
//№5
let year = parseFloat(prompt('Введите год рождения', ''));
let age = 2018 - year;
if (age >= 16){
    console.log('Добро пожаловать');
}
else console.log('Вход воспрещен');
//№6
let exp = parseInt(prompt('Введите стаж работы', ''));
if (exp < 3){
    console.log(exp);
}
else if (exp > 3 && exp < 10){
    console.log(exp * 0.1);
}
else if (exp > 10 && exp < 20) {
    console.log(exp * 0.2);
}
else if (exp > 20){
    console.log(exp * 0.25);
}
//№7
for (let i = 4; i <= 400; i++){
    console.log(i);
}
//№8
for (let index = 4; index <= 13; index+=3){
    console.log(index);
}
//№9
for (let ind = 654; ind >= 0; ind--){
    console.log(ind);
}
//№10
for (let year = 1983; year <= 2017; year++){
    console.log(year);
}
//№11
for (let n = (-4); n <= 100; n+=2){
    console.log(n);
}
//№12
let mul = 7;
for (let index = 1; index <= 9; index++){
    console.log(`${mul} * ${index}:`, mul*index);
}
//№13
for (let k = 1000; k < 2000; k++) {
    console.log(String.fromCharCode(k));
}
//№14
let sum = 0;
for (let i = 0; i <= 100; i++){
    console.log(sum+=i);
}
//№15
let mult = 1;
for (let i = 1; i <= 50; i++){
    console.log(mult*=i);
}