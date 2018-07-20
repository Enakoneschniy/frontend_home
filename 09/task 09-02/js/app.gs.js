;(()=> {
    "use strict";
 //1 решение
    let arr=[];
    for(let i=0;i<=5;i++){
        arr.push(String(i).repeat(i));
    }
    console.log(arr);

    
    //2е решение
let array=[];
    for(let i=0;i<=5;i++){
        let number=String(i+1);
        array[i]="";
        for(let j=0;j<i+1;j++)
        array[i]+=number;
    }
    console.log("==================");
    console.log(array);

})();