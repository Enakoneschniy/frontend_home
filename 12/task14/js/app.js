//HOMEWORK

'use strict';

let elem = document.getElementById("main");
let size = 100;
let opacity = 1;

elem.addEventListener("click", function (event) {
    console.log(event);
    size += 100;
    elem.style.backgroundSize = `${size}px`;
    opacity -= 0.1;
    elem.style.opacity = `${opacity}`;

});
















