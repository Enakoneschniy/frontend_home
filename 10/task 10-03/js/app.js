;(() => {
    'use strict';

    function paragraph() {
        for (let i = 1; i < 4; i++) {
            let paragraf = document.createElement("p");
            paragraf.innerText = `${i}: text "${i}"`;
            document.body.appendChild(paragraf);
            let img = document.createElement("img");
            img.src=`img/images${i}.png`;
            document.body.appendChild(img);
        }
        let image=document.getElementsByTagName("img");
         for(let i=0;i<image.length;i++){
             image[i].classList.add('boxShadow');
         }

    }
        paragraph();


    })();

