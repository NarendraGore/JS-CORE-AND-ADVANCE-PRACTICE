// Write a program to check whether a number is divisible by 5 and 11.


function divisble(num) {
  if (num % 5 === 0 && num % 11 === 0) {
    console.log(`${num} is divsible by 5 & 11`);
  } else {
    console.log(`${num} is not divisible by 5 & 11`);
  }
}

divisble(5);
divisble(7);
divisble(22);
divisble(55);
divisble(110);
