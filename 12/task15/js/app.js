//HOMEWORK

'use strict';

let elem = document.getElementById("main");
let size = 100;
let opacity = 1;

elem.addEventListener("mousemove", function (event) {
    opacity -= 0.05;
    elem.style.opacity = `${opacity}`;

});
















