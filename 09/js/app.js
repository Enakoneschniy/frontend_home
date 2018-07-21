
let mas6 = [];
let b = 'x';
mas6[0] = b;
let N = parseInt(prompt('Введите размер массива'));
for (let i = 1; i < N; i++) {
    b += 'x';
    mas6[i] = b;
}
console.log(mas6);



let arr = [];
let o = parseInt(prompt('Введите размер массива'));
for (let i = 1; i <= o; i++) {
    arr.push(String(i).repeat(i));
}
console.log(arr);





let array = [];

function arrayFill(n, m) {
    for (let i = 0; i < m; i++) {
        array [i] = n;
    }
    console.log(array);
}

arrayFill('X',15);





function foo(mas1) {
    let sum = 0;
    for (let i = 0; i < mas1.length; i++) {
        sum += mas1[i];
        if (sum > 10) {
            return i + 1;
        }
    }
}

console.log(foo([5,3,1, 2, 5, 1, 4]));





let mas2 = [1, 2, 3, 4, 5];
let mas3 = [];
for (let i = mas2.length - 1; i >= 0; i--) {
    mas3.push(mas2[i]);
}
console.log(mas3);





let mas4 = [[1, 2, 3], [4, 5], [6]];
let sum = 0;
for (let i = 0; i > mas4.length; i++) {
    for (let j = 0; j < mas4.length; j++) {
        sum += mas4[i][j];
    }
}
console.log(mas4);





let mas5 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum1 = 0;
for (let i = 0; i > mas5.length; i++) {
    for (let j = 0; j < mas5.length; j++) {
        for (let k = 0; k < mas5.length; k++)
            sum1 += mas5[i][j][k];
    }
}
console.log(mas5);




function isNumberInRange(p) {
    if (p > 0 && p < 10) {
        console.log('true');
        return true;
    }
    else {
        console.log('false');
        return false;
    }
}

isNumberInRange(7);




let arr1 = [3, 14, 18, 9, 4, 1, 2];
let arr2 = [];
for (let i = 0; i < arr1.length; i++) {
    if (isNumberInRange(arr1[i])) {
        arr2.push(arr1[i]);
    }
}
console.log(arr2);




function isEven(d) {
    if (d % 2 === 0) {
        console.log('True');
        return true;
    }
    else {
        console.log('False');
        return false;
    }
}

isEven(20);





let arr3 = [1, 4, 5, 8, 2, 3, 7];
let arr4 = [];
for (let i = 0; i < arr3.length; i++) {
    if (isEven(arr3[i])) {
        arr4.push(arr3[i]);
    }
}
console.log(arr4);




function getDivisors(l) {
    let mass = [];
    for (let i = 0; i <= l; i++) {
        if (l % i === 0) {
            mass.push(i);
        }
    }
    console.log(mass);
    return mass;
}

let f = parseFloat(prompt('Введите число'));
getDivisors(f);




let mass5 = [1, 2, 3, 4, 5, 6];
mass5.splice(0, 6, 2, 1, 4, 3, 6, 5);
console.log(mass5);




let mass10 = [1, 2, 3, 4, 5, 6];
mass10.splice(0, 6, 5, 6, 3, 4, 1, 2);
console.log(mass10);





function genMatrix() {
    let mt = [];
    let N = 10;
    for (let i = 1; i <= N; ++i) {
        mt [i] = [];
        for (let j = 1; j <= N; ++j) {
            mt[i][j] = i * j;
        }
    }
    return mt;
}

let newMatrix = genMatrix();
console.log(newMatrix);




let mt1 = [];
for (let i = 0; i < 10; i++) {
    mt1[i] = [];
    for (let j = 0; j < 10; j++) {
        if (i === j) {
            mt1[i][j] = 1;
        }
        if (j === 10 - i - 1) {
            mt1[i][j] = 2;
        }
        if (i < 4 && i < 9 - j && j > i) {
            mt1[i][j] = 3;
        }
        if (i > 5 && i > 9 - j && j < i) {
            mt1[i][j] = 5;
        }
        if (j < 4 && j < 9 - i && i > j) {
            mt1[i][j] = 6;
        }
        if (j > 5 && j > 9 - i && i < j) {
            mt1[i][j] = 4;
        }
    }
}
console.log(mt1);

let Pascale = [];
for (let i = 0; i < 10; i++) {
    Pascale[i] = [];
    for (let j = 0; j < i + 1; j++) {
        if (j === 0 || i === j) {
            Pascale[i][j] = 1;
        }
        else
            Pascale[i][j] = Pascale[i - 1][j - 1] + Pascale[i - 1][j];

    }
}


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