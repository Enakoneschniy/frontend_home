;(()=> {
    "use strict";

    function question1()
    {

            let value = prompt('Введите значение для заполнения', '');

                return value;

    }
    function question2()
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
    function arrayFill(question1,question2)
    {

        let q1=question1();
        let q2=question2();
        let arr=[];
        for(let i=0;i<q2;i++){
        arr.push(q1);
    }
        console.log(arr);
    }

    arrayFill(question1,question2);

})();