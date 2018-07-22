;(()=>{
    'use strict';
    function number() {
        while (true){
            let a = parseFloat(prompt('Введите число'),'');
            if (!isNaN(a)) {
                return a;
            }else {
                alert('Введено не число!');

            }
        }
    }
    let num = number();
    let arrDivisors = [];

    function getDivisors(num) {
        for (let i = 0; i < num; i++){
            if (num % i === 0)arrDivisors.push(i);
        }
        return arrDivisors;
    }
    console.log(getDivisors(num))
})();