(() => {
    'use strict';
    let table = document.getElementById('foo');
    let checkbox1 = document.getElementById('option1');
    let checkbox2 = document.getElementById('option2');
    let checkbox3 = document.getElementById('option3');
    checkbox1.addEventListener('change', ()=>{
        if (checkbox1.checked) {
            table.classList.add('bordered');
        }
    });
    checkbox2.addEventListener('change', ()=>{
        if (checkbox2.checked) {
            table.classList.add('striped');
        }
    });
    checkbox3.addEventListener('change', ()=>{
        if (checkbox3.checked) {
            table.classList.add('highlight');
        }
    });
})();