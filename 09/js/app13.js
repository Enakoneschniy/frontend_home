let arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr.length; i += 2) {
    let c = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = c;

}

document.write(arr);