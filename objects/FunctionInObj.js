const person = {
  name:"abc",
  age:29,
  city:"mumbai",
  greet: function(name){
    console.log(`Hello, ${name}`)
  }
}

person.greet(person.name)