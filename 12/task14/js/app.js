(() => {
    'use strict';
    let image = document.getElementById('1');
    let op = 1;
    let size = 50;
    image.addEventListener('click', () => {
        size += 75;
        op -= 0.1;
        image.style.backgroundSize = `${size}px`;
        image.style.opacity = `${op}`;
    });
})();