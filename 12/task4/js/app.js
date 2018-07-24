//HOMEWORK

'use strict';

let elementsArray =  document.getElementsByClassName("im");

for (let i = 0; i<elementsArray.length; i++)
{
    elementsArray[i].addEventListener("click", function( event ) {

        document.getElementById("main").style.backgroundImage = `url('${event.srcElement.currentSrc}')`;
        document.getElementById("main").style.backgroundSize = "contain";

    });
};


