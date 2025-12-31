function findMax(obj){
let max = -Infinity;

for(let key in obj){
  if(obj[key]>max){
    max = obj[key]
  }
}
console.log(max)
}

let marks = {
  sub1:98,
  sub2:99,
  sub3:100,
  sub4:94,
  sub5:97,
}

findMax(marks)

let num = 49;
console.log(typeof num)