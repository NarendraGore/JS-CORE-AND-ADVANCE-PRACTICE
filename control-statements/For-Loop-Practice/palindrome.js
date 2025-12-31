let num = 123;
let original = num;
let reverse = 0;

for(; num>0; num = Math.floor(num/10)){
  let digit = num%10;
  reverse = reverse * 10 + digit;
}

if(reverse === original){
  console.log(`${original} is palindrome...`)
}else{
  console.log(`${original} is not a palindrome...`)

}
