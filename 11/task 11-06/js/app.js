(()=>{
    "use strict";

    const salaries = {
        "Вася": 100,
        "Петя": 300,
        "Даша": 250
    };
    let sum=0;
    for(let key in salaries){
        sum+=salaries[key];
    }
    console.log(sum);
})();