;(() => {
    'use strict';

    let body = document.getElementsByTagName('body')[0];
    let tbl = document.createElement('table');

    tbl.setAttribute('border', '1');
    let tbdy = document.createElement('tbody');

    for (let i = 1; i <= 10; i++) {
        let tr = document.createElement('tr');
        //matrix1[i - 1] = [];
        for (let y = 1; y <= 10; y++) {
            let td = document.createElement('td');
            td.appendChild(document.createTextNode(i*y))

            tr.appendChild(td)
        }
        tbdy.appendChild(tr);
    }

    tbl.appendChild(tbdy);
    body.appendChild(tbl)


    let tb2 = document.createElement('table');

    tb2.setAttribute('border', '1');
    let tbdy2 = document.createElement('tbody');


    for (let i = 0; i < 10; i++) {
        let tr = document.createElement('tr');
        for (let y = 0; y < 10; y++) {
            let value;
            if (i === y) value = 1;
            else if (i + y === 9) value = 2;

            else if (i < 4 && i < 9 - y && y > i) value = 3;
            else if (i > 5 && i > 9 - y && i > y) value = 5;

            else if (y < 4 && y < 9 - i && i > y)value = 6;
            else if (y > 5 && y > 9 - i && y > i)value = 4;

            let td = document.createElement('td');
            td.appendChild(document.createTextNode(value));

            tr.appendChild(td)

        }
        tbdy2.appendChild(tr);
    }

    tb2.appendChild(tbdy2);
    body.appendChild(tb2);



    let tb3 = document.createElement('table');

    tb3.setAttribute('border', '1');
    let tbdy3 = document.createElement('tbody');


    let matrix3 = [];

    for (let i = 0; i < 10; i++) {
        matrix3[i] = [];
        let tr = document.createElement('tr');
        for (let y = 0; y < i + 1; y++) {

            if (y === 0 || i ===y) {
                matrix3[i][y] = 1;
            }
            else {
                matrix3[i][y] = matrix3[i-1][y-1] + matrix3[i-1][y];
            }
            let td = document.createElement('td');
            td.appendChild(document.createTextNode( matrix3[i][y]));

            tr.appendChild(td)
        }
        tbdy3.appendChild(tr);
    }
    tb3.appendChild(tbdy3);
     body.appendChild(tb3);


})();



