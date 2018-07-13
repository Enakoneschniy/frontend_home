'use strict';
let x = prompt('номер квартиры');
if (x <= 0 || x >90) alert('нет такоей квартиры');
else if (x >0 && x < 20)alert('первый подьезд');
else if (x >= 20 && x <= 48)alert('второй подьезд');
else alert('3 подьезд');