let a = 2, b= 2, c =5;
let min, max;

if(a<=b && a<=c){
  min = a;
}else if(b<=a && b<=c){
  min = b;
}else{
  min = c;
}

if(a>=b && a>=c){
  max = a;
}else if(b>=a && b>=c){
  max = b; 
}else{
  max= c;
}

console.log(`Min : ${min}` );
console.log(`Max : ${max}`)