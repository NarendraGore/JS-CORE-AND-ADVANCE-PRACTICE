// function isPrime(num) {
//   if (num <= 1) return false;

//   for (let i = 2; i < Math.sqrt(num); i++) {
//     if (num % i == 0) {
//       return false;
//     }
//     return true;
//   }
// }

// console.log(isPrime(9));

function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Example
console.log(isPrime(9)); // true
