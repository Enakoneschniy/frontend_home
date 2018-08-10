(() => {
    'use strict';
    let btn = document.getElementById('button1');
    function handler() {
        alert(btn.innerHTML);
    }
    btn.addEventListener('click', handler);
    let reset = document.getElementById('button2');
    reset.removeEventListener('click', handler);
})();