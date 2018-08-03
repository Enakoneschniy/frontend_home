(() => {
    'use strict';
    //task 6
    let phone = {
        model: 'Nokia',
        price: 100
    };
    let isEmpty = function (obj) {
        for (let el in obj) {
            return false;
        }
        return true;
    };
    console.log(isEmpty(phone));

    //task 7
    const salaries = {
        "Masha": 500,
        "Lesha": 1000,
        "Ira": 1500
    };
    let sum = 0;
    for (let name in salaries) {
        sum += salaries[name];
    }
    console.log(sum);

    //task 8
    let maxSalary = 0;
    let name = "";
    for (let key in salaries) {
        if (maxSalary < salaries[key]) {
            maxSalary = salaries[key];
            name = key;
        }

    }
    console.log(name || ' Нет сотрудников');

    //task 9

    const box = {
        name: 'Box',
        width: 20,
        height: 80
    };

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n)
    }

    function multiplyNumeric(obj) {
        for (let element in obj) {
            if (isNumeric(obj[element])) {
                obj[element] *= 2;
            }
        }
    }

    multiplyNumeric(box);
    console.log(box);
})();