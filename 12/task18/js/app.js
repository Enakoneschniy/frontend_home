(()=>{
    'use strict';
    let image=document.getElementById('image');
    let pic=document.getElementById('pic');
    image.addEventListener('click',(()=> {

     pic.classList.toggle('open');
     image.classList.toggle('active');

    }));

})();