(() => {
    `use strict`;
    let str = `123456`;

    let arr = str.split('');
    str = ``;
    for (let i = 0; i < arr.length; i += 2) {
        str += arr[i + 1] + arr[i];
    }


    console.log(str);
})();