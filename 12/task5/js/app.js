(() => {
    'use strict';

    let div = document.getElementById('main');
    let margin = 0;
    div.addEventListener('click', (() => {
        margin += 100;
        div.style.marginTop = margin + 'px';

    }));
})();