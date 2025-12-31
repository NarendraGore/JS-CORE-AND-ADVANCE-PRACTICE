//access using bracket;
//add new proprty grade;
//update the age property;
//delete propety;
//check if property exist;
//count number of properties;
//convert an object to array of keys;000


const student = {
  name:"abc",
  age:"26",
  marks:98
}

let name = student["name"];
let age = student["age"];
let marks = student["marks"]

console.log(`Student Details:
             Name: ${name}
             Age : ${age}
             Marks:${marks}`)

student.grade = "A"

console.log(student.grade)

student.age = "29"

console.log(student.age)

delete student.age;

console.log(student)

console.log("age" in student);
console.log("name" in student);
console.log("marks" in student);
console.log("grade" in student);
console.log("college" in student);

const newArray = Object.values(student)
console.log(newArray)

const count = Object.keys(student).length;
console.log(count)

for(let key in student){
  console.log(`${key} : ${student[key]}`)
}