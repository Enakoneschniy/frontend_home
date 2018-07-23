;(() => {
    'use strict';

    let array = [1,2,3,4,56,6];

    let length = (array) => {
        if (array=== undefined)  return 'error';
        else  return array.length;
    };

    console.log(length())
})();



