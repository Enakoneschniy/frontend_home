(()=>{
    'use strict';
let main=document.getElementById('main');
let opac=1;
main.addEventListener('click',(()=>{
    opac-=0.1 ;
    main.style.opacity=`${opac}`;
}));
})();