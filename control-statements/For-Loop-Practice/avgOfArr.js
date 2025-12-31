//Average of Array elements
let arr=[10,20,30,40,50]
let sum = 0

for(let i = 0; i<arr.length; i++){
  sum = sum+arr[i]
}

let avg = sum/arr.length;

console.log(`average of elements of array:${avg}` )