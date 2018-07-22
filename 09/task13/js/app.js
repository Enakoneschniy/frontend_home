;(() => {
    'use strict';
    let arr = [1, 2, 3, 4, 5, 6];
    for (let i = 0; i < arr.length; i += 2) {
        let temporarily = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] =temporarily;
    }
    console.log(arr);
})();