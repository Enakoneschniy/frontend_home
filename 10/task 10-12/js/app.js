;(() => {
    `use strict`;
    alert(`"Меню"
1. Маленький гамбургер (17 грн, 250 ккал)
2. Большой гамбургер (25 грн, 340 ккал)

Вы также можете дополнить свой гамбургер начинками, список ниже:
3. Сыр (4 грн, 25 ккал);
4. Салат (5 грн, 5 ккал);
5 Ветчина (10 грн, 50 ккал);
6. Соус (5 грн, 0 ккал);
7. Майонез (4 грн, 10 ккал);
`);

    let hamburger = 0;
    let hamburgerBig = 0;
    let calories = 0;
    let cheese = 0;
    let salad = 0;
    let ham = 0;
    let sauce = 0;
    let mayonnaise = 0;

    function McDonalds() {
        while (true) {
            let value = parseFloat(prompt("Введите один из пунктов меню от 1 до 7", ""));
            if (isNaN(value)) {
                alert(`Введено не число, попробуйте снова !`);
            }
            if (!isNaN(value)) {
                if (value === 1) {
                    hamburger += 17;
                    calories += 250;
                }
                else if (value === 2) {
                    hamburgerBig += 25;
                    calories += 340
                }
                else if (value == 3) {
                    cheese += 4;
                    calories += 25;
                }
                else if (value === 4) {
                    salad += 5;
                    calories += 5
                }
                else if (value === 5) {
                    ham += 10;
                    calories += 50;
                }
                else if (value === 6) {
                    sauce += 5;
                    calories += 0;
                }
                else if (value === 7) {
                    mayonnaise += 4;
                    calories += 10;
                }

            }
            let value2;
           do {
               value2 = parseFloat(prompt("Продолжить заказ - 10, закончить выбор - 0"));
                if (isNaN(value2)) alert(`Введено не число, попробуйте снова !`);

            }while (isNaN(value2));
            if (value2 === 0) {
                return alert(`Ваш заказ составил : ${hamburger + hamburgerBig + cheese + salad + ham + sauce + mayonnaise} грн
               Количество ккалорий составляет: ${calories}`);
            }
        }
    }


McDonalds();

})();