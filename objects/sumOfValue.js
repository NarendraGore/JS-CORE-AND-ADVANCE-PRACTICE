function sumOfValue(obj){
  let sum = 0;
  
  for(let key in obj){
    sum = sum+obj[key];
  }
  console.log(sum);

}

let marks = {
  sub1:98,
  sub2:99,
  sub3:95,
  sub4:99,
  sub5:97,
}

sumOfValue(marks)