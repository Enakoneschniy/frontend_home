;(()=> {
    "use strict";

    function amount_of_elements()
    {
        while (true)
        {
            let a = parseFloat(prompt(' Введите количество элементов в массиве ', ''));
            if (!isNaN(a))
            {
                return a;
            } else
            {
                alert('Введено не число, попробуйте снова !');

            }
        }
    }
    function sum(amount_of_elements)
    {

        let s=amount_of_elements();
let amount=0;
let quantity=0;
        let arr=[];
        for(let i=0;i<s;i++){
            arr.push(i);
            amount+=arr[i];
            ++quantity;
            if(amount>10) {
                console.log(` с начала массива сложено ${quantity}`);
                break;
            }
        }

    }

    sum(amount_of_elements);

})();