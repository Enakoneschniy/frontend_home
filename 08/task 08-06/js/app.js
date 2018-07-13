"use strict";
function experience()
{
    while (true)
    {
        let a = parseFloat(prompt('Введите Ваш стаж работы', ''));
        if (!isNaN(a))
        {
            return a;
        } else
        {
            alert('Введено не число, попробуйте снова !');

        }
    }
}
let percent=experience();

if(percent>=0&&percent<3)alert(`Надбавка 0%`);
else if(percent>=3&&percent<10)alert(`Надбавка 10%`);
else if(percent>=10&&percent<20)alert(`Надбавка 20%`);
else if(percent>=20)alert(`Надбавка 25%`);
else if(percent<0)alert(`О надбавке рано думать`);