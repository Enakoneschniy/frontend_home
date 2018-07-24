//HOMEWORK

'use strict';

let elem = document.getElementById("tab");

let count;

let radios = document.forms["form"].elements["group1"];
for(let i = 0, max = radios.length; i < max; i++) {
    radios[i].addEventListener("click", function (event){
        count = +event.target.value;
        if (count === 0) {
            elem.classList.remove("striped");
            elem.classList.remove("bordered");
            elem.classList.add("centered");
            count++
        }
        else if (count === 1) {
            elem.classList.remove("bordered");
            elem.classList.remove("centered");
            elem.classList.add("striped");
            count++
        }
        else if (count === 2) {
            elem.classList.remove("centered");
            elem.classList.remove("striped");
            elem.classList.add("bordered");
            count = 0
        }

    });
}






