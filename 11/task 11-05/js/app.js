(()=>{
    'use strict';
    let user={
        name:`Вася`,
        surname:`Петров`,
    };
    user.name=`Сергей`;
    console.log( user.name);
    delete  user.name;
    console.log( user.name);
})();

