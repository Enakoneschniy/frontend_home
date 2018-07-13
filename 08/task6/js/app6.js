'use strict';
let experience = prompt('сколько лет стажа');
    if ( experience < 0) alert( 'error');
        else if ( experience >= 0 && experience  < 3 ) alert('НАДБАВКА К ВАШЕЙ ЗАРПЛАТЕ 0%');
        else if ( experience >= 3 && experience < 10) alert('НАДБАВКА К ВАШЕЙ ЗАРПЛАТЕ 10%');
        else if ( experience >= 10 && experience < 20) alert ('НАДБАВКА К ВАШЕЙ ЗАРПЛАТЕ 20%');
        else if ( experience >= 20 )alert('НАДБАВКА К ВАШЕЙ ЗАРПЛАТЕ 25%');