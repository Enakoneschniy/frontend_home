;(()=>{
    'use strict';
    let arr = [[1,2,3],[4,5], [6]];
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        for(let u = 0; u < arr[i].length; u++);
            sum += arr[i][u];
    }
    console.log(sum);


    console.log(`---------------`);
    let arr1 = [[1,2,3],[4,5],[6]];

    let result = arr1.reduce(function (sum1, current1, index) {
        current1 = arr1 [index].reduce(function (sum2, current2) {
            return sum2 + current2

        },0);
        return sum1 + current1;

    },0);
    console.log(result);
})();
//унвавламдроиыорлироорлиоролорпавпгшщгнеаспмролеп7нкпрковшпм87нр4иош3акма7кнвр4иош3к7м7н4вр4о9ке7нвр