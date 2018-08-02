;(() => {
    `use strict`;
    const menu = {
        width: 200,
        height: 300,
        title: "My menu",
        toString: function () {
            return "width :" + this.width + " " + " height :" + this.height;

        }
    };

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function multiplyNumeric(obj) {
        for (let key in obj) {
            if (isNumeric(obj[key])) {
                obj[key] *= 2;
            }
        }

    }

    multiplyNumeric(menu);
    alert(menu);
})();