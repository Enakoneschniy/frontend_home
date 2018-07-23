;(() => {
    'use strict';

function changePToRed() {
    let paragraphs = document.getElementsByClassName('paragraph');
    for (let i=0; i<paragraphs.length;i++) {
        paragraphs[i].classList.add('red');
    }

}
    changePToRed();


})();



