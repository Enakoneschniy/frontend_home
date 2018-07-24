//HOMEWORK

'use strict';

let elems = document.getElementsByClassName("elem");


for (let i = 0; i<elems.length; i++) {
    elems[i].addEventListener("click", function (event) {
        console.log(this.localName);
    });
}















