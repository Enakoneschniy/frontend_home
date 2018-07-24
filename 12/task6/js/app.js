//HOMEWORK

'use strict';

let elem = document.getElementById("main");

let count = 0;

elem.addEventListener("click", function (event) {
    console.log(count);
    if (count === 0) {
        elem.classList.remove("first");
        elem.classList.add("second");
        count++
    }
    else if (count === 1) {
        elem.classList.remove("second");
        elem.classList.add("third");
        count++
    }
    else if (count === 2) {
        elem.classList.remove("third");
        elem.classList.add("first");
        count = 0
    }

});




