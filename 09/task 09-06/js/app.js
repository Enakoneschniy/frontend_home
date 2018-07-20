;(()=> {
    "use strict";
    let arr= [[1, 2, 3], [4, 5], [6]];
    let sum=0;
    for(let i=0;i<arr.length;i++) {
        for(let j=0;j<arr[i].length;j++)
            sum+=arr[i][j];
    }
    console.log(sum);
    
    console.log(`==========================================`);
    let arr1= [[1, 2, 3], [4, 5], [6]];
    

          let result=arr1.reduce(function (sum1, current1,index) {
              current1=arr1[index].reduce(function (sum2, current2){
                  return sum2+current2;
              },0)
                return sum1+current1;

    },0)
    console.log(result);
    

})();