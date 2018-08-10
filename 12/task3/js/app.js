(() => {
    'use strict';
    for (let i = 0; i < 300; i++) {
        let div = document.createElement('div');
        div.className = "red";
        div.style.margin = '5px';
        div.style.display = 'flex';
        document.getElementById("main").appendChild(div);
    }
    let elementsArray = document.getElementsByClassName("red");

    for (let i = 0; i < elementsArray.length; i++) {
        elementsArray[i].addEventListener("mouseover", function (event) {
            elementsArray[i].classList.toggle('active');
        });
        elementsArray[i].addEventListener("mouseleave", function (event) {
            elementsArray[i].classList.toggle('active');
        });
    }
})();