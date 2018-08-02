(()=>{
`use strict`;
let str="программи́рование процесс создания компьютерных программ";

function ucfirst(str) {
    let newstr="";
    let arr=str.split(" ");
    for(let i=0;i<arr.length;i++){
        newstr+=arr[i].charAt(0).toUpperCase()+arr[i].slice(1)+" ";
    }
    return newstr;
}
    alert(ucfirst(str));
})();