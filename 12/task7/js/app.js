//HOMEWORK

'use strict';

let elem = document.getElementById("tab");

let count = 0;

elem.addEventListener("click", function (event) {
    console.log(count);
    if (count === 0) {
        elem.classList.remove("striped");
        elem.classList.remove("highlight");
        elem.classList.add("centered");
        count++
    }
    else if (count === 1) {
        elem.classList.remove("highlight");
        elem.classList.remove("centered");
        elem.classList.add("striped");
        count++
    }
    else if (count === 2) {
        elem.classList.remove("centered");
        elem.classList.remove("striped");
        elem.classList.add("highlight");
        count = 0
    }

});




