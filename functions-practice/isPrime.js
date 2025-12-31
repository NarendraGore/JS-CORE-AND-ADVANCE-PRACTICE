const isPrime = (num) => {
  let isPrime = true;
  if (num <= 1) {
    isPrime = false;
    
  }else{

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}
  if (isPrime) {
    console.log("Number is Prime");
  } else {
    console.log("Number is not Prime");
  }
};
isPrime(100);
isPrime(97);
isPrime(7);
isPrime(13);
isPrime(12);
isPrime(19);

