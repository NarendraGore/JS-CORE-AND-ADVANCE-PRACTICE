let a = 70;
let b = 60;
let c = 50;

if (a === b && b === c) {
  console.log("Equilateral Traingle");
} else if (a === b || a === c || b === c) {
  console.log("Isosceles Triangle.");
} else {
  console.log("Scalene Triangle");
}
