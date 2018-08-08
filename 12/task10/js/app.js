(()=>{
    'use strict';
let btn=document.getElementById('btn');
btn.addEventListener('click',((event)=>{
if(!btn.classList.contains('disable')) {
        alert(this.innerHTML);
    }else
    console.log('button disabled');
}));
let dis=document.getElementById('dis');
dis.addEventListener('click',(()=>{
btn.classList.toggle('disable');
console.log('Button was disabled');
}));
})();