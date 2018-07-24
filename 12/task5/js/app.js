//HOMEWORK

'use strict';

let elem = document.getElementById("main");
let margin =0;

elem.addEventListener("click", function (event) {
    margin +=100
    elem.style.marginTop = margin +"px";
});



