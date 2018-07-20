;(()=> {
    function number() {
        while (true) {
            let a = parseFloat(prompt(' Введите количество элементов в массиве ', ''));
            if (!isNaN(a)) {
                return a;
            } else {
                alert('Введено не число, попробуйте снова !');

            }
        }
    }

function isNumberInRange (a) {
        return a>0&&a<10;
    
}

    let arr=[1,10,20,3,5];
    let arrNew=[];

    for (let i=0;i<arr.length;i++)
        arrNew[i]=isNumberInRange(arr[i]);

    console.log(arrNew);

    console.log(`=============================================`);
    let arr2=[];
    for(let i=0;i<arr.length;i++)
   {
            arr2.push(arr[i]);

   }
        console.log(arr2);
    })();


