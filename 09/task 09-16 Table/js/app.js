;(()=>{
'use strict';
    let arr1 = [];
    for (let i = 0; i < 10; i++) {
        arr1[i]=[];
        for (let j = 0; j < 10; j++){
            if(i===j)arr1[i][j]=1;
            else if(i+j===9)arr1[i][j]=2;

            else if(i<4&&j>i&&i<9-j)arr1[i][j]=3;
            else if(j>5&&i>0&&j>i&&j>9-i)arr1[i][j]=4;
            else if(i>5&&i>9-j&&i>j)arr1[i][j]=5;
            else if(j<4&&j<9-i&&i>j)arr1[i][j] = 6;
        }


    }

    let table=document.body.children[0];
    for(let i=0;i<table.rows.length;i++){
        for(let j=0;j<table.rows[i].cells.length;j++){
          if(i===j) table.rows[i].cells[j].style.background='aqua';
          else if(i+j===9)table.rows[i].cells[j].style.background='aqua';

          else if(i<4&&j>i&&i<9-j)table.rows[i].cells[j].style.background='yellow';
          else if(j>5&&i>0&&j>i&&j>9-i)table.rows[i].cells[j].style.background='lime';
          else if(i>5&&i>9-j&&i>j)table.rows[i].cells[j].style.background='yellow';
          else if(j<4&&j<9-i&&i>j)table.rows[i].cells[j].style.background='lime';
        }
    }
    let table1=document.body.children[0];
    for(let i=0;i<table1.rows.length;i++){
        for(let j=0;j<table1.rows[i].cells.length;j++){
             table1.rows[i].cells[j].innerHTML=arr1[i][j];
        }
    }
    //////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////
    let arr = [];

    for (let i = 0; i < 10; i++) {
        arr[i]=[];
        for (let j = 0; j <10 ; j++)
            arr[i][j]=(i+1)*(j+1);

    }
    let table2=document.body.children[1];
    for(let i=0;i<table2.rows.length;i++){
        for(let j=0;j<table2.rows[i].cells.length;j++){
            table2.rows[i].cells[j].innerHTML=arr[i][j];
        }
    }
////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////
    let arr2 = [];

    for (let i = 0; i < 10; i++) {
        arr2[i] = [];
        for (let j = 0; j < i + 1; j++) {
            if (j=== i || j===0) {
                arr2[i][j] = 1;
            }
            else {
                arr2[i][j] =arr2[i-1][j-1] + arr2[i-1][j];
            }
        }
    }
    let table4=document.body.children[2];
    for(let i=0;i<table4.rows.length;i++){
        for(let j=0;j<table4.rows[i].cells.length;j++){
            table4.rows[i].cells[j].style.background='yellow';
            if(i<j) table4.rows[i].cells[j].style.background='lime';
        }
    }
    let table3=document.body.children[2];
    for(let i=0;i<table3.rows.length;i++){
        for(let j=0;j<table3.rows[i].cells.length;j++){
            table3.rows[i].cells[j].innerHTML=arr2[i][j];
            if(i<j) table3.rows[i].cells[j].innerHTML='*';
        }
    }
})();