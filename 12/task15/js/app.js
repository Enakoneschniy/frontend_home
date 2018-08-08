(()=>{
    'use strict';
    let main=document.getElementById('main');
    let opac=1;
    main.addEventListener('mousemove',(()=>{
        opac-=0.1 ;
        main.style.opacity=`${opac}`;
    }));

})();