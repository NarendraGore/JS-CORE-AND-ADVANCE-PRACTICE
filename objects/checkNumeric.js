function checkNumeric(obj){

  let count  = 0;

  for(let key in obj){
    if(typeof obj[key] === "number"){
      count++;
    }
  }
  console.log(`object having ${count} numeric values.`)

}

let subjectDetails = {
  sub1:"Phy",
  sub2:"Sci",
  sub3:"Chem",
  sub4:"Math",
  sub5:"Bio",
  mark1:98,
  mark2:98,
  mark3:95,
  mark4:99,
  mark5:96
}

checkNumeric(subjectDetails)