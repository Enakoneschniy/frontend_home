(()=>{
    'use ctrict';
    function isNumberInRange() {
        while (true) {
            let a = parseFloat(prompt('Введите количество элементов в массиве',''));
            if (!isNaN(a)){
                return function () {
                    if(a > 0 && a < 10) return true;
                    else return false;

                };

            }else
                alert('Введено не число , попробуйте снова !');
        }
    }
    let result = isNumberInRange()();
    alert(result)
})();