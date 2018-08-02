(()=> {
    `use strict`;
    let arr=["one","two","three","four","five"];
    function inArray(str, arr) {
        let newstr;
        for(let i=0;i <arr.length;i++) {
            newstr = arr[i] === str;
            if(newstr===true)return true;
        }
        return newstr;
    }

   alert(inArray("ten", arr));//false
    alert(inArray("four", arr));//true
    alert(inArray("five", arr));//true
    alert(inArray("ttt", arr));//false

})();