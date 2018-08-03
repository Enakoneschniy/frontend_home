(()=>{
    'use strict';
    let str = 'var_text_hello';
    str = str.split('_').join('');
    str = str.split('h').join('H');
    alert(str.substr(0,3) + str[3].toUpperCase() + str.substr(4));
})();