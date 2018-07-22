let arr = [1, 2, 3, 4, 5, 6];

let removedPart1 = arr.splice(0, 2);

let removedPart2 = arr.splice(2, 4);

arr = removedPart2.concat(arr, removedPart1);

document.write(arr);
