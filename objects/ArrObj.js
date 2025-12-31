const student = {
  subject:["Chem","Bio","Phy","Math","Sci"],
  marks:[98,99,95,96,97]
}
console.log("Subject Name: "+student.subject);
console.log("Subject Marks:"+student.marks);
console.log("Student Detais:"+ student);
console.log(student);

for(let i =0; i<student.marks.length; i++){
  console.log(student.marks[i])
}
