'use strict';
let mtx=[];
for(let i =1; i <=10; i++){
    mtx[i]=[];
    for(let j=1; j<=10; j++){
        mtx[i][j]= i*j;
    }
}
console.log(mtx);

//task15(2)
let mtx1=[];
for(let i =0; i <10; i++) {
    mtx1[i] = [];
    for (let j = 0; j < 10; j++) {
if(i===j){
    mtx1[i][j]=1;
}
if(j===10-i-1){
    mtx1[i][j]=2;
}
 if (i < 4 && i < 9 - j && j > i) {
     mtx1[i][j] = 3;
 }
 if( i>5 && i > 9-j && j<i){
    mtx1[i][j]=5;
 }
 if(j<4 && j<9-i && i>j){
    mtx1[i][j]=6;
 }
 if(j>5 && j>9-i && i<j){
    mtx1[i][j]=4;
 }
    }
}
console.log(mtx1);
//task15(3)
let mtxPascale=[];
for(let i=0; i<10; i++){
    mtxPascale[i]=[];
    for(let j=0 ; j<i+1 ; j++){
        if(j===0 || i===j){
            mtxPascale[i][j]=1;
        }
        else
        mtxPascale[i][j]=mtxPascale[i - 1][j - 1] + mtxPascale[i - 1][j];

    }
}
console.log(mtxPascale);