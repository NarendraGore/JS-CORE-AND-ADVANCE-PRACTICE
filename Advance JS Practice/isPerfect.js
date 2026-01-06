function isPerfect(num){
  let sum = 0;
  for(let i =1; i<num; i++){
    if(num%i===0){
      sum += i
    }
  }
  if(sum === num){
    console.log(`${num} is a perfect Number`)
  }else{
    console.log(`${num} it is not a perfect Number`)

  }
}

isPerfect(125);
isPerfect(6);
isPerfect(15);
isPerfect(55);
isPerfect(10);
isPerfect(28);
isPerfect(496);
isPerfect(8128);

