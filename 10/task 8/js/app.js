;(() => {
    'use strict';

    let ageVerif = (age) => {

            if (age === undefined) alert("ведите возраст");
            else {
                alert(age > 16 ? "добро пожаловать" : "вы еще молоды");

            }
    };

    let ageVerif2 = (value) => {
        let age = value || alert("ведите возраст");
        if (age) alert(value > 16 ? "добро пожаловать" : "вы еще молоды");
   };

    ageVerif2();

})();



