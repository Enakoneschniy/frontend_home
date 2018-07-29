;(() => {
    `use strict`;
    let count = 0;

    let elem = document.getElementById('elem');
    let elem2 = document.getElementById('elem2');
    let elem3 = document.getElementById('elem3');
    let p = document.getElementById('p');

    elem.addEventListener('click', () => {
        count++;
        p.innerText = count;
    });

    elem2.addEventListener('click',()=>{
        count++;
        p.innerText = count;
    });
    elem3.addEventListener('click',()=>{
        count=0;
        p.innerText = count;
    });
})();