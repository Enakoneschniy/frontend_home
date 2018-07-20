(()=>{
"use strict";
    function number() {
        while (true) {
            let a = parseFloat(prompt(' Введите число для определения у него делителей ', ''));
            if (!isNaN(a)) {
                return a;
            } else {
                alert('Введено не число, попробуйте снова !');

            }
        }
    }
    let num=number();
    let arrDivisors=[];

function getDivisors(num){
for(let i=0;i<num;i++) {
    if(num%i===0)arrDivisors.push(i);
}
  return arrDivisors;
    }


    console.log(getDivisors(num));
})();