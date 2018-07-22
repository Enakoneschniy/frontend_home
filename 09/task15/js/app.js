;(() => {
    'use strict';
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = [];
        for (let y = 0; y < 10; y++)
            arr[i][y] = (i + 1) * (y + 1);
    }
    console.log(arr);
    let arr1 = [];
    for (let i = 0; i < 10; i++) {
        arr1[i] = [];
        for (let y = 0; y < 10; y++) {
            if (i === y) arr1[i][y] = 1;
            else if (i + y === 9) arr1[i][y] = 2;
            else if (i < 4 && y > i && i < 9 - y) arr1[i][y] = 3;
            else if (y > 5 && i > 0 && y > i && y > 9 - i) arr1[i][y] = 4;
            else if (i > 5 && i > 9 - y && i > y) arr1[i][y] = 5;
            else if (y < 4 && y < 9 - i && i > y) arr1[i][y] = 6;
        }
    }
    console.log(arr1);

    let arr2 = [];
    for (let i = 0; i < 10; i++) {
        arr2 = [];
        for (let y = 0; y < i + 1; y++) {
            if (y === i || y === 0) {
                arr2[i][y] = 1;
            }
            else {
                arr2[i][y] = arr2[i - 1][y - 1] + arr2[i - 1][y];
            }
        }
    }
    console.log(arr2);
})();