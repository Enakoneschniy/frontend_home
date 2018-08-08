(() => {
    'use strict';
    let image=document.getElementsByClassName('image');
    for (let i = 0; i<image.length; i++)
    {
        image[i].addEventListener("click", function( event ) {

            document.getElementById("main").style.backgroundImage = `url('${event.srcElement.currentSrc}')`;
            document.getElementById("main").classList.toggle('active');

        });
    }


})();