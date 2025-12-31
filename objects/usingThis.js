const person = {
  name:"abc",
  age:29,
  city:"mumbai",
  display:function(){
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`city: ${this.city}`)
  }
}

person.display()