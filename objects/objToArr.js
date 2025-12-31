function objToArr(obj){
  let arr = Object.entries(obj)
  console.log(arr);
  
}

const SubjDetails = {
  sub1:"Phy",
  sub2:"Chem",
  sub3:"Bio",
  sub4:"Math",
  sub5:"Sci",
  mark1:98,
  mark2:99,
  mark3:95,
  mark4:97,
  mark5:96,
}
objToArr(SubjDetails)

let clone = {...SubjDetails}
console.log(clone)