;(() => {
    'use strict';

    let num = enterIntNumber();

    let sum = (n) => {
        if (n < 10) {
            return n;
        }
        let x = Math.pow(10, getlength(n) - 1);
        return Math.trunc(n / x) + sum(n - Math.trunc(n / x) * x);
    };

    console.log(`Сумма цифр в числе ${num} = ${sum(num)}`);

    function getlength(number) {
        return number.toString().length;
    }

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

})();



