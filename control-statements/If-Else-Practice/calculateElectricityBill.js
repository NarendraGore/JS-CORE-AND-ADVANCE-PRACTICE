// Write a program to calculate electricity bill:

// Units ≤100 → ₹1/unit

// 101–200 → ₹2/unit

// 200 → ₹3/unit

function calculateBill(unit) {
  if (unit <= 100) {
    console.log("1rs per unit");
  } else if (unit > 100 && unit <= 200) {
    console.log("2rs per unit");
  } else {
    console.log("3rs per unit");
  }
}

calculateBill(300);
calculateBill(200);
calculateBill(100);
calculateBill(80);
