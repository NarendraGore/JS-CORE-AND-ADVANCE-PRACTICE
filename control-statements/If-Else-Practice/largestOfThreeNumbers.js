//Write a program to find the largest of three numbers.

let num1 = 10;
let num2 = 50;
let num3 = 30;

if (num1 > num2 && num1 > num3) {
  console.log(`${num1} is a greater number.`);
} else if (num2 > num1 && num2 > num3) {
  console.log(`${num2} is a greater number`);
} else {
  console.log(`${num3} is a greater number`);
}
