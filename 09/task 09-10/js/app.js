;(()=>{
 `use strict`
    function number() {
        while (true) {
            let a = parseFloat(prompt(' Введите число для проверки на четность ', ''));
            if (!isNaN(a)) {
                return a;
            } else {
                alert('Введено не число, попробуйте снова !');

            }
        }
    }
function isEven(a) {
     return a%2===0;
}
let value=number();

  alert (`Число четное : ${isEven(value)}`);
})();