function sumOfDigits(num){
  let sum = 0;

  for(; num>0; num = Math.floor(num/10)){
    let digit  = num%10;
    sum =sum+digit;
  }

  console.log("Sum of digit is "+sum)
}
sumOfDigits(105)
sumOfDigits(110)
sumOfDigits(112)
sumOfDigits(92)
sumOfDigits(5)
