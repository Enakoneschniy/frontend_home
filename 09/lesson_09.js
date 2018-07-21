'use strict';

/*Task_01 ====================================*/

// Заполните массив следующим образом: в первый элемент запишите 'x', 
// во второй 'xx', в третий 'xxx' и так далее

/*let arr = [];

for(let i = 0; i < 10; i++) {
  arr[i] = '';
  for(let j = 0; j <= i; j++){
    arr[i] += 'x';
  }
}

console.log(arr);*/





/*Task_02 ====================================*/

// Заполните массив следующим образом: в первый элемент запишите '1', 
// во второй '22', в третий '333' и так далее.

/*let arr = [];

for(let i = 1; i <= 10; i++) {
  arr[i] = '';
  for(let j = 1; j <= i; j++){
    arr[i] += i;
  }
}

console.log(arr);*/





/*Task_03 ====================================*/

// Сделайте функцию arrayFill, которая будет заполнять массив 
// заданными значениями. Первым параметром функция принимает значение, 
// которым заполнять массив, а вторым - сколько элементов должно 
// быть в массиве. Пример: arrayFill('x', 5) 
// сделает массив ['x', 'x', 'x', 'x', 'x'].


/*function arrayFill (value, iteration) {
  let arr = [];
  for(let i = 0; i < iteration; i++){
    arr[i] = value;
  }

  return arr;
}

console.log( arrayFill('x', 5) );*/






/*Task_04 ====================================*/

// Дан массив с числами. Узнайте сколько элементов с 
// начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

/*let arr = [2, 4, 1, 2, 1, 1];

function sumElements (arr) {
  let sum = 0;

  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
    if (sum > 10) {
      return sum + ' ' + i + ' элементов';
    } else if (sum < 10 && i + 1 == arr.length) {
      return 'не хватило элементов, sum = ' + sum;
    }
  }
}

console.log(sumElements(arr));*/






/*Task_05 ====================================*/

// Дан массив с числами. Не используя метода reverse 
// переверните его элементы в обратном порядке.

/*let arr = [2, 4, 6, 8, 10];
let newArr = [];

console.log(arr);

for(let i = 0; i < arr.length; i++){
  newArr[i] = arr[arr.length - i - 1];
}

arr = newArr;
console.log(arr);*/






/*Task_06 ====================================*/

// Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]].
// Найдите сумму элементов этого массива. Массив, конечно же, 
// может быть произвольным.

/*let arr = [[1, 2, 3], [4, 5], [6]];
let sum = [];
let result = 0;

for(let i = 0; i < arr.length; i++){
  sum[i] = 0;
  for(let j = 0; j < arr[i].length; j++){
    sum[i] += arr[i][j];
  }

  result += sum[i];
}

console.log(result);*/






/*Task_07 ====================================*/

// Дан трехмерный массив с числами, например 
// [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. 
// Найдите сумму элементов этого массива. Массив, конечно же, 
// может быть произвольным.

/*let arr = [[[5, 2], [3, 4]], [[5, 6], [7, 8]], [[1, 2], [3, 4]]];
let sum = [];
let result = 0;
let result2Floor = 0;

for(let i = 0; i < arr.length; i++){
  sum[i] = [];
  for(let j = 0; j < arr[i].length; j++){
    sum[i][j] = 0;
    for(let k = 0; k < arr[i][j].length; k++){
      sum[i][j] += arr[i][j][k];
    }
    result2Floor += sum[i][j];
  }
  result += result2Floor;
  result2Floor = 0;
}

console.log(result);*/







/*Task_08 ====================================*/

// Сделайте функцию isNumberInRange, которая параметром принимает 
// число и проверяет, что оно больше нуля и меньше 10. Если это так -
//  пусть функция возвращает true, если не так - false.


/*function isNumberInRange (num) {
  return (num > 0 && num < 10) ? true : false;
}

console.log(isNumberInRange(0));
console.log(isNumberInRange(5));
console.log(isNumberInRange(7));
console.log(isNumberInRange(10));
console.log(isNumberInRange(15));*/









/*Task_09 ====================================*/

// Дан массив с числами. Запишите в новый массив только те числа, 
// которые больше нуля и меньше 10-ти. Для этого используйте 
// вспомогательную функцию isNumberInRange из предыдущей задачи.

/*function isNumberInRange (num) {
  return (num > 0 && num < 10) ? true : false;
}

let arr = [11, 2, 6, 16, -32, 5, 9, 70];
let resultArr = [];

for(let i = 0; i < arr.length; i++){
  if(isNumberInRange(arr[i])) resultArr.push(arr[i]);
}

console.log(resultArr);*/






/*Task_10 ====================================*/

// Сделайте функцию isEven() (even - это четный), 
// которая параметром принимает целое число и проверяет:
// четное оно или нет. Если четное - пусть функция возвращает true, 
// если нечетное - false.

/*function isEven (value) {
  return (value % 2) ? false : true;
}

console.log(isEven (1));
console.log(isEven (2));*/






/*Task_11 ====================================*/

// Дан массив с целыми числами. Создайте из него новый массив, 
// где останутся лежать только четные из этих чисел. 
// Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

/*function isEven (value) {
  return (value % 2) ? false : true;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr = [];

for(let i = 0; i < arr.length; i++){
  if(isEven(arr[i])) newArr.push(arr[i]);
}

console.log(newArr);*/







/*Task_12 ====================================*/

// Сделайте функцию getDivisors, которая параметром 
// принимает число и возвращает массив его делителей 
// (чисел, на которое делится данное число).

/*function getDivisors (num) {
  let arr = [];
  for(let i = 0; i <= num/2; i++){
    if(num % i == 0 && i !== 1 && i !== num) arr.push(i);
  }
  return arr;
}

console.log(getDivisors(10));
console.log(getDivisors(50));
console.log(getDivisors(36));*/







/*Task_13 ====================================*/

// Дан массив [1, 2, 3, 4, 5, 6]. 
// Сделать из него массив [2, 1, 4, 3, 6, 5]

/*let arr = [1, 2, 3, 4, 5, 6];
let newArr = [];
let num;

for(let i = 0; i < arr.length; i+= 2){
  num = arr[i];
  newArr[i] = arr[i + 1];
  newArr[i + 1] = num;
}

console.log(newArr);*/






/*Task_14 ====================================*/

// Дан массив [1, 2, 3, 4, 5, 6]. 
// Сделать из него массив [5, 6, 3, 4, 1, 2]

/*let arr = [1, 2, 3, 4, 5, 6]
let arrReverse = arr.reverse();
let newArr = [];
let num;

for(let i = 0; i < arrReverse.length; i+= 2){
  num = arrReverse[i]
  newArr[i] = arrReverse[i + 1];
  newArr[i + 1] = num;
}

console.log(newArr);*/






/*Task_15 ====================================*/

// Матрица 1

/*let arr = [];
let num = 1;

for(let i = 1; i <= 10; i++){
  arr[i] = [];
  for(let j = 1; j <= 10; j++){
    arr[i][j] = i * j;
    num++;
  }
}

console.log(arr);*/







// Матрица 2

/*let arr = [];
let num = 1;

for(let i = 0; i < 10; i++){
  arr[i] = [];
  for(let j = 0; j < 10; j++){
    arr[i][j] = 0;
    if(i === j) {
      arr[i][j] = 1;
    } else if (j === 9 - i) {
       arr[i][j] = 2;
    } else if (i < 4 && j > i && j < 9 - i){
      arr[i][j] = 3;
    } else if (j > 4 && j > i && j > 9 - i) {
      arr[i][j] = 4;
    } else if (i > 4 && j < i && j > 9 - i) {
      arr[i][j] = 5;
    } else if (j < 4 && j < i && j < 9 - i) {
      arr[i][j] = 6;
    }
  }
}

console.log(arr);*/







// Матрица 3

/*let arr = [];

for(let i = 0; i < 10; i++){
  arr[i] = [];
  for(let j = 0; j < 10; j++){
    if(j > i) {
      continue;
    } else if(j == i) {
      arr[i][j] = 1;
      arr[i][0] = 1;
    } else if (i > 1 && j > 0) {
      arr[i][j] = arr[i - 1][j] + arr[i - 1][j - 1];
    }
  }
}

console.log(arr);*/

























