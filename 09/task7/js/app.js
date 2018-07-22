;(() => {
    'use strict';
    let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++)
            for (let y = 0; y < arr[i][j].length; y++)
                sum += arr[i][j][y]

    }
    console.log(sum);
})();
