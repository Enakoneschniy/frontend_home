function isEven(d) {
    if (d % 2 === 0) {
        document.write('<p>' + 'True' + '</p>');
        return true;
    }
    else {
        document.write('<p>' + 'False' + '</p>');
        return false;
    }
}

document.write('<p>' + isEven(21) + '</p>');

let arr3 = [1, 4, 5, 8, 4, 57, 77, 32, 2, 3, 7];
let arr4 = [];
for (let i = 0; i < arr3.length; i++) {
    if (isEven(arr3[i])) {
        arr4.push(arr3[i]);
    }
}
document.write(arr4);