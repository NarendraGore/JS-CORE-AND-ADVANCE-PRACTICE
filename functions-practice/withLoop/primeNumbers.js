function prime(N){
for(let n = 2; n<=N; n++){
 let isPrime= true;
  for(let i = 2; i<n; i++){
    if(n%i ===0){
      isPrime = false;
    }
  }
 if(isPrime){
  console.log(n)
 }
}
}
prime(10)
prime(20)
prime(30)
prime(40)
prime(50)
