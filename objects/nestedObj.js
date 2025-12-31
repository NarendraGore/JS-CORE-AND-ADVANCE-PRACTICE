const car ={
  name:"VS",
  color:"Red",
  price:10.00,
  brand:{
    brand1:"Tata",
    brand2:"Isuzu",
    brand3:"BMW",
    brand4:"Volvo",
  }
}

console.log(car.brand["brand2"] )
console.log(car.brand["brand3"] )

car.brand.brand3 = "Suzuki";

console.log(car.brand["brand3"])
console.log(car)