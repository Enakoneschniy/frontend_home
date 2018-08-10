(() => {
    'use strict';
    let div = document.getElementById('image');
    div.addEventListener('mouseover', () => {
        div.style.width = '140%';
    });
    div.addEventListener('mouseout', () => {
        div.style.width = '100%';
    });
})();