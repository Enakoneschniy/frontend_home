(() => {
    'use strict';
    let image = document.getElementById('trigger');
    let count = 0;
    image.addEventListener('click', () => {
        if (count === 0) {
            image.classList.toggle('second');
            console.log('1');
            count++;
        }
        else if (count === 1) {
            image.classList.toggle('third');
            console.log('2');
            count++;
        }
        else if (count === 2) {
            image.classList.toggle('second');
            image.classList.toggle('third');
            console.log('0');
            count = 0;
        }
    });
})();