function getValues(obj){
  return Object.values(obj);
}

let person = {
    name:"abc",
    age:"29",
    marks:98,
}

console.log(getValues(person))

