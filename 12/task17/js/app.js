(()=>{
    'use strict';
let flow=document.getElementById('flow');
flow.addEventListener('mouseover',((event)=>{

flow.style.width='140%';
flow.style.transition='2s';


}));
    flow.addEventListener('mouseout',((event)=>{

        flow.style.width='300px';
        flow.style.transition='2s';


    }));

})();