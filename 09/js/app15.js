let Table = document.getElementById('tab');
let matrixHolder = document.getElementById('matrix');
let pascalT = document.getElementById('pascal');
matrixHolder.innerHTML = display(matrix(10));
Table.innerHTML = display(multi(10));
pascalT.innerHTML = display(pascal(10));

function display(arr) {
    let rowKol = arr.length;
    let sol = [];
    for (let h = 0; h < rowKol; h++) {
        let row = ['<tr><td>', arr[h].join('</td><td>'), '</td></tr>'].join('');
        sol.push(row);
    }
    return sol.join('');
}

function multi(size) {
    let table = [];
    for (let i = 0; i < size; i++) {
        table[i] = [];
        for (let h = 0; h < size; h++) {
            table[i][h] = ((h + 1) * (i + 1))
        }
    }

    return table;
}


function matrix(size) {
    let matrix = [];
    for (let i = 0; i < size; i++) {
        matrix[i] = [];
        for (let h = 0; h < size; h++) {
            if (i === h) {
                matrix[i][h] = 1;
            }
            else if (i + h === size - 1) {
                matrix[i][h] = 2;
            }
            else if (i > h && i + h + 1 < size) {
                matrix[i][h] = 6;
            }
            else if (i < h && i + h + 1 < size) {
                matrix[i][h] = 3;
            }
            else if (i > h && i + h + 1 > size) {
                matrix[i][h] = 5;
            }
            else {
                matrix[i][h] = 4;
            }
        }
    }
    return matrix;
}

function pascal(size) {
    let triangle = [];
    for (let i = 0; i < size; i++) {
        triangle[i] = [];
        for (let h = 0; h < size; h++) {
            if (i === h || h <= 0) {
                triangle[i][h] = 1;
            }
            else if (h >= size - 9 && i <= size - 1 && size <= i - h + 9) {
                triangle[i][h] = +triangle[i - 1][h] + +triangle[i - 1][h - 1];
            }
        }
    }
    return triangle;
}



