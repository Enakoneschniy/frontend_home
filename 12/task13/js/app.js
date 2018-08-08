(()=>{
    'use strict';
    let main=document.getElementById('main');
    main.addEventListener('mousedown',((event)=>{
        console.log(event.which);
    }));
})();