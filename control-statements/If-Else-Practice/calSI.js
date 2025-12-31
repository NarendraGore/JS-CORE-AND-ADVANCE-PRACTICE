let principal = 1000;
let rate = 10;
let time = 10;

let simpleInterest = (principal * rate * time) / 100;

if (simpleInterest > 0) {
  console.log("Profit");
} else {
  console.log("Loss");
}
