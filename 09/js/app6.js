let mas = [];
let N = 2;
let sumMas = 0;
for (let row = 0; row < N; row++) {
    mas[row] = [];
    for (let cols = 0; cols < N; cols++) {
        mas[row][cols] = parseInt(Math.random() * 11);
    }
}
document.write('<p>'+mas+'</p>');
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        sumMas += mas[i][j];
    }
}
document.write(sumMas);
