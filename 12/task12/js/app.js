//HOMEWORK

'use strict';

// let elem = document.getElementById("main");
//
// let elems = document.getElementsByClassName("small");
//
//
// for (let i = 0; i<elems.length; i++) {
//     elems[i].addEventListener("mousemove", function (event) {
//         console.log(event);
//     });
// }
//
document.body.onmouseover = document.body.onmouseout = handler;

function handler(event) {

 console.log(event.relatedTarget)
}














