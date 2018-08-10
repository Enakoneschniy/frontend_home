(()=>{
    'use strict';
let table = document.getElementById('foo');
/*
//task 7
let count = 0;
table.addEventListener('click', () => {
    if(count === 0) {
        console.log('Works 1');
        table.classList.add("bordered");
        count++;
    }
    else if (count === 1){
        console.log('Works 2');
        table.classList.remove("bordered");
        table.classList.add("striped");
        count++;
    }
    else if (count === 2){
        console.log('Works 3');
        table.classList.remove("striped");
        table.classList.add("highlight");
        count = 0;
    }
});*/
    let bord = document.getElementById('1');
    let str = document.getElementById('2');
    let high = document.getElementById('3');
    bord.addEventListener('click', ()=>{
        table.classList.add("bordered");
    });
    str.addEventListener('click', ()=>{
        table.classList.remove("bordered");
        table.classList.add("striped");
    });
    high.addEventListener('click', ()=>{
        table.classList.remove("striped");
        table.classList.add("highlight");
    });
})();