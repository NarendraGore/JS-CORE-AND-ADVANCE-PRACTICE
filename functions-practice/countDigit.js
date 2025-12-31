function countDig(num){
  let count  = 0;
for(; num>0; num = Math.floor(num/10)){

   count++;
}

console.log(count)
}

countDig(15)