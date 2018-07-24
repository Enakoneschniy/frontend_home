//HOMEWORK

'use strict';

let elem = document.querySelector("#bnt");

let checkbox = document.querySelector("input[type]");

checkbox.addEventListener("click", function (event) {

      if (!this.checked) {
        elem.classList.add("clickable");
    } else {
        elem.classList.remove("clickable");
    }
});


elem.addEventListener("click", function (event) {
    if (elem.classList.contains("clickable")){
        alert(this.innerHTML);
    }
});
















