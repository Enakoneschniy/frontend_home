;(() => {
    'use strict';
    let arr = [1, 2, 3, 4, 5, 6];
    console.log(`исходный массив :${arr}`);
    let temporarily1 = arr.splice(0,2);
    let temporarily2 = arr.splice(2,4);
    arr = temporarily2.concat(arr,temporarily1);
    console.log(`Новый массив :${arr}`);
})();