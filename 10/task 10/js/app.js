;(() => {
    'use strict';

    function enterIntNumber() {
        let num;
        while (true) {
            num = parseInt(prompt(`Введите число`), 10);
            if (isNaN(num)) {
                alert("Введено не число")
            } else {
                return num;
            }
        }
    }

    let a = enterIntNumber();

    function checkNumber(a){
        if (a>10) return Math.pow(a,2);
        else if (a<=7) return "less then  7";
        if (a>7&& a<10) return a-1;

    }
    console.log(checkNumber(a));



})();



