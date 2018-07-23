;(() => {
    'use strict';

function addNumeration () {
    let paragraphs = document.getElementsByTagName('p');
    for (let i=0; i<paragraphs.length;i++) {
        paragraphs[i].innerText = i+1 + ") " + paragraphs[i].innerText;
    }
    
}
    addNumeration();


})();



