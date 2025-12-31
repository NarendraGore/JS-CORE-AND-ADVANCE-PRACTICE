// Intermediate – Logical IF-ELSE Problems

// Write a program to assign grades based on marks:

// ≥90 → A

// ≥75 → B

// ≥60 → C

// else → Fail

function gradeAssign(mark){
  if(mark>=90){
    console.log("You passed with grade A.")
  }else if(mark>=75){
    console.log("You passed with grade B.")
  }else if(mark>=60){
    console.log("You passed with grade c.")
  }else{
    console.log("You Failed in Exam.")
  }
}

gradeAssign(70);
gradeAssign(90);
gradeAssign(65);
gradeAssign(49);
gradeAssign(85);
