(()=>{
    'use strict';
let div = document.getElementById('main');
div.addEventListener('click', ()=>{
   alert(event.which);
   if (event.which === 1){
       console.log('Левая кнопка мыши');
   }
   else {
       console.log('Правая кнопка мыши');
   }
});
})();