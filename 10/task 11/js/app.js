;(() => {
    'use strict';


    let a = Math.floor(Math.random() * 9) + 1;
    console.log('занадано ' + a);
    let input = document.querySelector('.input');

    let count = 0;

    input.addEventListener('keyup', (event) => {
        if (count<3){
        if (a > +event.key) {
            console.log('more');
        }
        else if (a < +event.key) {
            console.log('less');
        }
        else if (a === +event.key) {
            console.log('good');
        }

        count++;}
        else {
            alert("поздно");
        }
    });


})();




