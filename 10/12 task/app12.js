(() => {
    'use strict';
    let small = {
        price: 17,
        calories: 250
    };
    let big = {
        price: 25,
        calories: 340
    };
    let cheese = {
        price: 4,
        calories: 25
    };
    let salad = {
        price: 5,
        calories: 5
    };
    let ham = {
        price: 10,
        calories: 50
    };
    let sauce = {
        price: 5,
        calories: 0
    };
    let mayo = {
        price: 4,
        calories: 10
    };

    function Burger(size, filling, additive) {
        let hamburger = {
            price: 0,
            calories: 0
        };
        hamburger.price += size.price;
        hamburger.calories += size.calories;
        filling.forEach(function (item) {
            hamburger.price += item.price;
            hamburger.calories += item.calories;
        });
        if (additive !== undefined) {
            additive.forEach(function (item) {
                hamburger.price += item.price;
                hamburger.calories += item.calories;
            });
        }
        return hamburger;
    }

    console.log('Price and calories are: ');
    console.log(Burger(big, [ham, salad], [sauce, mayo]));

})();