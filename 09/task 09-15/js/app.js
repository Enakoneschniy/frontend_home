;(()=> {
    "use strict";


    let arr = [];

    for (let i = 0; i < 10; i++) {
        arr[i]=[];
        for (let j = 0; j <10 ; j++)
          arr[i][j]=(i+1)*(j+1);

    }
    console.log(arr);
    console.log("===========================================================================");
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
    console.log(arr1);
    console.log("===========================================================================");
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
    console.log(arr2);

})();