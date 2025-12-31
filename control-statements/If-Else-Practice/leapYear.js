//Write a program to check whether a year is a leap year.
//DIvisible by 400
// divisble by 4 but not by 100
let year = 2003;


// function isLeapYear(){}
if (year % 400 === 0) {
  console.log(`${year} is a leap year.`);
} else if (year % 4 == 0 && year % 100 !== 0) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}
