let opa = (n) => {
    let arr = [];
    for (let i = 0; i <= n / 2; i++) {
        if (n % i === 0) arr.push(i);
    }
    arr.push(n);
    return arr;
};

document.write(opa(30));