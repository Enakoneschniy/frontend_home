(() => {
    'use strict';
    let image = document.getElementById('image');
    let picture1 = "img/rtrtrt.jpg";
    let picture2 = "img/ocelot-01.jpg";
    image.addEventListener('mouseover', (() => {
        image.setAttribute('src', picture2);
    }));
    image.addEventListener('mouseout', (() => {
        image.setAttribute('src', picture1);
    }));
})();