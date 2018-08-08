(()=>{
    'use strict';
let table=document.getElementById('tbl');
let count=0;
table.addEventListener('click',(()=> {
    if (count === 0) {
        table.classList.toggle('bordered');
        count++;
    }
    else if (count === 1) {
        table.classList.toggle('bordered');
        table.classList.toggle('striped');
        count++;
    }
    else if (count === 2) {
        table.classList.toggle('striped');
        table.classList.toggle('highlight');

    }
}));
//task8
    function check() {
        if(table.classList.contains('striped')){
            table.classList.toggle('striped');
        }
        if(table.classList.contains('highlight')){
            table.classList.toggle('highlight');
        }
        if(table.classList.contains('bordered')){
            table.classList.toggle('bordered');
        }
    }
    let border=document.getElementById('border');
    border.addEventListener('click',(()=>{
     check();
        table.classList.toggle('bordered');
    }));
    let strip=document.getElementById('strip');
    strip.addEventListener('click',(()=>{
      check();
        table.classList.toggle('striped');
    }));
    let high= document.getElementById('high');
    high.addEventListener('click',(()=>{
       check();
        table.classList.toggle('highlight');
}));
    //task9
    let op1=document.getElementById('op1');
    op1.addEventListener('click',(()=>{

        table.classList.toggle('bordered');
    }));
    let op2=document.getElementById('op2');
    op2.addEventListener('click',(()=>{

        table.classList.toggle('striped');
    }));
    let op3=document.getElementById('op3');
    op3.addEventListener('click',(()=>{

        table.classList.toggle('highlight');
    }));

})();