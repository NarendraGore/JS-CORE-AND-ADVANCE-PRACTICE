let person = {
  name: "Amit",
  age: 25,
  city: "Pune",
};

for (let key in person) {
  console.log(`${key} : ${person[key]}`);
}

let mobile = {
  brand: "Samsung",
  price: 20000,
  color: "Black",
  warranty: "1 year",
};

let count = 0;

for (let key in mobile) {
  count++;
}
console.log("Total Properties", count);

let car = {
  brand: "Tata",
  model: "Nexon",
  year: 2023,
};

let exists = false;

for (let key in car) {
  if (key === "car") {
    exists = true;
    break;
  }
}
if (exists) {
  console.log("Property exist");
} else {
  console.log("property does not exist");
}

let marks = {
  math: 80,
  science: 70,
  english: 90,
};

let sum = 0;
for (let key in marks) {
  sum = sum + marks[key];
}
console.log("sum", sum);


console.log("Count numeric values")
let data = {
  id: 101,
  name: "Rahul",
  score: 85,
  active: true,
};

let count1  = 0; 
for(let key in data){
  if(typeof data[key] === "number"){
    count1++;
  }
}
console.log("Count of numeric properties: ", count1);

console.log("Convert object to array")

let user = {
  name: "Ravi",
  age: 28,
  city: "Mumbai"
};

let arr = Object.entries(user);
console.log(arr)

let result  = [];
for(let key in user){
  result.push([key, user[key]])
}
console.log(result);

console.log("Find Maximum Value");

let salaries = {
  A: 25000,
  B: 30000,
  C: 28000
};
let highest = -Infinity;
for(let key in salaries){
  if(salaries[key]>=highest){
    highest = (key, salaries[key])
  }
}
console.log(highest)

console.log("Copy the object")

let original = {
  product: "Laptop",
  price: 50000
};

let copy = {};

for(let key in original){
  copy[key] = original[key]
}
console.log(copy)

console.log("Nested object Access");

let company = {
  name: "abc",
  address: {
    city: "Pune",
    pincode: 411001
  }
};
