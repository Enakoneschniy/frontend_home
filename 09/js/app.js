//task1
'use strict';
let el='x';
let arr=[];
for(let index=0;index<5;index++){
    arr[index]=el;
    el+='x';
}
console.log(arr);
//task2
let arr2 = [];
for (let i = 1; i<=5; i++ ){
    arr2.push(String(i).repeat(i));
}
console.log(arr2);
//task3
function arrFill(x,n){
    for(let i=0; i<n; i++){
        arr[i]=x;
    }
    console.log(arr);
}
arrFill(7,10);
//task4
let sum=0;
let sumArr=[1,5,4,2,3,7,9];
console.log(sumArr);
for(let i =0; i<8; i++){
    sum+=sumArr[i];
    if(sum>10){
        console.log(' Сумма больше 10-ти при сложении ' + (i+1) + ' элементов' );
    break;
    }
}
//task5
let tmp=[];
let reArr=[1,2,3,4,5,6,7,8,9,10];
console.log(reArr);
for(let i =0; i<(10/2) ; i++){
    tmp=reArr[i];
    reArr[i]=reArr[10-i-1];
    reArr[10-i-1]=tmp;
}
console.log(reArr);

/*
tmp.push(...reverseArr.slice(reverseArr.length/2));
console.log(tmp);*/
//task 6
let mas=[];
let N=2;
let sumMas=0;
for(let row =0 ; row<N; row++){
    mas[row]=[];
    for(let cols=0; cols<N; cols++){
        mas[row][cols]=parseInt(Math.random() *11);
    }
}
console.log(mas);
for(let i=0 ; i < N ; i++){
    for(let j=0 ; j<N; j++){
        sumMas+=mas[i][j];
    }
}
console.log(sumMas);
//task 7
let summa=0;
let sumMatrix=[];
let size=2;
//console.log(sumMatrix);
for( let i=0; i<size; i++) {
    sumMatrix[i] = [];
    for (let j = 0; j < size; j++) {
        sumMatrix[i][j] = [];
        for (let k = 0; k < size; k++) {
            sumMatrix[i][j][k] = parseInt(Math.random() * 11);

        }
    }
}
console.log(sumMatrix);
for( let i=0; i<size; i++) {
    for (let j = 0; j < size; j++) {
        for (let k = 0; k < size; k++) {
            summa+=sumMatrix[i][j][k];
        }
    }
}
console.log(summa);
//task8
let Y=parseFloat(prompt(' Введите число '));
function isNumberInRange(X) {

if(X>0 && X<10){
    console.log(' Число в промежутке');
   return true;
    }
else{
    console.log(' Число не в промежутке');
    return false;
}
}
isNumberInRange(Y);
//task 9
let numberMas=[1,5,6,3,2,4];
console.log(numberMas);
let num=parseFloat(prompt(' Введите число'));
for(let i=0 ; i< 6; i++){
    if(isNumberInRange(num)){
        num=parseFloat(prompt(' Введите число '));
        numberMas.push(num);
    }

}
console.log(numberMas);
//task 10
function isEven(i){
    if(i%2===0){
        console.log(' Число Четное ' +'[' + i + ']');
        return true;
    }
    else{
        console.log( ' Число нечетное ' +'[' + i + ']');
    return false;
    }

}
isEven(Y);
//task11
let masEven=[1,4,5,3,2,6];
console.log(masEven);
let num1=parseFloat(prompt(' Введите число'));
for(let i=0 ;i<5;i++){
    if(isEven(num1)){
        masEven.push(num1);
   num1=parseFloat(prompt(' Введите число'));
    }
}
console.log(masEven);
//task12
function getDivisors(j){
let masOfDivisors=[];
for(let i =0 ; i<=j; i++){
    if(j%i===0){
        masOfDivisors.push(i);
    }

}
console.log(masOfDivisors);
}
let d=parseFloat(prompt(' Введите любое число'));
getDivisors(d);
//task13
let xArr=[1,2,3,4,5,6];
console.log(xArr);
xArr.splice(0,6,2,1,4,3,6,5);
console.log(xArr);
//task14
let yArr=[1,2,3,4,5,6];
console.log(yArr);
yArr.splice(0,6,5,6,3,4,1,2);
console.log(yArr);