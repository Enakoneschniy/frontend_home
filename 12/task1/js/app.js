(() => {
    'use strict';

    let block = document.getElementById('area');
    block.addEventListener('mousemove', ((e) => {
        let x = e.clientX;
        let y = e.clientY;
        document.getElementById("demo").innerText = "Coordinates: (" + x + "," + y + ")";

    }));

    block.addEventListener('mouseout', (() => {
        document.getElementById('demo').innerHTML = '';
    }));
})();