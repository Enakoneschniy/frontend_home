//coordinates
/// 07-02-01//////////////////////////////////////////////////////
"use strict";
function coordinatesX1() {
    while (true) {
        let x1 = parseFloat(prompt('enter coordinates X1 ', ''));
        if (!isNaN(x1)) {
            return x1 ;
        } else {
            alert('not a digit, try again !');

        }

    }
}
function coordinateY1() {
    while (true) {
        let y1 = parseFloat(prompt('enter coordinates Y1 ', ''));
        if (!isNaN(y1)) {
            return y1;
        } else {
            alert('not a digit, try again !');

        }

    }
}
let x = coordinatesX1();
let y = coordinateY1();

function figure1(x,y) {
    if (   y > 0 && x + 4 - y > 0  && 4 - x - y > 0) {
        alert( "Точка попадает в область");
    }
    else {
        alert( "Точка НЕ попадает в область");
    }
}
figure1(x,y);
//////////////////07-02-02////////////////////////////////////////////

 x = coordinatesX1();
 y = coordinateY1();

function figure2(x,y) {
    if (y > 0) {
        if ((-x - y) < 0 && y < 1 && y > x) {
           alert( "Точка попадает в область");
        }
        else {
            alert( "Точка НЕ попадает в область");
        }
    }
    else if (y < 0) {
        if ((-x - y) > 0 && y > -1 && y < x) {
            alert( "Точка попадает в область");
        }
        else {
            alert( "Точка НЕ попадает в область");
        }
    }
}
figure2(x,y);
////////////////07-02-03/////////////////////////////////////////
x = coordinatesX1();
y = coordinateY1();

function figure3(x,y) {
    if (y > 0) {
        if ((-x - y) < 0 && y < 1 && y > x) {
            alert( "Точка попадает в область");
        }
        else {
            alert( "Точка НЕ попадает в область");
        }
    }
    else if (y < 0) {
        if ((Math.pow(x, 2) + Math.pow(y, 2) < 1) || (x < 0 && y < 0 && -2 - x - y < 0)) {
            alert( "Точка попадает в область");
        }
        else {
            alert( "Точка НЕ попадает в область");
        }
    }
}
figure3(x,y);