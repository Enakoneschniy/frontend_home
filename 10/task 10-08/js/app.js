;(() => {
    "use strict";

    function ageUser1(age) {

        if (age === undefined) {
            alert(`Введите возраст`);
        } else if (age > 16) {
            alert(`Добро пожаловать`);
        } else alert(`Bы еще молоды`);
    }

   ageUser1();

    function ageUser2(age) {
        let ageuser = age || alert(`Введите возраст`);
        if (age > 16) {
            alert(`Добро пожаловать`);
        }
        if(ageuser<=16)alert(`Bы еще молоды`);
    }

    ageUser2();
})();