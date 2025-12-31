function removeDuplicate(arr){
let unique = [];

for(let i = 0; i<arr.length; i++){
  if(!unique.includes(arr[i])){
    unique.push(arr[i])
  }
}
console.log(unique)
}

let arr = [10,10,2,2,5,5,2,45,57,98,45,6,45,8,8,9,9,8,59,98,789,9,1,1]
removeDuplicate(arr);
