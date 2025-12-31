console.log("Data Types :");

let obj = {
  name: "xyz",
  age: 23,
};

console.log(obj);

console.log(null === undefined);

console.log(Number.isNaN());

//console.log([1,2]===[1,2])

console.log(-Infinity < -1000);

const objec = {
  name: "abc",
  age: 25,
  address: {
    city: "pune",
  },
};
console.log(objec);
console.log(obj.address?.city);
console.log(objec.address?.city);



//If Statement

let num = 5;
if(num>0){
  console.log(num+" is a positive Number.")
}