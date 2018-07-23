;(() => {
    'use strict';

    let small = {
        price: 17,
        cal: 250
    };

    let big = {
        price: 25,
        cal: 340
    };

    let cheese = {
        price: 4,
        cal: 25
    };
    let salat = {
        price: 5,
        cal: 5
    };

    let ham = {
        price: 10,
        cal: 50
    };

    let sauce = {
        price: 10,
        cal: 50
    };

    let mayo = {
        price: 4,
        cal: 10
    };

    function getPrice(size, stuffing, additional) {
        let burger = {
            price: 0,
            cal: 0
        };

        burger.price += size.price;
        burger.cal += size.cal;


        stuffing.forEach(function (item) {

            burger.price += item.price;
            burger.cal += item.cal;
        });


        if (additional !== undefined){
            additional.forEach(function (item) {

                burger.price += item.price;
                burger.cal += item.cal;
            });
        }


        return burger;
    }

    console.log(getPrice(small, [salat, ham, cheese], [mayo,sauce]))

})();



