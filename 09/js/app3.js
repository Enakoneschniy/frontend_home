

function arrayFill(value, iterations) {
    let arr = [];
    for (let i = 1; i <= iterations; i++) {
        arr.push(value);
    }
    return arr;
}

document.write(arrayFill('x', 12));