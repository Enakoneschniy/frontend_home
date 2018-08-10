(()=>{
    'use strict';
let image = document.getElementById('image');
let opacity = 1;
image.addEventListener('mousemove', ()=>{
    opacity -= 0.2;
    image.style.opacity = `${opacity}`;
});
})();