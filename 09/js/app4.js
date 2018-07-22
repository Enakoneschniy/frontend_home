function foo(mas1) {
    let sum = 0;
    for (let i = 0; i < mas1.length; i++) {
        sum += mas1[i];
        if (sum > 10) {
            return i + 1;
        }
    }

}

document.write(foo([3, 4, 1, 3, 7]));



