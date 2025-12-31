function factorial(num){
  factorial= 1
  for(let i = 1; i<=num; i++){
    factorial = i*factorial
  }
  console.log(`factorial of ${num} is ${factorial}`)
}

factorial(5)