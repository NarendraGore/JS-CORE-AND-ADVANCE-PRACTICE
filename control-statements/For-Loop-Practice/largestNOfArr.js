//  find the largest number of an Array;

let arr = [10,20,50,7,50,90,82,100,500,625,125,150]
let largest = arr[0]

for(let i = 1; i<=arr.length; i++){
  if(arr[i]>largest){
    largest = arr[i]
  }
}
console.log(largest)


