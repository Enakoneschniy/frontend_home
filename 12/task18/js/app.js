//HOMEWORK

'use strict';
function myFunction(e) {

    document.querySelector("#main").style.backgroundColor = "grey";
    document.querySelector("#main").style.opacity = "0.1";

    let img = document.createElement("img");
    img.src = "./img/2.png";

    document.querySelector("body").appendChild(img);

    img.setAttribute("id", "pic")
    document.getElementById("pic").classList.add("opened")
}
