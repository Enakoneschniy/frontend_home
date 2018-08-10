(()=>{
    'use strict';
function mouse(event) {
    alert(event.relatedTarget);
}
document.body.onmouseover = document.body.onmouseout = mouse;
})();