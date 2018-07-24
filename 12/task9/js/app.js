//HOMEWORK

'use strict';

let elem = document.getElementById("tab");


let checkboxes = document.forms["form"].elements["checkbox"];
for(let i = 0, max = checkboxes.length; i < max; i++) {
    checkboxes[i].addEventListener("click", function (event){
        console.log(event)
    let style = event.target.value;
        if(this.checked) {
            elem.classList.add(style);
        } else {
            elem.classList.remove(style);
        }
});
}











