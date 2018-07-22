(()=>{
    'use strict';
    //task1
let ucfirst=((string)=>{
    return string[0].toUpperCase() + string.substr(1,string.length);
});
let str='hello my name is alex';
str=str.split(' ').map((el)=>{
    return ucfirst(el);
}).join(' ');

console.log(ucfirst(str));
//task2
let s='var_text_hello';
let mas=s.split('_');
for(let i=1; i<mas.length;i++){
    mas[i]=ucfirst(mas[i]);
}
s=mas.join('');
console.log(s);
//task3
function inArray(text, arr) {
    return arr.indexOf(text) >= 0 ? true : false;
}
let arr='i used to play guitar';
console.log(inArray('used',arr));
//task4
let n='123456';
let mas1=n.split('');
mas1.splice(0,6,'2','1','4','3','6','5');
n=mas1.join('');
console.log(n);
//task5
let user={
    name:' Вася',
    surname:' Петров',
};
user.name=' Сергей';
user.secondName='Alex';
delete user.name;
console.log(user);
//task6
let isEmpty=((obj)=>{
    for(let el in obj){
        return false;
    }
    return true;
});
console.log(isEmpty(user));

//task7
let salaries={
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};
let total=0;
for(let key in salaries){
    total+=salaries[key];
}
console.log(total);
console.log(salaries);
//task8
let max=0;
let name="";
for(let key in salaries){
    if(max<salaries[key]){
        max=salaries[key];
        name=key;
    }

}
console.log(name || ' Нет сотрудников');
//task9
const menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}
for(let el in menu){
    if(isNumeric(menu[el]))
        menu[el]*=2;
}
console.log(menu);
})();