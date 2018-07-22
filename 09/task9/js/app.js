(()=>{
    'use strict';
    function number() {
        while (true){
            let a = parseFloat(prompt('Введите количество элементов в масиве', ''));
            if (!isNaN(a)){
                return a;

            }
            else {
                alert('Введено не число , попробуйте снова !');
            }
        }
    }
    function isnumberInRange(a) {
        return (a>0&&a<10);


    }
    let arr = [6,10,22,5,1];
    let arrNew =[];
    for (let i = 0; i< arr.length; i++)
        arrNew[i] = isnumberInRange(arr[i]);
    console.log(arrNew);

    let arr2 = [];
    for (let i = 0 ; i < arr.length; i++){
        arr2.push(arr[i]);
    }
    console.log(arr2);
})();