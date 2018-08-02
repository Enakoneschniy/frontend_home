(() => {
    "use strict";

    const salaries = {
       // "Вася": 100,
       // "Петя": 300,
        //"Даша": 250
    };

    function isEmpty(obj) {
        let maxSalaries=0;
        let Chief ="";
        for (let key in obj) {
            if (obj[key] > maxSalaries){
                maxSalaries = obj[key];
                Chief=key;
            }

        }

          return Chief||`Нет сотрудников`;
    }


    alert(isEmpty(salaries));
})();