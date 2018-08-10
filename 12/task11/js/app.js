(() => {
    'use strict';
    let elem = document.getElementsByClassName('element');
    for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener('click', () => {
       console.log(typeof event.target);
    });
    }
})();