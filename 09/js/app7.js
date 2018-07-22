let sum = 0;
let sumMat = [];
let size = 3;
for (let i = 0; i < size; i++) {
    sumMat[i] = [];
    for (let j = 0; j < size; j++) {
        sumMat[i][j] = [];
        for (let k = 0; k < size; k++) {
            sumMat[i][j][k] = parseInt(Math.random() * 11);

        }
    }
}
document.write('<p>'+sumMat+'</p>');
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        for (let k = 0; k < size; k++) {
            sum += sumMat[i][j][k];
        }
    }
}
document.write(sum);