(() => {
    'use strict';
    let array = [];
    let foo = function inArray(target, array) {
        for (let i = 0; i < array.length; i++) {
          if(array[i] === target){
              console.log('This stroke is in the array');
              return true;
          }
        }
       console.log('This stroke is not in the array');
        return false;
    };
console.log(foo('Ira', [1,2,'Ira', true]));
})();