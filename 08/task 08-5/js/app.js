"use strict";
function year()
{
    while (true)
    {
        let a = parseFloat(prompt('Введите год Вашего рождения', ''));
        if (!isNaN(a))
        {
            return a;
        } else
            {
            alert('Введено не год, попробуйте снова !');

        }
    }
}

let age=year();
let result= 2018-age;

    if(result>=16){
    alert(`Добро пожаловать`);
    }else alert(`Вход воспрещен`);