let val;
function display(val){
  document.getElementById("main").value +=val;
 
}
function solve(){
    let a=document.getElementById("main").value;
    let b=eval(a);
    document.getElementById("main").value=b;

}

function clr(){
    document.getElementById("main").value="";
}
function percentage(){
    let r = document.getElementById("main").value;
    let s = r /100;
    document.getElementById("main").value=s;
}
