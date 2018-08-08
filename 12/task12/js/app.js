(()=>{
    'use strict';
    document.getElementById('main').onmouseover = document.getElementById('main').onmouseout = handler;
    function handler(event) {
    console.log(event.relatedTarget);


    }

})();