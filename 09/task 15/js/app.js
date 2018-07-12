//HOMEWORK

'use strict';


let matrix1 = [];
for (let i = 1; i <= 10; i++) {
    matrix1[i - 1] = [];
    for (let y = 1; y <= 10; y++) {
        matrix1[i - 1][y - 1] = i * y;
    }
}
console.log(matrix1);

console.log('============================');

let matrix2 = [];
for (let i = 0; i < 10; i++) {
    matrix2[i] = [];
    for (let y = 0; y < 10; y++) {
        if (i === y) matrix2[i][y] = 1;
        else if (i + y === 9) matrix2[i][y] = 2;

        else if (i < 4 && i < 9 - y && y > i) matrix2[i][y] = 3;
        else if (i > 5 && i > 9 - y && i > y) matrix2[i][y] = 5;

        else if (y < 4 && y < 9 - i && i > y) matrix2[i][y] = 6;
        else if (y > 5 && y > 9 - i && y > i) matrix2[i][y] = 4;


    }
}
console.log(matrix2);

console.log('============================');

let matrix3 = [];

for (let i = 0; i < 10; i++) {
    matrix3[i] = [];
    for (let y = 0; y < i + 1; y++) {
        if (y === 0 || i ===y) {
            matrix3[i][y] = 1;
        }
        else {
            matrix3[i][y] = matrix3[i-1][y-1] + matrix3[i-1][y];
        }
    }
}
console.log(matrix3);