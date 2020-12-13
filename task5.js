console.log ("задача 5");
let m=prompt("введите первое число:",0);
let k=prompt("введите второе число:",0);
m=Number(m);
k=Number(k);
if (m==10 && k!=10 ||k==10 && m!=10 ||m+k==10){
    alert("true");
}else{
    alert("false");
}