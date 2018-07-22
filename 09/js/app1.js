function enter() {
    let num;
    while (true) {
        num = parseInt(prompt(`Введите размер`));
        return num;
    }
}

let iterations = enter();
let array = [];
for (let i = 1; i <= iterations; i++) {
    array.push('x'.repeat(i))
}

document.write(array);