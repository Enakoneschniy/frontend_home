(() => {
    'use strict';
    let str = '123456';
    let array = str.split('');
    array.splice(0, 6, '2', '1', '4', '3', '6', '5');
    str = array.join('');
    console.log(str);
})();