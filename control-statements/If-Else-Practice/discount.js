let amount = 2000;
let discount;

if (amount >= 5000) {
  discount = (amount / 100) * 20;
  console.log(`you got discount of ${discount} Rs`);
} else if (amount >= 3000) {
  discount = (amount / 100) * 10;
  console.log(`you got discount of ${discount} Rs`);
} else {
  console.log("No discount");
}
