;(() => {
    'use strict';
    let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let arr2 =[];
    let quantity = arr1.length -1;
    for (let i = 0; i < arr1.length; i++){
        arr2 [i] = arr1[quantity--];
    }
    arr1 = arr2;
    console.log(arr1);
})();