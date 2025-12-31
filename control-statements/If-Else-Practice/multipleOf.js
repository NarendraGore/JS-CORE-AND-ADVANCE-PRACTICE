// Write a program to check whether a number is a multiple of 3 or 7.

function multipleOf(num) {
  if (num % 3 === 0 && num % 7 === 0) {
    console.log(`${num} is multiple of 3 & 7`);
  } else if (num % 3 == 0) {
    console.log(`${num} is only multiple of 3`);
  } else if (num % 7 == 0) {
    console.log(`${num} is only multiple of  7`);
  } else {
    console.log(`${num} is not multiple of 3 & 7`);
  }
}

multipleOf(10);
multipleOf(21);
multipleOf(30);
multipleOf(35);
multipleOf(110);
