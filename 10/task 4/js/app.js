;(() => {
    'use strict';
    let count = 0;
    let label = document.getElementById('count');
    let buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        count++;
        label.innerText = count;
    });}



})();



