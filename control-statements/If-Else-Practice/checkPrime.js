let num = 11;
isPrime = true;

if(num<=1){
  isPrime = false;

}else{
  for(let i = 2; i<num ; i++){
    if(num%i===0){
      isPrime = false;
      break;
    }
  }
}

if(isPrime){
  console.log("Number is Prime")
}else{
  console.log("Number is Not a Prime Number")
}