;(() => {
    'use strict';

    function underlineTag(tag){
        let elements = document.getElementsByTagName(tag);
        for (let i=0; i<elements.length;i++) {
            elements[i].style.textDecoration = "underline";;
        }
    }

    underlineTag('p');

})();



