;(() => {
    `use strict`

   function shadow() {
        let image=document.getElementsByTagName("img");
       for(let i=0;i<image.length;i++){
           image[i].classList.add('boxShadow');
       }
   }


    shadow();
})();