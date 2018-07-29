;(() => {
    'use strict';

    function addTag() {
        for (let i = 1; i < 21; i++) {
            let p = document.createElement("p");
            p.innerText = `${i}: text "${i}"`;
            document.body.appendChild(p);

        }
    }
    function underlineTeg(teg) {
        let tegs=document.getElementsByTagName(teg);
        for(let i=0;i<tegs.length;i++){
            tegs[i].style.textDecoration=`underline`;
        }

    }
    addTag();
    underlineTeg('p');


})();

