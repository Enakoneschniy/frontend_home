(()=>{
  'use strict';
let image=document.getElementById('image');
let img1="../завантаження (1).jpg";
image.addEventListener('click',(()=>{
    image.src=img1;
}));
    image.addEventListener('mouseout',(()=>{
        image.src="завантаження.jpg";
    }));
})();