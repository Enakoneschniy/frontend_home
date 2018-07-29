;(() => {
    `use strict`;

    function guessNumber(number_X) {
        let count = 0;
        alert(`Угадайте число, у Вас три попытки. Поехали !:-)`)
        while (true) {
            let value =parseFloat(prompt("Введите число", ""));
            count++;
            if (count > 2) {
                return alert(`Вы использовали три попытки, попробуйте удачу в следующий раз!`);
            }
            if (isNaN(value)) {
                alert(`Введено не число, попробуйте снова !`);
            }
            if (!isNaN(value)) {
                if (value === number_X) {
                    return alert(`Поздравляем, Вы угадали !`);
                } else if(count===2){
                    alert(`Не угадали, у Вас еще ${3 - count} попытка`)
                }else if(count===1){
                    alert(`Не угадали, у Вас еще ${3 - count} попытки`)
                }

            }


        }


    }

    let number_X =Math.floor(Math.random() * 11);
    console.log(number_X);
    guessNumber(number_X);
})();