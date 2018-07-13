"use strict";

function loginParol()
{
    while (true)
    {
        let login = prompt('Введите логин ', '');
        if (isNaN(login))
        {
            if (login === `ivan`)
            {
                let pasword = parseFloat(prompt('Введите пароль', ''));
                    if (!isNaN(pasword)) {
                        if (pasword === 334455) {
                            return alert(' «Добро пожаловать»');
                        }else return alert (`«Ошибка входа» `);
                    }else return alert (`«Ошибка входа» `);

            } else if(login === `alex`)
            {
                let pasword = parseFloat(prompt('Введите пароль', ''));
                if (!isNaN(pasword)) {
                    if (pasword === 777) {
                        return alert(' «Добро пожаловать»');
                    }else return alert (`«Ошибка входа» `);
                }else return alert (`«Ошибка входа» `);
            } else if(login === `petr`)
            {
                let pasword = (prompt('Введите пароль', ''));
                if (isNaN(pasword)) {
                    if (pasword === "b5678") {
                        return alert(' «Добро пожаловать»');
                    }else return alert (`«Ошибка входа» `);
                }else return alert (`«Ошибка входа» `);
            }

        } else alert(`Введено число, повторите ввод логина !`)
    }
}
loginParol();