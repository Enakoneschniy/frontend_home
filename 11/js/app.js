//HOMEWORK
;(() => {
    'use strict';

/////TASK 1

    let test = "ds dsfd hgfdh hdfh ghhfdh hdfhd";

    let arr = test.split(' ');
    test = "";
    for (let i = 0; i < arr.length; i++) {
        test += arr[i].charAt(0).toUpperCase() + arr[i].slice(1) + " ";
    }
    console.log(test);


////////TASK2

    let t2string = "var_text_hello";

    let arr2 = t2string.split('_');
    t2string = "";
    for (let i = 0; i < arr2.length; i++) {
        if (i === 0) {
            t2string += arr2[i];
        }
        else {
            t2string += arr2[i].charAt(0).toUpperCase() + arr2[i].slice(1);
        }

    }
    console.log(t2string);

////////TASK3


    function inArray(text, array) {
        let result;
        array.forEach(function (item) {
          return result = item === text;
        });
        return result;
    }

    console.log(inArray("aa", ["vv", "aa"]));

    /////////////TASK4

    let str4 = '123456';
    let str4res = "";
    for (let i = 0; i < str4.length; i += 2) {
        str4res += str4[i + 1] + str4[i];
    }

    console.log(str4res);

/////////////TASK5

    let user = {};

    user.name = 'Vasya';
    user.surname = "Petrov";
    user.name = 'Serg';
    delete user.name;

    console.log(user);

///////////TASK6
    function isEmpty(obj){
        return !Object.keys(obj).length>0;
    }

    console.log(isEmpty(user));

///////TASK7

    const salaries = {
        "Вася": 100,
        "Петя": 300,
        "Даша": 250
    };

    let sum=0;
    for (let key in salaries){
        sum +=salaries[key];
    }

    console.log ('sum salary ' + sum);

///////TASK8


    function getMaximumSal(obj){
        if (isEmpty(obj)) return "no ees";
        let max = 0;
        let best;
        for (let key in obj){
            if (obj[key]> max)
            {max = obj[key] ;
            best = key;}
        }
        return best;
    }

    console.log(getMaximumSal(salaries));

///////TASK9

    const menu = {
        width: 200,
        height: 300,
        title: "My menu"
    };

    function multiplyNumeric (obj) {
        for (let key in obj){
            if(isNumeric(obj[key])){
                obj[key] *=2;
            }
        }
    }
    multiplyNumeric(menu);
    console.log(menu);
    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n)
    }


})();

