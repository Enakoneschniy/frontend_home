let arr = [];
let n = parseInt(prompt('Введите размер !!'));
for (let i = 1; i <= n; i++) {
    arr.push(String(i).repeat(i));
}

document.write(arr);