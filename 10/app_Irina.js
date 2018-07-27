(() => {
    'use strict';

//Task 1
    function redP() {
        let par = document.getElementsByTagName('p');
        for (let i = 0; i < par.length; i++) {
            par[i].style.background = 'red';
        }
    }

    redP();

//Task 2
    function shadows() {
        let image = document.getElementsByTagName('img');
        for (let i = 0; i < image.length; i++) {
            image[i].style.boxShadow;
        }
    }

    shadows();

//Task 3
    function parNum() {
        let p = document.getElementsByTagName('p');
        for (let i = 0; i < p.length; i++) {
            let number = i + 1;
            p[i].innerHTML = number + '. ' + p[i].innerHTML;
        }
    }

    parNum();
//Task 4
    let count = 0;
    let button = document.getElementsByTagName('button');

    function tap() {
        for (let i = 0; i < button.length; i++) {
            button[i].addEventListener('click', () => {
                count++;
                console.log(count);
            });
        }
    }

    tap();

//Task 5
    function pow(x, a) {
        let p = Math.pow(x, a);
        alert(p);
    }

    pow(5, 2);

//Task 6
    function underline(str) {
        let tags = document.getElementsByTagName(str);
        for (let i = 0; i < tags.length; i++) {
            tags[i].style.textDecoration = 'underline';
        }
    }

    underline('p');

//Task 7
    function age(b) {
        if (b >= 16) {
            alert('Добро пожаловать');
        }
        else alert('Вы ещё молоды');
    }

    age(15);
//Task 8
//1 variant
    function age1(d1) {
        if (d1 >= 16) {
            alert('Добро пожаловать');
        }
        else alert('Вы ещё молоды');
        if (d1 === undefined) {
            alert('Введите возраст!');
        }
    }

    age1(18);

//2 variant
    function age2(d2) {
        d2 = d2 || alert('Введите возраст!');
        if (d2 >= 16) {
            alert('Добро пожаловать');
        }
        else if (d2 < 16) {
            alert('Вы ещё молоды');
        }
    }

    age2();
//Task 9
    let mas20 = [];
    let l = function length(mas20) {
        if (mas20 === undefined) {
            return alert('Error!');
        }
        else return alert(mas20.length);
    };
    console.log(l([1, 2, 3, 4, 5]));
//Task 10
    let f = parseInt(prompt('Введите число'));

    function whatNumb() {
        if (f > 10) {
            return alert(Math.pow(f, 2));
        }
        else if (f < 7) {
            alert('Число меньше 7');
        }
        if (f > 7 && f < 10) {
            return f - 1;
        }
    }

    whatNumb();
})();
