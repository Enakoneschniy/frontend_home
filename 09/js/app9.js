function isNumberInRange(r) {
    if (r > 0 && r < 10) {
        document.write('<p>' + 'True' + '</p>');
        return true;
    }
    else {
        document.write('<p>' + 'False' + '</p>');
        return false;
    }
}




let arr1 = [3, 43, 13, 43, 14, 15, 3, 14, 18, 9, 4, 1, 2];
let arr2 = [];
for (let i = 0; i < arr1.length; i++) {
    if (isNumberInRange(arr1[i])) {
        arr2.push(arr1[i]);
    }
}
document.write(arr2);