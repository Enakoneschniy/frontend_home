;(() => {
    `use strict`;

    function compare() {

        while (true) {
            let value = parseFloat(prompt("Введите число", ""));
            if (isNaN(value)) {
                alert(`Введено не число, попробуйте снова !`);
            } else {
                if (value > 10) {
                    return alert(Math.pow(value, 2));
                } else if (value < 7) {
                    return alert(`Число меньше 7`);
                } else {
                    if (value === 7 || value === 8 || value === 9 || value === 10) {
                        return alert(`Число : ${value}`);
                    }
                }

            }
        }


    }
    compare();
})();