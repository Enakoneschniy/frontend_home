(() => {
    'use strict';

    let user = {
        name: 'Вася'
    };
    user.surname = 'Петров';
    user.name = 'Сергей';
    console.log(user);
    delete user.name;
    console.log(user);

})();