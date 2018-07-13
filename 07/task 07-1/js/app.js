//The system of equations
"use strict";
let a,b,x;
function value_a() {
    while (true) {
       let a1 = parseFloat(prompt('enter value A', ''));
        if (!isNaN(a1)) {
          return a1;
        } else {
            alert('not a digit, try again !');

        }

    }
}
function value_b() {
    while (true) {
        let b1 = parseFloat(prompt('enter value A', ''));
        if (!isNaN(b1)) {
            return b1;
        } else {
            alert('not a digit, try again !');

        }

    }
}
a=value_a();
b=value_b();
if(a>b){
    x=(a+b)/(2*4);
}else if(a===b){
    x=400;
}else {
    x=((a-b)+2)/(b*4);
}
alert(`Значение x = ${x}`);