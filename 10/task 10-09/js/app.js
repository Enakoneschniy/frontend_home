;(()=>{
    `use strict`;
    function arrLength(arr) {
        if(arr===undefined){
            alert(`Error: Массив не задан !`);
        }else alert (arr.length);

    }
    let array=[];
    for(let i=0;i<100;i++){
        array.push(i);
    }
    arrLength(array);
})();