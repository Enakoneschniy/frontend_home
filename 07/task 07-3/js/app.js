//days of the week
"use strict";

function days() {
    while (true) {
        let day = parseFloat(prompt('Введите день недели ', ''));
        if (!isNaN(day)) {
            if(day<=7) {
                return day;
            }else alert('Такого дня нет, попробуйте ещё раз !');
        }  else alert('Не коректно введени данные, попробуйте ещё раз !');

    }
}
let dayWeek=days();
if(dayWeek===1)alert("Понедельник")
else if(dayWeek===2)alert("Вторник")
else if(dayWeek===3)alert("Среда")
else if(dayWeek===4)alert("Четверг")
else if(dayWeek===5)alert("Пятница")
else if(dayWeek===6)alert("Суббота")
else alert("Воскресенье");
