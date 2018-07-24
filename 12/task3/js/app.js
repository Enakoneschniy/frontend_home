//HOMEWORK

'use strict';

for (let i = 0; i<300; i++){
    let div = document.createElement("div");
    div.className="red";
    div.style.width = "30px";
    div.style.height = "30px";
    div.style.background = "red";
    div.style.margin = "5px";
    document.getElementById("main").appendChild(div);
}

let elementsArray =  document.getElementsByClassName("red");

for (let i = 0; i<elementsArray.length; i++)
{
    elementsArray[i].addEventListener("mouseover", function( event ) {
        elementsArray[i].style.transition = "2s";
        elementsArray[i].style.borderRadius = "50%";
    });
};



