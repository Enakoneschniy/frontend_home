(()=>{
    'use strict';
    let main=document.getElementById('main');
    main.addEventListener('click',((event)=>{
        let target=event.target;
        console.log(target.tagName);
    }));
})();