(() => {
    'use strict';
    let picture = document.getElementById('image');
    let header = document.getElementById('header');
    picture.addEventListener('click', () => {
        header.classList.add('shadow');
        picture.style.height = '450px';
        picture.style.width = '650px';
    });
})();