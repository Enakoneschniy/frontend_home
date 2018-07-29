;(() => {
    `use strict`

    function color() {


        for (let i = 10; i > 0; i--) {
            let paragraf = document.createElement("p");
            paragraf.innerText = `Paragraf ${i}`;
            paragraf.style.background = 'red';
            document.body.insertBefore(paragraf, document.body.firstChild);
        }
    }

    color();
})();