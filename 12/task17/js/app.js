//HOMEWORK

'use strict';
function myFunction(e) {
    console.log(e);
    e.target.className = "opened";
     e.target.style.backgroundSize = "140%";
}

function myFunction1(e) {
    e.target.className = "closed";
    e.target.style.backgroundSize = "100%";
}

