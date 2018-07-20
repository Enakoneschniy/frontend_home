;(()=>{
    `use strict`
    function number() {
        while (true) {
            let a = parseFloat(prompt(' Введите количество элементов в массиве ', ''));
            if (!isNaN(a)) {
                return a;
            } else {
                alert('Введено не число, попробуйте снова !');

            }
        }
    }


    function getRndInteger(min=0, max=100) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    let numberElemArr=number()
    let arr=[];
    let arrEven=[];

    for(let i=0;i<numberElemArr;i++) {
        arr.push(getRndInteger());
    }
    function isEven(a) {
        return a%2===0;
    }
for(let i=0;i<arr.length;i++) {
    (isEven(arr[i]))?arrEven.push(arr[i]):arr[i];
}
   console.log(`Старый массив : ${arr}`);
    console.log(`==================================`);
    console.log(`Новый массив : ${arrEven}`);

})();

















function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}