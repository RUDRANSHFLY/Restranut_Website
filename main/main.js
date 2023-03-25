
const plus = document.querySelector(".plus")
,minus = document.querySelector(".minus"),
num = document.querySelector(".num");
var t = document.getElementById("par").innerHTML;

let a = 1 ;

plus.addEventListener("click",()=>{
  
    a++;
    a = (a < 10) ? "0" + a : a ;
    num.innerText = a ; 
    var to = t * a ; 
    par.innerText = to;
    console.log("a");
    console.log(to);
  
});
minus.addEventListener("click",()=>{
  if(a >1){
    a--;
    a = (a < 10) ? "0" + a : a ;
    num.innerText = a ;
    var to = t * a ; 
    par.innerText = to;
    console.log("a");
    console.log(to);
  }
});