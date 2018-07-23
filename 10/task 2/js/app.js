;(() => {
    'use strict';

function addShadow() {
    let images = document.getElementsByTagName('img');
    for (let i=0; i<images.length;i++) {
        images[i].classList.add('shadow');
    }
    
}
    addShadow();


})();



