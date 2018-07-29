;(() => {
    "use strict";

    function ageUser(age) {

        if (age > 16) {
            return alert(`Добро пожаловать`);
        } else return alert(`Bы еще молоды`);
    }
    ageUser(16);
})();