(() => {
    `use strict`;

    function isEmpty(obj) {

        for (let key in obj) {

            return false;
        }
        return true;
    }

    let emptyObj = {
        //  name:1
    };
    alert(isEmpty(emptyObj));
})();