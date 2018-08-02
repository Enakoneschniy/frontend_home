(() => {
    `use strict`;
    let str = 'var_text_hello';

    function camelize(str) {
        let arr = str.split("_");
        for (let i = 1; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        return arr.join('');
    }
    alert(camelize(str));
})();